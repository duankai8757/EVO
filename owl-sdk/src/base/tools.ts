

import config from "./config";
import iosMt from "./iosMt";

const win = window;
const doc = document;
let tools = (function() {
  return {
    /**
     * window是否ready;
     */
    hasReady: false,
    /**
     * url对像，url+参数
     */
    URLS: window.location.href.split("?"),
    /**
     * 代理头信息
     */
    AGENT: navigator.userAgent,
    /**
     *获取系统平台(ios/android/other)
     **/
    getSysPlat() {
      let isAndroid =
        this.AGENT.indexOf("Android") > -1 || this.AGENT.indexOf("Adr") > -1; //android终端
      let isIos = !!this.AGENT.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      return isAndroid || isIos || "Other";
    },
    getType(tag) {
      return Object.prototype.toString
        .call(tag)
        .replace(/(\[|\]|object)/g, "")
        .trim()
        .toLocaleLowerCase();
    },
    /**
     * 获取用户代理信息
     */
    getAent() {
      return this.AGENT;
    },
    /**
     * debug打印
     * @param arg
     */
    log(...arg) {
      config.__debug &&
        console.log(`[owl-sdk-debug] now:${window.performance.now()}`, ...arg);
    },
    isAndroid() {
      return "Android" === this.getSysPlat();
    },
    isIos() {
      return "Ios" === this.getSysPlat();
    },
    /**
     *获取操作系统版本号
     **/
    getSysVersion() {
      if (this.isAndroid()) {
        let av = this.AGENT.split(";")[1].match(/\d+/g) || [];
        return { vd: av.join("."), vm: av[0] };
      }
      if (this.isIos()) {
        let OSVision = this.AGENT.split(";")[1].match(/(\d+)_(\d+)_?(\d+)?/)[0];
        return { vd: OSVision, vm: OSVision.split("_")[0] };
      }
      return { vd: "1.0", vm: "1" };
    },
    /**
     *获取手机品牌
     *此方法前台执行需下载一个适配js，比较大，放后台进行处理
     **/
    getPhoneBrand() {
      if (this.isAndroid()) {
        let reg = /Android[^\(\)]*?;\s*([^\(\)]*?)Build/;
        let brands = reg.exec(this.AGENT);
        if (brands && brands.length && brands.length >= 2) {
          return brands[1].trim();
        }
      }
      if (this.isIos()) {
        return iosMt;
      }

      return "other";
    },

    /**
     *获取运行平台(微信，qq ,微博，浏览器<uc,......>)
     **/
    getRunPlat() {
      let ua = this.AGENT.toUpperCase(); //获取判断用的对象
      //作业绑平台
      if (ua.match(/PARENT/i)) {
        return "PARENT";
      }
      if (ua.match(/HOMEWORK/i)) {
        return "HOMEWORK";
      }
      if (ua.match(/AIRCLASS/i)) {
        return "AIRCLASS";
      }
      if (ua.match(/MICROMESSENGER/i)) {
        return "WX";
      }
      if (ua.match(/WEIBO/i)) {
        return "WB";
      }
      if (ua.match(/QQ/i)) {
        return "QQ";
      }
      return "OTHER";
    },

    /**
     *获取url
     **/
    getUrl() {
      if (config.__urlHelper) {
        let reBuildUrlFun = config.__urlHelper;
        if (
          Object.prototype.toString.call(reBuildUrlFun) === "[object Function]"
        ) {
          let rebuild = reBuildUrlFun(this.URLS[0]) || this.URLS[0];
          if (rebuild.indexOf("?") !== -1) {
            console.error(`[${rebuild}] 该URL不符合规范！!`);
          }
          return rebuild.split("?")[0];
        } else {
          console.error("urlHelper is not Function");
        }
      }
      return this.URLS[0];
    },
    /**
     * 获取跳转来源
     */
    getReferrer() {
      return document.referrer;
    },

    /**
     * 取两位小数
     * @param v
     */
    toFixed2(v) {
      return Math.round(v * 100) / 100;
    },

    /**
     *获取url自带参数清单
     **/
    getUrlParams(key?: string) {
      let rtObj = Object.create(null);
      if (this.URLS.length > 1) {
        let params = this.URLS[1].split("&");
        params.forEach(v => {
          let ps = v.split("=");
          rtObj[ps[0]] = ps[1] || "";
        });
      }
      if (key) {
        return rtObj[key] ? rtObj[key] : "";
      }
      return rtObj;
    },

    /**
     * @param len 产生指定位数据的随机字符串
     */
    getUUID(len = 32) {
      const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890";
      const maxPos = chars.length;
      let pwd = [];
      for (let i = 0; i < len; i++) {
        pwd.push(chars.charAt(Math.floor(Math.random() * maxPos)));
      }
      return pwd.join("");
    },

    /**
     * 用来在localStorage中记录uid
     */
    getUvId() {
      let prefix = "Zyb_jzb_webapp_owl";
      let storage = localStorage.getItem(prefix);
      // const store = storage ? JSON.parse(storage) : {};
      // let val = store[prefix];
      if (!storage) {
        storage = this.getUUID(16);
        localStorage.setItem(prefix, storage);
      }
      return storage;
    },

    /**
     * 获取用户端当前网络信息
     */
    getNetWork() {
      return (
        (navigator["connection"] && navigator["connection"].effectiveType) ||
        "未知"
      );
    },

    /**
     * 获取浏览器信息
     */
    getBI() {
      let Sys = Object.create(null);
      let ua = this.AGENT.toLowerCase();
      let re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
      let m = ua.match(re);
      if (m && m.length) {
        Sys["br"] = m[1].replace(/version/, "safari");
        Sys["brv"] = m[2];
      } else {
        Sys["br"] = "other";
        Sys["brv"] = "";
      }
      return Sys;
    },

    /**
     * 获取cookie值
     * @param name
     */
    getCookieV(name) {
      let arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },

    /**
     * 获取指定url的域信息
     */
    getHost(url) {
      let host = "";
      let hostReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
      let hostArray = url.match(hostReg);
      if (hostArray && hostArray.length) {
        host = hostArray[0];
      }
      return host;
    },

    /**
     * 获取当前运行环境
     */
    getJRE(urlParams) {
      let testReg = /test[0-9]{0,5}\.xx/;
      let qaTestReg = /qatest[0-9]{0,5}\.xx/;
      let prodReg = /[a-zA-Z0-9]{0,20}\.xx/;
      let host = this.getHost(this.getUrl());
      if (host.length) {
        if (testReg.test(host)) {
          return "dev";
        }
        if (qaTestReg.test(host)) {
          return "test";
        }
        if (prodReg.test(host)) {
          if (
            (urlParams && urlParams["__tips__"]) ||
            this.getCookieV("__tips__") ||
            this.getCookieV("tips")
          ) {
            return "tips";
          }
          return "prod";
        }
      }
      return "other";
    },

    /**
     * 合并对像，主要兼容Object.assign方法在ios8上的使用。
     * @param t
     * @param o
     */
    assign(t, o) {
      if (Object["assign"]) {
        return Object["assign"](t, o);
      } else {
        for (var p in o) {
          if (o.hasOwnProperty(p) && !t.hasOwnProperty(p)) t[p] = o[p];
        }
        return t;
      }
    },

    /**
     * 检查字符串&数组，并最终返回数组。
     * @param v
     */
    checkStrOrArray(v) {
      if (undefined != v) {
        let t = v.constructor.name.toLocaleUpperCase();
        if (t === "STRING") {
          return [v];
        } else if (t === "ARRAY") {
          return v;
        }
      }
      return [];
    },

    /**
     * 是否命中过滤上报数据;
     * info:验证的数据
     * ignoreArray:忽略的库信息
     */
    isHitFiltered(info, ignoreArray = []) {
      if (info) {
        for (let i = 0; i < ignoreArray.length; i++) {
          let ignoreStr = ignoreArray[i];
          if (typeof ignoreStr === "string") {
            ignoreStr = new RegExp(ignoreStr);
          }
          let typeName = (
            ignoreStr.constructor && ignoreStr.constructor.name
          ).toLowerCase();
          if (typeName === "regexp" && ignoreStr.test(info)) {
            return true;
          }
        }
      }
      return false;
    },

    /**
     * 用于返回dom节点路径
     * @param {} e
     */
    getXPath(e) {
      let t = [];
      for (t = []; e && e.nodeType === Node.ELEMENT_NODE; e = e.parentNode) {
        let r,
          n = 0,
          a = !1;
        for (r = e.previousSibling; r; r = r.previousSibling)
          r.nodeType !== Node.DOCUMENT_TYPE_NODE &&
            r.nodeName === e.nodeName &&
            ++n;
        for (r = e.nextSibling; r && !a; r = r.nextSibling)
          r.nodeName === e.nodeName && (a = !0);
        let i = (e.prefix ? e.prefix + ":" : "") + e.localName;
        let o = n || a ? "[" + (n + 1) + "]" : "";
        t.splice(0, 0, i + o);
      }
      return t.length ? "/" + t.join("/") : null;
    },

    /**
     * ajax数据提交
     **/
    zybajax(url, params, successFun, errorFun) {
      let xmlhttp = new XMLHttpRequest();
      if (Array.isArray(params) && params.length === 1) {
        params = params[0];
      }
      params = JSON.stringify(params);
      xmlhttp["onreadystatechange"] = () => {
        if (xmlhttp["readyState"] == 4 && xmlhttp["status"] == 200) {
          successFun && successFun(this.readXHRbody(xmlhttp));
        }
      };

      xmlhttp["open"]("POST", url, true);

      xmlhttp["setRequestHeader"](
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      xmlhttp["error"] = () => {
        if (errorFun) {
          errorFun(this.readXHRbody(xmlhttp));
        } else {
          console.error("report error:" + this.readXHRbody(xmlhttp));
        }
      };
      try {
        xmlhttp["send"](params);
      } catch (e) {
        if (errorFun) {
          errorFun(this.readXHRbody(xmlhttp));
        }
        console.error("report error" + e.message);
      }
    },

    /**
     * xhr直接读取 responseText会出错 所以换方式读取
     * @param xhr
     */
    readXHRbody(xhr) {
      if (!xhr.responseType || xhr.responseType === "text") {
        return xhr.responseText;
      } else if (xhr.responseType === "document") {
        return xhr.responseXML;
      } else {
        return xhr.response;
      }
    },
    /**
     * 对指定字符串计算hash值（网上摘抄）
     */
    hash(input) {
      let I64BIT_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split(
        ""
      );
      let hash = 5381;
      let i = input.length - 1;

      if (typeof input == "string") {
        for (; i > -1; i--) hash += (hash << 5) + input.charCodeAt(i);
      } else {
        for (; i > -1; i--) hash += (hash << 5) + input[i];
      }
      let value = hash & 0x7fffffff;

      let retValue = "";
      do {
        retValue += I64BIT_TABLE[value & 0x3f];
      } while ((value >>= 6));

      return retValue;
    },

    /**
     * 指定值是否命中
     * @param t
     */
    isTakeSample(t) {
      var e = Math.floor(Math.random() * t * 10 + 1);
      return e <= 10;
    },

    /**
     *用于组装系统信息
     **/
    getSysInfo(assignObj = null) {
      let that = this;
      let versionObj = this.getSysVersion();
      let params = that.getUrlParams();
      let rtObj = {
        client: that.client(), //duankai test
        sysPlat: that.getSysPlat(),
        agent: this.AGENT,
        sysVersion: versionObj.vd, //系统版本号明细
        runPlat: that.getRunPlat(),
        phoneBrand: that.getPhoneBrand(),
        url: that.getUrl(),
        /**0801新增页面唯一来源 */
        referrer: that.getReferrer(),
        urlParams: JSON.stringify(params),
        network: that.getNetWork(),

        /*---新增---*/
        winW: window.screen.width || window.screen.availWidth,
        winH: window.screen.height || window.screen.availHeight,
        locale: window.navigator.language,
        metaData: document.title,
        createTime: new Date().getTime(),
        authkey: config.__key,
        sysMv: versionObj.vm, //主版本号用于分类

        /*--2019-06-11新增--*/
        uvId: that.getUvId(), //uv版本号
        vcname: params["vcname"], //端上版本号
        cuid: params["cuid"],
        sdkVersion: "_sdkVersion_", //上报sdk版本号

        /**--2019-07-08新增运行环境--*/
        jre: that.getJRE(params),
        cname: params["province"]
      };
      rtObj = this.assign(rtObj, that.getBI());
      if (
        assignObj &&
        Object.prototype.toString.call(assignObj) === "[object Object]"
      ) {
        rtObj["extColumn"] = assignObj;
      }
      return rtObj;
    },

    /**
     * 客户端检测（浏览器，操作系统，平台）
     * @author duankai
     */
    client() {},
    /**
     * 获取dom样式
     * @param element
     * @param att
     */
    getStyle(element, att) {
      //特性侦测
      if (window.getComputedStyle) {
        //优先使用W3C规范
        return window.getComputedStyle(element)[att];
      } else {
        //针对IE9以下兼容
        return element.currentStyle[att];
      }
    },
    /**
     * onReady
     * @param cb
     */
    onReady(cb) {
      if (this.hasReady) {
        cb && cb();
        return;
      }
      if (doc.readyState === "complete") {
        cb && cb();
      } else {
        this.on(win, "load", () => {
          this.hasReady = true;
          cb && cb();
        });
      }
    },
    /**
     * on事件
     */
    on: (function() {
      if (win.addEventListener) {
        return function(ele, type, fun) {
          ele.addEventListener(type, fun, !0);
        };
      } else if ("attachEvent" in win) {
        return function(ele, type, fun) {
          ele.attachEvent("on" + type, fun);
        };
      }
    })(),
    /**
     * off事件
     */
    off: (function() {
      if (win.removeEventListener) {
        return function(ele, type, fun) {
          ele.removeEventListener(type, fun, !0);
        };
      } else if ("detachEvent" in win) {
        return function(ele, type, fun) {
          ele.detachEvent("on" + type, fun);
        };
      }
    })()
  };
})();

export default tools;
