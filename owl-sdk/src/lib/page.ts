import supper from "./supper";
import submitPool from "../base/submitPool";
import tools from "../base/tools";
import config from "../base/config";
import FMPTiming from "./fmp";
// @ts-ignore
class page extends supper {
  loadInfo: Object = {};
  TYPE: string = "page";
  winPf = window.performance;
  times: Object = this.winPf
    ? this.winPf["timing"] || this.winPf.getEntriesByType("navigation")[0]
    : {};
  fmp = null;
  //解决内部onload方法覆盖用户定义全局onload方法
  onloadFun: Function = window.onload || function() {};
  // 自定义字段列表
  customPerf = ["cfpt"];
  constructor() {
    //载入数据信息
    super();
  }
  /**
   * 初始化数据
   */
  init(win_, baseInfo_) {
    super.init(win_, baseInfo_);
    const useFMP = config.__useFMP;
    if (useFMP) {
      this.getFMPtiming();
    }
  }

  /**
   * 获取页面加载信息
   */
  getLoadPageInfo() {
    /**
     * 获取浏览器时间轴信息
     */
    this.loadInfo["timeJson"] = JSON.stringify(this.times);
    let times = <any>this.times;
    let start = 0;
    if (undefined !== times.navigationStart) {
      start = tools.toFixed2(times.navigationStart);
    }
    /** 阶段耗时 -- start --**/
    //dns解析时间
    this.loadInfo["dnsTime"] = tools.toFixed2(
      times.domainLookupEnd - times.domainLookupStart
    );
    //tcp连接时间
    this.loadInfo["tcpTime"] = tools.toFixed2(
      times.connectEnd - times.connectStart
    );
    //网络请求耗时（新增）time to first byte
    this.loadInfo["ttfb"] = tools.toFixed2(
      times.responseStart - times.requestStart
    );
    //数据传输耗时（新增）
    this.loadInfo["trans"] = tools.toFixed2(
      times.responseEnd - times.responseStart
    );
    //dom解析耗时（新增）
    this.loadInfo["domParsingTime"] = tools.toFixed2(
      times.domInteractive - times.responseEnd
    );
    //资源加载耗时（新增）
    this.loadInfo["resLoadTime"] = tools.toFixed2(
      times.loadEventStart - times.domContentLoadedEventEnd
    );
    // 前端onload 执行时间 (add: 2019-07-15)
    this.loadInfo["onLoadTime"] = tools.toFixed2(
      times.loadEventEnd - times.loadEventStart
    );

    //白屏时间(空页面时间)
    // this.loadInfo["blankTime"] = tools.toFixed2(blankTime - start);
    // fpt First Paint Time, 首次渲染时间 / 白屏时间 (update: 2019-07-17)
    this.loadInfo["blankTime"] = tools.toFixed2(
      times.responseEnd - times.fetchStart
    );

    // fmp first meaning paint, 也就是主要内容可见时间 todo
    // fmp 不可通过指标减法直接得出。先不取
    // 首屏时间   首屏时间计算方式待确认，先不使用。
    this.loadInfo["firstTime"] = tools.toFixed2(times.responseStart - start);

    // First byte time, 首包时间 (add: 2019-07-17)
    this.loadInfo["fbt"] = tools.toFixed2(
      times.responseStart - times.domainLookupStart
    );

    // Time to Interact 首次可交互时间 (add: 2019-07-17)
    this.loadInfo["tti"] = tools.toFixed2(
      times.domInteractive - times.fetchStart
    );

    // DOM Ready时间、  原来意思为：资源渲染时间
    this.loadInfo["resourceTime"] = tools.toFixed2(
      times.domContentLoadedEventEnd - times.fetchStart
    );

    //最终时间 页面完全加载 (update：2019-07-15 ）
    this.loadInfo["finalTime"] = tools.toFixed2(
      times.loadEventStart - times.fetchStart
    );
    /** 关键性能指标 -- end --**/

    this.loadInfo["resourcesTime"] = this.getResourceTimes();

    // memory 统计2019-08-21
    // todo 应该存放到base中
    let memory = this.winPf && this.winPf["memory"];
    if (memory) {
      this.loadInfo["mused_p"] = Number(
        ((memory.usedJSHeapSize / memory.totalJSHeapSize) * 100).toFixed(0)
      ); // JS 对象（包括V8引擎内部对象）占用的内存
      this.loadInfo["mused"] = memory.usedJSHeapSize; // JS 对象（包括V8引擎内部对象）占用的内存
      this.loadInfo["mtotal"] = memory.totalJSHeapSize; // 可使用的内存
      this.loadInfo["mlimit"] = memory.jsHeapSizeLimit; // 内存大小限制
    }

    this.loadInfo["type"] = this.TYPE;
  }
  getResourceTimes() {
    let resTimes = [];
    if (this.winPf && this.winPf.getEntriesByType) {
      let rts = this.winPf.getEntriesByType("resource");
      if (rts && Array.isArray(rts)) {
        rts.forEach(t => {
          resTimes.push({
            type: (t["initiatorType"] + "").toUpperCase(),
            path: t["name"],
            duration: t["duration"],
            connectStart: t["connectStart"],
            /*
            2019-7-29
            duankai
            转换后的文件大小，与chrome的devtool Network里的size一致
              */
            transferSize: t["transferSize"]
          });
        });
      }
    }
    return resTimes;
  }

  /**
   * 保存自定义性能指标 todo 实验项目
   *  cfpt  自定义首屏数据
   * @param cfpt
   */
  saveCustomPerf({ cfpt }) {
    if (cfpt) {
      this.loadInfo["cfpt"] = cfpt;
    }
  }
  /**
   * 获取fmp时间
   */
  getFMPtiming() {
    let fmp = new FMPTiming();
    this.fmp = fmp;
    // todo test fmp2;
  }
  /**
   * 提交首屏时间，首屏时间只在页面加载完成之事提交，具只提交一次。所以独立提交。
   */
  submit() {
    const useFMP = config.__useFMP;
    //是否忽略抽样
    //是否debugger
    //就否命中采样。没有命中则不进行操作
    //是否是命中忽略url关健字。
    if (
      !config.__debug &&
      config.__isPvRatio &&
      !tools.isTakeSample(config.__pvRatio)
    ) {
      return;
    }
    if (this.winPf) {
      tools.on(window, "load", () => {
        this.onloadFun();
        // onload之时 loadEventEnd并没有值。 所以settimeout
        setTimeout(() => {
          tools.log("onload", this.times["loadEventEnd"]);
          this.getLoadPageInfo();
          // 过滤超大异常值
          const loadInfo = this.dataCheck();
          // 确认fmp统计完成
          if (useFMP) {
            this.fmp
              .getFMP()
              .then(response => {
                submitPool.pushDatas(
                  tools.assign(loadInfo, {
                    ...this.baseInfo,
                    fmp: response
                  })
                );
              })
              .catch(e => {
                console.log(e);
              });
          } else {
            submitPool.pushDatas(
              tools.assign(loadInfo, {
                ...this.baseInfo
              })
            );
          }
        }, 50);
      });
    } else {
      //不兼容performance时直接提交，只收集基本信息
      submitPool.pushDatas(tools.assign(this.loadInfo, this.baseInfo));
      return;
    }

    //ajax提交
  }
  /**
   *  极限性能数据校正
   * @return data
   */
  dataCheck() {
    let loadInfo = this.loadInfo;
    // @ts-ignore
    // todo 这里只过滤明显是错误的时间，不对细节时间做调整
    // 以求最大真实度上报数据
    // 所以最后 只要是大于30s的就认为有问题（我们认为大于30s的基本是错误时间）
    const max = [
      // 阶段指标
      "dnsTime",
      "tcpTime",
      "ttfb",
      "trans",
      "domParsingTime",
      "resLoadTime",
      // 性能指标
      //           首次渲染     完全加载     首次有效绘制   domReady  首次可交互   首包
      "firstTime",
      "blankTime",
      "finalTime",
      "fmp",
      "resourceTime",
      "tti",
      "fbt"
    ];
    const maxValue = 300000;
    max.forEach(key => {
      const loadKeyVaule = loadInfo[key];
      if (undefined != loadKeyVaule) {
        if (loadKeyVaule > maxValue) {
          loadInfo[key] = maxValue + 1;
        }
        if (loadKeyVaule < 0) {
          loadInfo[key] = 0;
        }
      }
    });
    return loadInfo;
  }
}

/**
 * 客户端页面加载信息收集
 */
export default new page();
