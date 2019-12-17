/* Copyright (c) 2018-2020 Zuoyebang, All rights reserved.
 * @fileoverview 公共参数
 * @author songli   | songli@zuoyebang.com
 * @version 1.0 | 2018-10-12 | songli   // 初始版本
 */
import tools from "./tools";

var config = {
  __requestUrl: "https://nlogtj.zuoyebang.cc/log/performance",
  __key: "",
  __submitLimit: 1,
  __slowReqTime: 800, //默认800
  __pvRatio: 10,
  __urlHelper: null,
  __filterErrors: [
    // /^Script error\.?$/,
    "Script error",
    /^Javascript error: Script error\.? on line 0$/
  ],
  __ignoreUrlKeyWord: ["127.0.0.1", "localhost", "sockjs-node"],
  __isPvRatio: true, //是否走抽样
  __useFMP: true, // 是否统计首次有效绘制时间， 默认开启
  __debug: false, // debug模式
  __submitHook: null, //自定义
  __hookData: null,
  setConfig(userConfig) {
    config.__requestUrl = userConfig.requestUrl || config.__requestUrl;
    config.__key = userConfig.key || config.__key;
    config.__submitLimit = userConfig.submitLimit || config.__submitLimit;
    config.__urlHelper = userConfig.urlHelper;
    config.__slowReqTime = userConfig.slowReqTime || config.__slowReqTime;
    config.__debug = userConfig.__debug || config.__debug;

    config.__useFMP = userConfig.__debug
      ? true
      : userConfig.useFMP || config.__useFMP;
    //var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    //只有设置抽样值大于10才生效。如果抽样式值小于10按10处理。
    if (userConfig["isPvRatio"] === false && !userConfig["__debug"]) {
      config.__isPvRatio = false;
    }
    if (
      userConfig["pvRatio"] &&
      typeof userConfig["pvRatio"] === "number" &&
      userConfig["pvRatio"] > config.__pvRatio
    ) {
      config.__pvRatio = userConfig["pvRatio"];
    }

    config.__filterErrors = config.__filterErrors.concat(
      tools.checkStrOrArray(userConfig.filterErrors)
    );
    config.__ignoreUrlKeyWord = config.__debug
      ? []
      : config.__ignoreUrlKeyWord.concat(
          tools.checkStrOrArray(userConfig.ignoreUrlKeyWord)
        );
    //处理用户提交钩子方法。
    if (userConfig.submitHook) {
      config.__submitHook = async () => {
        if (config.__hookData) {
          return config.__hookData;
        }
        let hookFunType = tools.getType(userConfig.submitHook);
        if (hookFunType === "function") {
          let hookData = null;
          try {
            hookData=await userConfig.submitHook();
          } catch (e) {
            return null;
          }
          if (hookData) {
            if (tools.getType(hookData) === "object") {
              config.__hookData = hookData;
            } else {
              config.__hookData = { userDef: hookData };
            }
          }
        } else if (hookFunType === "object") {
          config.__hookData = userConfig.submitHook;
        } else {
          config.__hookData = { userDef: userConfig.submitHook };
        }
        return config.__hookData;
      };
    }
  }
};

export default config;
