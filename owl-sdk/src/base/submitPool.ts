
import tools from "./tools";
import config from "./config";

class SubmitPool {
  //没有错误数据，间隔提交时间变长
  STEP: number = 2000;
  //1分钟双倍增长值
  MAX_DOUBLE_STEP: number = 60000;
  //上报间隔最大10分钟
  MAX_STEP: number = 60000;
  LIMIT: number = 1;
  //防止提交重复，或者堵塞。
  startStatus: Boolean = false;
  dataPool: Object[] = [];
  tools: Object = {};

  constructor() {
    this.tools = tools;
  }

  /**
   * 错误上报提交处理
   */
  start() {
    var that = this;
    if (this.startStatus) {
      return;
    }
    this.LIMIT = config.__submitLimit; //每次提交个数
    this.startStatus = true;
    let SUBMIT_TIME: number = 6000;
    let reportSubmit = function() {
      setTimeout(function() {
        let submitDatas = [];
        let stepAdd = function() {
          if (SUBMIT_TIME < that.MAX_STEP) {
            if (SUBMIT_TIME > that.MAX_DOUBLE_STEP) {
              //超过一分钟间隔时间成倍增长
              SUBMIT_TIME *= 2;
            } else {
              //个分钟之内进行步长计算
              SUBMIT_TIME += that.STEP;
            }
          }
        };
        if (that.dataPool.length > 0) {
          let limit =
            that.dataPool.length - that.LIMIT
              ? that.LIMIT
              : that.dataPool.length;
          submitDatas = that.dataPool.splice(0, limit);
          that.tools["zybajax"](
            config.__requestUrl,
            submitDatas,
            function(res) {},
            function() {
              //alert("失败")
              //如果提交失败，则需要放回数据池，并放到队列后边。
              that.dataPool = that.dataPool.concat(submitDatas);
            }
          );
        } else {
          stepAdd(); //增加步长操作
        }
        reportSubmit();
      }, SUBMIT_TIME);
    };
    reportSubmit();
  }
  /**
   * 增加数据到相应的数据池中。
   * 如果设置每次提交一条数据，则直接进行提交。
   */
  async pushDatas(data) {
    //待周一处理
    let _hookData = config.__submitHook && (await config.__submitHook());
    if (
      (tools.getType(data) === "object" && this.dataPool.length == 0) &&
      this.LIMIT <= 1
    ) {
      let newData = { ...data, ..._hookData };
      this.pushData(newData);
    } else {
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          data[i] = { ...data[i], ..._hookData };
        }
        this.dataPool = this.dataPool.concat(data);
      } else {
        this.dataPool.push(data);
      }
    }
  }
  pushData(data) {
    if (config.__debug) {
      tools.log(data);
      return;
    }
    this.tools["zybajax"](
      config.__requestUrl,
      data,
      res => {
        console.log(res);
      },
      e => {
        this.dataPool.push(data);
      }
    );
  }
}
let submitPool = new SubmitPool();
export default submitPool;
