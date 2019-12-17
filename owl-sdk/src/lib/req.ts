import submitPool from "../base/submitPool";
import err from "./err";
import config from "../base/config";
import supper from "./supper";
import tools from "../base/tools";
class Req extends supper {
  TYPE: string = "slow";
  ajaxUniqueMap: Object = {};
  REQ_TIME: number = 800;
  constructor() {
    //用于去重错误信息;
    super();
  }
  /**
   * 统一拦截处理
   * @param reqObj
   * @param that
   * @param superThat
   */
  intercept(reqObj, that, superThat) {
    //当命中忽略关键字后直接返回
    if(tools.isHitFiltered(reqObj["reqUrl"], config.__ignoreUrlKeyWord)){
      return;
    }
    let reqErrorReg = /^(4|5){1}\d{2}$/;
    let reqOkReg = /^2{1}\d{2}$/;
    //正确返回为200状态的数据
    //超过限定的请求时间
    //如果2g网络情况下，则不上报。
    if (
      (reqOkReg.test(that.status)||that.status+''==='0') &&
      reqObj["timeLong"] >= superThat.REQ_TIME &&
      (<any>superThat.baseInfo).network.toUpperCase() !== "2G"
    ) {
      submitPool.pushDatas(tools.assign(reqObj, superThat.baseInfo));
      //错误请求,直接进行错误回收
      // 未命中请求过滤
    } else if (
      reqErrorReg.test(that.status) 
    ) {
      reqObj["reqStatus"] = that.status;
      const body = tools.readXHRbody(that);
      reqObj["resp"] = body ? body.toString().substr(0, 300) : ""; //错误请求返回内容
      err.collectXHRError(reqObj);
    }
  }

  /**
   * 开始错误信息收集
   */
  init(win_, baseInfo_) {
    var superThat = this;
    let xhrObj = Object.create(null);
    this.REQ_TIME = config.__slowReqTime; //多少秒数据还没有返回，测认定为慢服务
    super.init(win_, baseInfo_);
    if ((<any>window).XMLHttpRequest) {
      let xhrProto = (<any>window).XMLHttpRequest.prototype;
      let _open = xhrProto.open;
      let _send = xhrProto.send;

      xhrProto.open = function(arg, xhr) {
        let urls = xhr.split("?");
        xhrObj["reqStartTime"] = +new Date();
        xhrObj["reqType"] = arg;
        xhrObj["reqUrl"] = urls[0];
        xhrObj["type"] = superThat.TYPE;
        xhrObj["reqParams"] = urls.length > 1 ? urls[1] : "";
        _open.apply(this, arguments);
        // 跨域失败
      };

      xhrProto.send = function() {
        var that = this;
        var _onreadystatechange = that.onreadystatechange;
        let isReport = new RegExp(config.__requestUrl).test(
          xhrObj["reqUrl"]
        );
        that.onreadystatechange = function() {
          try {
            if (!isReport && that.readyState === 4) {
              let reqObj = xhrObj;
              let startTime = reqObj["reqStartTime"];
              let endTime = +new Date();
              let timeLong_ = endTime - startTime;
              reqObj["timeLong"] = timeLong_;
              reqObj["status"] = that.status;
              reqObj["clientTime"] = +new Date();
              superThat.intercept(reqObj, that, superThat);
            }
          } catch (e) {
            console.log(`error:${e}`);
          } finally {
            _onreadystatechange && _onreadystatechange.apply(that, arguments);
          }
        };
        _send.apply(this, arguments);
        // 失败
      };
    }
  }
}
export default new Req();
