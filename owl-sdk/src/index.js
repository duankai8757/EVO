/*
 * @Author: your name
 * @Date: 2019-07-30 21:19:29
 * @LastEditTime: 2019-12-26 10:12:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\owl-sdk\src\index.js
 */
import tools from "./base/tools";
import err from "./lib/err";
import def from "./lib/def";
import page from "./lib/page";
import RegCenter from "./regCenter";

let apps = ["parent"];
// const isApp = uaNames => {
//   let ua = tools.getAent();
//   for (let i = 0; i < uaNames.length; i++) {
//     if (ua.indexOf(uaNames[i]) > -1) {
//       return true;
//     }
//   }
//   return false;
// };

function install(config = {}) {
  try {
    if (config.uaName) {
      Array.isArray(config.uaName)
        ? (apps = apps.concat(config.uaName))
        : apps.push(config.uaName);
    }

    let regCenter = new RegCenter(window);
    regCenter.init(config);
    return {
      /**
       * 自定义上报异常
       * @param errorType
       * @param errorInfo
       * @param errorMsg
       */
      errorPush({ errorType, errorInfo = "", errorMsg = "" }) {
        if (undefined === errorType || undefined === errorInfo) {
          console.error("errorType or errorInfo is undefined!");
          return;
        }
        err.customError(errorType, errorInfo, errorMsg);
      },
      logPush(errorInfo) {
        def.submitDataPush(errorInfo);
      },
      //给owl-sdk-vue进行错误上报。
      vueErrorPush(errorKey, errInfo) {
        err.submitDataPush(errorKey, errInfo);
      },
      /**
       * 自定义上报性能数据， 目前仅限于 cfpt(自定义首屏)
       * @param perfObject
       */
      perfPush(perfObject) {
        if (Object.keys(perfObject).length && perfObject.cfpt) {
          page.saveCustomPerf(perfObject);
        }
      }
    };
  } catch (e) {
    console.log(`error:${e}`);
  }
}
window["zybLogCollect"] = install;
export default install;
