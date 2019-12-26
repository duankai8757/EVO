/*
 * @Author: your name
 * @Date: 2019-07-30 21:19:29
 * @LastEditTime: 2019-12-26 10:12:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\owl-sdk\src\regCenter.ts
 */
import tools from "./base/tools";
import config from "./base/config";

import page from "./lib/page";
import err from "./lib/err";
import req from "./lib/req";
import def from "./lib/def";

class RegCenter {
  win: Object = window;
  baseSysInfo: Object = {};

  regModules: Array<any> = [page, err, req, def];
  constructor( win_) {
    //注册数据容器
    this.win = win_ || window;
  }

  /**
   * 注册上报处理对像至容器。
   */
  regAndTrigger() {
    this.regModules.forEach(obj => {
      this.regModules.push(obj);
      obj.init(window, JSON.parse(JSON.stringify(this.baseSysInfo))); //解决引用数据问题，一个简单的拷贝;
      //激发，触动各注册模块的自收集功能。 trigger;
      obj["submit"]();
    });
  }

  /**
   * 初始化数据
   * @param config_
   */
  init(config_) {
    // 配置信息代码需要放在最前面。
    // debug配置
    tools.getUrlParams("zybdebugger") && ( config_.__debug = true);
    // 初始化conf
    config_ && config.setConfig(config_);
    //获取系统基本信息。
    this.baseSysInfo = tools.getSysInfo(config_?config_.extColumn:null);
    //全局错误收集。
    this.win["errorCollect"] = err;
    if(tools.isHitFiltered(tools.getUrl(), config.__ignoreUrlKeyWord)){
      return;
    }
    this.regAndTrigger();
  }
}
export default RegCenter;
