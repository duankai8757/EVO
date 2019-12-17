/*
 * @Author: your name
 * @Date: 2019-12-17 15:38:18
 * @LastEditTime: 2019-12-17 15:38:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\咕噜咕噜\simple-porxy\background.js
 */
chrome.proxy.settings.set({
    value: {
      mode: 'fixed_servers',
      rules: {
        proxyForHttp:{
          scheme: 'https',
          host: 'default.px.skyzip.de',
          port: 443
        },
        proxyForHttps: {
          scheme: 'https',
          host: 'default.px.skyzip.de',
          port: 443
        },
        bypassList: null
      }
    },
    scope: 'regular'
  });