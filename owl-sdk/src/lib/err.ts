import tools from "../base/tools";
import submitPool from "../base/submitPool";
import supper from "./supper";
import config from "../base/config";

class error extends supper {
  TYPE: string = "error";
  EVENT_MAX_VALUE: number = 20;

  win: Object = window;
  errorInfoMap: Object = {};
  eventlist: String[] = [];
  errorOpStatus: Object = { INIT: 1, OK: 2, FAIL: 3 };
  constructor() {
    super();
    //用于去重错误信息;
  }

  /**
   * md5key:为区分错误
   * 错误数据压到错误数据当中
   */
  submitDataPush(md5key, errorObj) {
    let hex_md5 = tools.hash(md5key);
    if (
      tools.isHitFiltered(errorObj.message, config.__filterErrors) ||
      this.errorInfoMap[hex_md5]
    ) {
      return;
    }
    errorObj["userBehavior"] = this.eventlist;
    errorObj["id"] = hex_md5;
    errorObj = tools.assign(errorObj, this.baseInfo);
    errorObj["type"] = this.TYPE;
    errorObj["clientTime"] = +new Date();
    this.errorInfoMap[hex_md5] = this.errorOpStatus["INIT"];
    submitPool.pushDatas(errorObj);
  }

  customError(errorType, info="", msg="") {
    const k = tools.getUvId();
    this.submitDataPush(k, { errorType: errorType, errorInfo: info ,message:msg});
  }

  /**
   * 用户行为放入队列
   * @param {*} e
   */
  pushList(e) {
    this.eventlist.push(JSON.stringify(e));
    this.eventlist.length > 20 && this.eventlist.shift();
  }
  /**
   * 用户行为记录
   **/
  addUserBehavior() {
    (<any>this.win).addEventListener(
      "click",
      event => {
        let r = event.target;
        let outerHTML = r && r.outerHTML;
        outerHTML &&
          outerHTML.length > 200 &&
          (outerHTML = outerHTML.slice(0, 200));
        this.pushList({
          errorType: "click",
          page: {
            url: window.location.href,
            title: document.title
          },
          detail: {
            outerHTML: outerHTML,
            tagName: r && r.tagName,
            className: r && r.className
          },
          time: new Date().getTime()
        });
      },
      true
    );
  }
  /**
   * 收集ajax请求错误
   * @param {*} errorInfo
   */
  collectXHRError(errorInfo) {
    let xhrErrorInfo = {
      xhrInfo: errorInfo,
      errorReqLink: errorInfo.reqUrl,
      errorType: "XMLHttpRequest"
    };
    let name =
      errorInfo["reqType"] +
      errorInfo["reqUrl"] +
      errorInfo["type"] +
      errorInfo["reqParams"];
    this.submitDataPush(name, xhrErrorInfo);
  }

  /**
   * 收集promiseError相关错误信息
   */
  collectPromiseError() {
    let notifyJsError = (err, res) => {
      if (err) {
        err &&
          err.name !== "unhandledrejection" &&
          (<any>this.win).console &&
          console.error(err);
        var JsError = {
          name: err.name || (res && res.info) || "caught error",
          message: err.message || (res && res.info),
          componentName: res && res.componentName,
          info: res && res.info,
          stacktrace: err.stack,
          fileName: err.fileName,
          lineNumber: err.lineNumber,
          columnNumber: err.columnNumber,
          errorType: "promiseError"
        };
        this.submitDataPush(JsError.name, JsError);
      }
    };
    (<any>this.win).addEventListener("unhandledrejection", function(e) {
      let reason = e.reason;
      if (Object.prototype.toString.apply(reason) === "[object Error]") {
        reason.name = "unhandledrejection";
        (<any>notifyJsError)(reason);
      } else {
        (<any>notifyJsError)({ message: reason, name: "unhandledrejection" });
      }
    });
  }
  /**
   * 收集资源加载错误数据 src 相关
   */
  collectSrcError() {
    let that = this;
    (<any>this.win).addEventListener &&
      (<any>this.win).addEventListener(
        "error",
        event => {
          var target = event.target || event.srcElement;
          let eventName = event.constructor.name.toLocaleLowerCase();
          if (eventName === "errorevent") {
            this.baseErrorGroupFun(
              event.message,
              event.filename,
              event.lineno,
              event.colno,
              event.error
            );
            return;
          }
          var outerHTML = (target && target.outerHTML) || "";
          let errorLink = target && (target.src || target.link);
          var resourceError = {
            errorType: "resourceError",
            target: {
              outerHTML: outerHTML,
              src: errorLink,
              tagName: target && target.tagName,
              className: target && target.className,
              type: target && target.type,
              XPath: tools.getXPath(target),
              timeStamp: event.timeStamp
            },
            errorLink: errorLink,
            resourceHost: tools.getHost(errorLink),
            resourceType: target.tagName
          };
          that.submitDataPush(errorLink, resourceError);
        },
        true
      );
  }
  /**
   *
   * @param errorInfo
   * @param url
   * @param lineNo
   * @param columnNo
   * @param error
   */
  baseErrorGroupFun(errorMessage, url, lineNo, columnNo, error) {
    let errorObj = {};
    if (!!error && !!error.stack) {
      //如果浏览器有堆栈信息直接使用
      errorObj["stacktrace"] = error.stack.toString();
    }
    let md5key = errorMessage;
    errorObj["errorInfo"] = errorMessage;
    errorObj["lineNumber"] = lineNo;
    errorObj["columnNumber"] =
      columnNo ||
      ((<any>this.win).event && (<any>this.win).event.errorCharacter) ||
      0;
    errorObj["message"] = errorObj["errorInfo"];
    errorObj["fileName"] = encodeURIComponent(url || "");
    errorObj["errorType"] = "jsError";
    this.submitDataPush(md5key, errorObj);
    return false;
  }
  /**
   * 收集基本错误信息
   */
  collectBaseError() {
    let that = this;
    /**
     * 错误信息收集
     */
    (<any>this.win).onerror = (errorMessage, url, lineNo, columnNo, error) => {
      this.baseErrorGroupFun(errorMessage, url, lineNo, columnNo, error);
      return false;
    };
  }

  /**
   * 开始错误信息收集
   */
  init(win_, baseInfo_) {
    super.init(win_, baseInfo_);
    this.addUserBehavior(); //记录用户当前行为
    this.collectPromiseError(); //收集promise错误
    this.collectSrcError();
    this.collectBaseError();
  }
}
let err = new error();
export default err;
