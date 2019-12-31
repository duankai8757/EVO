(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["owl"] = factory();
	else
		root["owl"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base/config.ts":
/*!****************************!*\
  !*** ./src/base/config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2019-07-30 21:19:29
 * @LastEditTime : 2019-12-26 10:11:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\owl-sdk\src\base\config.ts
 */
var tools_1 = __webpack_require__(/*! ./tools */ "./src/base/tools.ts");
var config = {
    __requestUrl: "https://nlogtj.xx.cc/log/performance",
    __key: "",
    __submitLimit: 1,
    __slowReqTime: 800,
    __pvRatio: 10,
    __urlHelper: null,
    __filterErrors: [
        // /^Script error\.?$/,
        "Script error",
        /^Javascript error: Script error\.? on line 0$/
    ],
    __ignoreUrlKeyWord: ["127.0.0.1", "localhost", "sockjs-node"],
    __isPvRatio: true,
    __useFMP: true,
    __debug: false,
    __submitHook: null,
    __hookData: null,
    setConfig: function (userConfig) {
        var _this = this;
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
        if (userConfig["pvRatio"] &&
            typeof userConfig["pvRatio"] === "number" &&
            userConfig["pvRatio"] > config.__pvRatio) {
            config.__pvRatio = userConfig["pvRatio"];
        }
        config.__filterErrors = config.__filterErrors.concat(tools_1.default.checkStrOrArray(userConfig.filterErrors));
        config.__ignoreUrlKeyWord = config.__debug
            ? []
            : config.__ignoreUrlKeyWord.concat(tools_1.default.checkStrOrArray(userConfig.ignoreUrlKeyWord));
        //处理用户提交钩子方法。
        if (userConfig.submitHook) {
            config.__submitHook = function () { return __awaiter(_this, void 0, void 0, function () {
                var hookFunType, hookData, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (config.__hookData) {
                                return [2 /*return*/, config.__hookData];
                            }
                            hookFunType = tools_1.default.getType(userConfig.submitHook);
                            if (!(hookFunType === "function")) return [3 /*break*/, 5];
                            hookData = null;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, userConfig.submitHook()];
                        case 2:
                            hookData = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            return [2 /*return*/, null];
                        case 4:
                            if (hookData) {
                                if (tools_1.default.getType(hookData) === "object") {
                                    config.__hookData = hookData;
                                }
                                else {
                                    config.__hookData = { userDef: hookData };
                                }
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            if (hookFunType === "object") {
                                config.__hookData = userConfig.submitHook;
                            }
                            else {
                                config.__hookData = { userDef: userConfig.submitHook };
                            }
                            _a.label = 6;
                        case 6: return [2 /*return*/, config.__hookData];
                    }
                });
            }); };
        }
    }
};
exports.default = config;


/***/ }),

/***/ "./src/base/iosMt.ts":
/*!***************************!*\
  !*** ./src/base/iosMt.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var devices = {
    "Apple A7 GPU": {
        1136: "iPhone5/5s",
        2048: "iPadAir/iPadMini2/3"
    },
    "Apple A8 GPU": {
        1334: "iPhone6",
        2208: "iPhone6Plus",
        2048: "iPadAir2/4"
    },
    "Apple A9 GPU": {
        1136: "iPhoneSE",
        1334: "iPhone6s",
        2208: "iPhone6sPlus"
    },
    "Apple A10 GPU": {
        1334: "iPhone7",
        2208: "iPhone7Plus"
    },
    "Apple A11 GPU": {
        1334: "iPhone8",
        2208: "iPhone8Plus",
        2436: "iPhoneX"
    },
    "Apple A12 GPU": {
        2436: "iPhoneXS",
        2688: "iPhoneXSMAX",
        1792: "iphoneXR"
    }
};
function getModel() {
    try {
        var gl = document
            .createElement("canvas")
            .getContext("experimental-webgl");
        var gpu = gl.getParameter(gl.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL);
        var sw = Math.max(window.screen.width, window.screen.height) *
            (window.devicePixelRatio || 1);
        return devices[gpu][sw] || "ios未知";
    }
    catch (e) {
        console.log(e);
    }
    return "ios未知";
}
exports.default = getModel();


/***/ }),

/***/ "./src/base/submitPool.ts":
/*!********************************!*\
  !*** ./src/base/submitPool.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ./tools */ "./src/base/tools.ts");
var config_1 = __webpack_require__(/*! ./config */ "./src/base/config.ts");
var SubmitPool = /** @class */ (function () {
    function SubmitPool() {
        //没有错误数据，间隔提交时间变长
        this.STEP = 2000;
        //1分钟双倍增长值
        this.MAX_DOUBLE_STEP = 60000;
        //上报间隔最大10分钟
        this.MAX_STEP = 60000;
        this.LIMIT = 1;
        //防止提交重复，或者堵塞。
        this.startStatus = false;
        this.dataPool = [];
        this.tools = {};
        this.tools = tools_1.default;
    }
    /**
     * 错误上报提交处理
     */
    SubmitPool.prototype.start = function () {
        var that = this;
        if (this.startStatus) {
            return;
        }
        this.LIMIT = config_1.default.__submitLimit; //每次提交个数
        this.startStatus = true;
        var SUBMIT_TIME = 6000;
        var reportSubmit = function () {
            setTimeout(function () {
                var submitDatas = [];
                var stepAdd = function () {
                    if (SUBMIT_TIME < that.MAX_STEP) {
                        if (SUBMIT_TIME > that.MAX_DOUBLE_STEP) {
                            //超过一分钟间隔时间成倍增长
                            SUBMIT_TIME *= 2;
                        }
                        else {
                            //个分钟之内进行步长计算
                            SUBMIT_TIME += that.STEP;
                        }
                    }
                };
                if (that.dataPool.length > 0) {
                    var limit = that.dataPool.length - that.LIMIT
                        ? that.LIMIT
                        : that.dataPool.length;
                    submitDatas = that.dataPool.splice(0, limit);
                    that.tools["zybajax"](config_1.default.__requestUrl, submitDatas, function (res) { }, function () {
                        //alert("失败")
                        //如果提交失败，则需要放回数据池，并放到队列后边。
                        that.dataPool = that.dataPool.concat(submitDatas);
                    });
                }
                else {
                    stepAdd(); //增加步长操作
                }
                reportSubmit();
            }, SUBMIT_TIME);
        };
        reportSubmit();
    };
    /**
     * 增加数据到相应的数据池中。
     * 如果设置每次提交一条数据，则直接进行提交。
     */
    SubmitPool.prototype.pushDatas = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _hookData, _a, newData, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = config_1.default.__submitHook;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, config_1.default.__submitHook()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _hookData = _a;
                        if ((tools_1.default.getType(data) === "object" && this.dataPool.length == 0) &&
                            this.LIMIT <= 1) {
                            newData = __assign(__assign({}, data), _hookData);
                            this.pushData(newData);
                        }
                        else {
                            if (Array.isArray(data)) {
                                for (i = 0; i < data.length; i++) {
                                    data[i] = __assign(__assign({}, data[i]), _hookData);
                                }
                                this.dataPool = this.dataPool.concat(data);
                            }
                            else {
                                this.dataPool.push(data);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubmitPool.prototype.pushData = function (data) {
        var _this = this;
        if (config_1.default.__debug) {
            tools_1.default.log(data);
            return;
        }
        this.tools["zybajax"](config_1.default.__requestUrl, data, function (res) {
            console.log(res);
        }, function (e) {
            _this.dataPool.push(data);
        });
    };
    return SubmitPool;
}());
var submitPool = new SubmitPool();
exports.default = submitPool;


/***/ }),

/***/ "./src/base/tools.ts":
/*!***************************!*\
  !*** ./src/base/tools.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./src/base/config.ts");
var iosMt_1 = __webpack_require__(/*! ./iosMt */ "./src/base/iosMt.ts");
var win = window;
var doc = document;
var tools = (function () {
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
        getSysPlat: function () {
            var isAndroid = this.AGENT.indexOf("Android") > -1 || this.AGENT.indexOf("Adr") > -1; //android终端
            var isIos = !!this.AGENT.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            return isAndroid || isIos || "Other";
        },
        getType: function (tag) {
            return Object.prototype.toString
                .call(tag)
                .replace(/(\[|\]|object)/g, "")
                .trim()
                .toLocaleLowerCase();
        },
        /**
         * 获取用户代理信息
         */
        getAent: function () {
            return this.AGENT;
        },
        /**
         * debug打印
         * @param arg
         */
        log: function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            config_1.default.__debug && console.log.apply(console, __spreadArrays(["[owl-sdk-debug] now:" + window.performance.now()], arg));
        },
        isAndroid: function () {
            return "Android" === this.getSysPlat();
        },
        isIos: function () {
            return "Ios" === this.getSysPlat();
        },
        /**
         *获取操作系统版本号
         **/
        getSysVersion: function () {
            if (this.isAndroid()) {
                var av = this.AGENT.split(";")[1].match(/\d+/g) || [];
                return { vd: av.join("."), vm: av[0] };
            }
            if (this.isIos()) {
                var OSVision = this.AGENT.split(";")[1].match(/(\d+)_(\d+)_?(\d+)?/)[0];
                return { vd: OSVision, vm: OSVision.split("_")[0] };
            }
            return { vd: "1.0", vm: "1" };
        },
        /**
         *获取手机品牌
         *此方法前台执行需下载一个适配js，比较大，放后台进行处理
         **/
        getPhoneBrand: function () {
            if (this.isAndroid()) {
                var reg = /Android[^\(\)]*?;\s*([^\(\)]*?)Build/;
                var brands = reg.exec(this.AGENT);
                if (brands && brands.length && brands.length >= 2) {
                    return brands[1].trim();
                }
            }
            if (this.isIos()) {
                return iosMt_1.default;
            }
            return "other";
        },
        /**
         *获取运行平台(微信，qq ,微博，浏览器<uc,......>)
         **/
        getRunPlat: function () {
            var ua = this.AGENT.toUpperCase(); //获取判断用的对象
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
        getUrl: function () {
            if (config_1.default.__urlHelper) {
                var reBuildUrlFun = config_1.default.__urlHelper;
                if (Object.prototype.toString.call(reBuildUrlFun) === "[object Function]") {
                    var rebuild = reBuildUrlFun(this.URLS[0]) || this.URLS[0];
                    if (rebuild.indexOf("?") !== -1) {
                        console.error("[" + rebuild + "] \u8BE5URL\u4E0D\u7B26\u5408\u89C4\u8303\uFF01");
                    }
                    return rebuild.split("?")[0];
                }
                else {
                    console.error("urlHelper is not Function");
                }
            }
            return this.URLS[0];
        },
        /**
         * 获取跳转来源
         */
        getReferrer: function () {
            return document.referrer;
        },
        /**
         * 取两位小数
         * @param v
         */
        toFixed2: function (v) {
            return Math.round(v * 100) / 100;
        },
        /**
         *获取url自带参数清单
         **/
        getUrlParams: function (key) {
            var rtObj = Object.create(null);
            if (this.URLS.length > 1) {
                var params = this.URLS[1].split("&");
                params.forEach(function (v) {
                    var ps = v.split("=");
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
        getUUID: function (len) {
            if (len === void 0) { len = 32; }
            var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890";
            var maxPos = chars.length;
            var pwd = [];
            for (var i = 0; i < len; i++) {
                pwd.push(chars.charAt(Math.floor(Math.random() * maxPos)));
            }
            return pwd.join("");
        },
        /**
         * 用来在localStorage中记录uid
         */
        getUvId: function () {
            var prefix = "Zyb_jzb_webapp_owl";
            var storage = localStorage.getItem(prefix);
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
        getNetWork: function () {
            return ((navigator["connection"] && navigator["connection"].effectiveType) ||
                "未知");
        },
        /**
         * 获取浏览器信息
         */
        getBI: function () {
            var Sys = Object.create(null);
            var ua = this.AGENT.toLowerCase();
            var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
            var m = ua.match(re);
            if (m && m.length) {
                Sys["br"] = m[1].replace(/version/, "safari");
                Sys["brv"] = m[2];
            }
            else {
                Sys["br"] = "other";
                Sys["brv"] = "";
            }
            return Sys;
        },
        /**
         * 获取cookie值
         * @param name
         */
        getCookieV: function (name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if ((arr = document.cookie.match(reg))) {
                return unescape(arr[2]);
            }
            else {
                return null;
            }
        },
        /**
         * 获取指定url的域信息
         */
        getHost: function (url) {
            var host = "";
            var hostReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
            var hostArray = url.match(hostReg);
            if (hostArray && hostArray.length) {
                host = hostArray[0];
            }
            return host;
        },
        /**
         * 获取当前运行环境
         */
        getJRE: function (urlParams) {
            var testReg = /test[0-9]{0,5}\.xx/;
            var qaTestReg = /qatest[0-9]{0,5}\.xx/;
            var prodReg = /[a-zA-Z0-9]{0,20}\.xx/;
            var host = this.getHost(this.getUrl());
            if (host.length) {
                if (testReg.test(host)) {
                    return "dev";
                }
                if (qaTestReg.test(host)) {
                    return "test";
                }
                if (prodReg.test(host)) {
                    if ((urlParams && urlParams["__tips__"]) ||
                        this.getCookieV("__tips__") ||
                        this.getCookieV("tips")) {
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
        assign: function (t, o) {
            if (Object["assign"]) {
                return Object["assign"](t, o);
            }
            else {
                for (var p in o) {
                    if (o.hasOwnProperty(p) && !t.hasOwnProperty(p))
                        t[p] = o[p];
                }
                return t;
            }
        },
        /**
         * 检查字符串&数组，并最终返回数组。
         * @param v
         */
        checkStrOrArray: function (v) {
            if (undefined != v) {
                var t = v.constructor.name.toLocaleUpperCase();
                if (t === "STRING") {
                    return [v];
                }
                else if (t === "ARRAY") {
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
        isHitFiltered: function (info, ignoreArray) {
            if (ignoreArray === void 0) { ignoreArray = []; }
            if (info) {
                for (var i = 0; i < ignoreArray.length; i++) {
                    var ignoreStr = ignoreArray[i];
                    if (typeof ignoreStr === "string") {
                        ignoreStr = new RegExp(ignoreStr);
                    }
                    var typeName = (ignoreStr.constructor && ignoreStr.constructor.name).toLowerCase();
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
        getXPath: function (e) {
            var t = [];
            for (t = []; e && e.nodeType === Node.ELEMENT_NODE; e = e.parentNode) {
                var r = void 0, n = 0, a = !1;
                for (r = e.previousSibling; r; r = r.previousSibling)
                    r.nodeType !== Node.DOCUMENT_TYPE_NODE &&
                        r.nodeName === e.nodeName &&
                        ++n;
                for (r = e.nextSibling; r && !a; r = r.nextSibling)
                    r.nodeName === e.nodeName && (a = !0);
                var i = (e.prefix ? e.prefix + ":" : "") + e.localName;
                var o = n || a ? "[" + (n + 1) + "]" : "";
                t.splice(0, 0, i + o);
            }
            return t.length ? "/" + t.join("/") : null;
        },
        /**
         * ajax数据提交
         **/
        zybajax: function (url, params, successFun, errorFun) {
            var _this = this;
            var xmlhttp = new XMLHttpRequest();
            if (Array.isArray(params) && params.length === 1) {
                params = params[0];
            }
            params = JSON.stringify(params);
            xmlhttp["onreadystatechange"] = function () {
                if (xmlhttp["readyState"] == 4 && xmlhttp["status"] == 200) {
                    successFun && successFun(_this.readXHRbody(xmlhttp));
                }
            };
            xmlhttp["open"]("POST", url, true);
            xmlhttp["setRequestHeader"]("Content-type", "application/x-www-form-urlencoded");
            xmlhttp["error"] = function () {
                if (errorFun) {
                    errorFun(_this.readXHRbody(xmlhttp));
                }
                else {
                    console.error("report error:" + _this.readXHRbody(xmlhttp));
                }
            };
            try {
                xmlhttp["send"](params);
            }
            catch (e) {
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
        readXHRbody: function (xhr) {
            if (!xhr.responseType || xhr.responseType === "text") {
                return xhr.responseText;
            }
            else if (xhr.responseType === "document") {
                return xhr.responseXML;
            }
            else {
                return xhr.response;
            }
        },
        /**
         * 对指定字符串计算hash值（网上摘抄）
         */
        hash: function (input) {
            var I64BIT_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split("");
            var hash = 5381;
            var i = input.length - 1;
            if (typeof input == "string") {
                for (; i > -1; i--)
                    hash += (hash << 5) + input.charCodeAt(i);
            }
            else {
                for (; i > -1; i--)
                    hash += (hash << 5) + input[i];
            }
            var value = hash & 0x7fffffff;
            var retValue = "";
            do {
                retValue += I64BIT_TABLE[value & 0x3f];
            } while ((value >>= 6));
            return retValue;
        },
        /**
         * 指定值是否命中
         * @param t
         */
        isTakeSample: function (t) {
            var e = Math.floor(Math.random() * t * 10 + 1);
            return e <= 10;
        },
        /**
         *用于组装系统信息
         **/
        getSysInfo: function (assignObj) {
            if (assignObj === void 0) { assignObj = null; }
            var that = this;
            var versionObj = this.getSysVersion();
            var params = that.getUrlParams();
            var rtObj = {
                client: that.client(),
                sysPlat: that.getSysPlat(),
                agent: this.AGENT,
                sysVersion: versionObj.vd,
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
                authkey: config_1.default.__key,
                sysMv: versionObj.vm,
                /*--2019-06-11新增--*/
                uvId: that.getUvId(),
                vcname: params["vcname"],
                cuid: params["cuid"],
                sdkVersion: "_sdkVersion_",
                /**--2019-07-08新增运行环境--*/
                jre: that.getJRE(params),
                cname: params["province"]
            };
            rtObj = this.assign(rtObj, that.getBI());
            if (assignObj &&
                Object.prototype.toString.call(assignObj) === "[object Object]") {
                rtObj["extColumn"] = assignObj;
            }
            return rtObj;
        },
        /**
         * 客户端检测（浏览器，操作系统，平台）
         * @author duankai
         */
        client: function () { },
        /**
         * 获取dom样式
         * @param element
         * @param att
         */
        getStyle: function (element, att) {
            //特性侦测
            if (window.getComputedStyle) {
                //优先使用W3C规范
                return window.getComputedStyle(element)[att];
            }
            else {
                //针对IE9以下兼容
                return element.currentStyle[att];
            }
        },
        /**
         * onReady
         * @param cb
         */
        onReady: function (cb) {
            var _this = this;
            if (this.hasReady) {
                cb && cb();
                return;
            }
            if (doc.readyState === "complete") {
                cb && cb();
            }
            else {
                this.on(win, "load", function () {
                    _this.hasReady = true;
                    cb && cb();
                });
            }
        },
        /**
         * on事件
         */
        on: (function () {
            if (win.addEventListener) {
                return function (ele, type, fun) {
                    ele.addEventListener(type, fun, !0);
                };
            }
            else if ("attachEvent" in win) {
                return function (ele, type, fun) {
                    ele.attachEvent("on" + type, fun);
                };
            }
        })(),
        /**
         * off事件
         */
        off: (function () {
            if (win.removeEventListener) {
                return function (ele, type, fun) {
                    ele.removeEventListener(type, fun, !0);
                };
            }
            else if ("detachEvent" in win) {
                return function (ele, type, fun) {
                    ele.detachEvent("on" + type, fun);
                };
            }
        })()
    };
})();
exports.default = tools;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tools = __webpack_require__(/*! ./base/tools */ "./src/base/tools.ts");

var _tools2 = _interopRequireDefault(_tools);

var _err = __webpack_require__(/*! ./lib/err */ "./src/lib/err.ts");

var _err2 = _interopRequireDefault(_err);

var _def = __webpack_require__(/*! ./lib/def */ "./src/lib/def.ts");

var _def2 = _interopRequireDefault(_def);

var _page = __webpack_require__(/*! ./lib/page */ "./src/lib/page.ts");

var _page2 = _interopRequireDefault(_page);

var _regCenter = __webpack_require__(/*! ./regCenter */ "./src/regCenter.ts");

var _regCenter2 = _interopRequireDefault(_regCenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apps = ["parent"];
// const isApp = uaNames => {
//   let ua = tools.getAent();
//   for (let i = 0; i < uaNames.length; i++) {
//     if (ua.indexOf(uaNames[i]) > -1) {
//       return true;
//     }
//   }
//   return false;
// };

/*
 * @Author: your name
 * @Date: 2019-07-30 21:19:29
 * @LastEditTime: 2019-12-26 10:12:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\owl-sdk\src\index.js
 */
function install() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    if (config.uaName) {
      Array.isArray(config.uaName) ? apps = apps.concat(config.uaName) : apps.push(config.uaName);
    }

    var regCenter = new _regCenter2.default(window);
    regCenter.init(config);
    return {
      /**
       * 自定义上报异常
       * @param errorType
       * @param errorInfo
       * @param errorMsg
       */
      errorPush: function errorPush(_ref) {
        var errorType = _ref.errorType,
            _ref$errorInfo = _ref.errorInfo,
            errorInfo = _ref$errorInfo === undefined ? "" : _ref$errorInfo,
            _ref$errorMsg = _ref.errorMsg,
            errorMsg = _ref$errorMsg === undefined ? "" : _ref$errorMsg;

        if (undefined === errorType || undefined === errorInfo) {
          console.error("errorType or errorInfo is undefined!");
          return;
        }
        _err2.default.customError(errorType, errorInfo, errorMsg);
      },
      logPush: function logPush(errorInfo) {
        _def2.default.submitDataPush(errorInfo);
      },

      //给owl-sdk-vue进行错误上报。
      vueErrorPush: function vueErrorPush(errorKey, errInfo) {
        _err2.default.submitDataPush(errorKey, errInfo);
      },

      /**
       * 自定义上报性能数据， 目前仅限于 cfpt(自定义首屏)
       * @param perfObject
       */
      perfPush: function perfPush(perfObject) {
        if (Object.keys(perfObject).length && perfObject.cfpt) {
          _page2.default.saveCustomPerf(perfObject);
        }
      }
    };
  } catch (e) {
    console.log("error:" + e);
  }
}
window["zybLogCollect"] = install;
exports.default = install;

/***/ }),

/***/ "./src/lib/def.ts":
/*!************************!*\
  !*** ./src/lib/def.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var submitPool_1 = __webpack_require__(/*! ../base/submitPool */ "./src/base/submitPool.ts");
var supper_1 = __webpack_require__(/*! ./supper */ "./src/lib/supper.ts");
var tools_1 = __webpack_require__(/*! ../base/tools */ "./src/base/tools.ts");
var Def = /** @class */ (function (_super) {
    __extends(Def, _super);
    function Def() {
        var _this = _super.call(this) || this;
        _this.TYPE = 'custom';
        return _this;
        //用于去重错误信息;
    }
    /**
     * 错误数据压到错误数据当中
     */
    Def.prototype.submitDataPush = function (collectInfo) {
        var customInfo = tools_1.default.assign(collectInfo, this.baseInfo);
        customInfo['type'] = this.TYPE;
        if (collectInfo.constructor.name !== 'Object') {
            customInfo = tools_1.default.assign({
                customInfo: collectInfo
            }, this.baseInfo);
        }
        submitPool_1.default.pushDatas(customInfo);
    };
    /**
     * 开始错误信息收集
     */
    Def.prototype.init = function (win_, baseInfo_) {
        _super.prototype.init.call(this, win_, baseInfo_);
    };
    return Def;
}(supper_1.default));
var def = new Def();
exports.default = def;


/***/ }),

/***/ "./src/lib/err.ts":
/*!************************!*\
  !*** ./src/lib/err.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../base/tools */ "./src/base/tools.ts");
var submitPool_1 = __webpack_require__(/*! ../base/submitPool */ "./src/base/submitPool.ts");
var supper_1 = __webpack_require__(/*! ./supper */ "./src/lib/supper.ts");
var config_1 = __webpack_require__(/*! ../base/config */ "./src/base/config.ts");
var error = /** @class */ (function (_super) {
    __extends(error, _super);
    function error() {
        var _this = _super.call(this) || this;
        _this.TYPE = "error";
        _this.EVENT_MAX_VALUE = 20;
        _this.win = window;
        _this.errorInfoMap = {};
        _this.eventlist = [];
        _this.errorOpStatus = { INIT: 1, OK: 2, FAIL: 3 };
        return _this;
        //用于去重错误信息;
    }
    /**
     * md5key:为区分错误
     * 错误数据压到错误数据当中
     */
    error.prototype.submitDataPush = function (md5key, errorObj) {
        var hex_md5 = tools_1.default.hash(md5key);
        if (tools_1.default.isHitFiltered(errorObj.message, config_1.default.__filterErrors) ||
            this.errorInfoMap[hex_md5]) {
            return;
        }
        errorObj["userBehavior"] = this.eventlist;
        errorObj["id"] = hex_md5;
        errorObj = tools_1.default.assign(errorObj, this.baseInfo);
        errorObj["type"] = this.TYPE;
        errorObj["clientTime"] = +new Date();
        this.errorInfoMap[hex_md5] = this.errorOpStatus["INIT"];
        submitPool_1.default.pushDatas(errorObj);
    };
    error.prototype.customError = function (errorType, info, msg) {
        if (info === void 0) { info = ""; }
        if (msg === void 0) { msg = ""; }
        var k = tools_1.default.getUvId();
        this.submitDataPush(k, { errorType: errorType, errorInfo: info, message: msg });
    };
    /**
     * 用户行为放入队列
     * @param {*} e
     */
    error.prototype.pushList = function (e) {
        this.eventlist.push(JSON.stringify(e));
        this.eventlist.length > 20 && this.eventlist.shift();
    };
    /**
     * 用户行为记录
     **/
    error.prototype.addUserBehavior = function () {
        var _this = this;
        this.win.addEventListener("click", function (event) {
            var r = event.target;
            var outerHTML = r && r.outerHTML;
            outerHTML &&
                outerHTML.length > 200 &&
                (outerHTML = outerHTML.slice(0, 200));
            _this.pushList({
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
        }, true);
    };
    /**
     * 收集ajax请求错误
     * @param {*} errorInfo
     */
    error.prototype.collectXHRError = function (errorInfo) {
        var xhrErrorInfo = {
            xhrInfo: errorInfo,
            errorReqLink: errorInfo.reqUrl,
            errorType: "XMLHttpRequest"
        };
        var name = errorInfo["reqType"] +
            errorInfo["reqUrl"] +
            errorInfo["type"] +
            errorInfo["reqParams"];
        this.submitDataPush(name, xhrErrorInfo);
    };
    /**
     * 收集promiseError相关错误信息
     */
    error.prototype.collectPromiseError = function () {
        var _this = this;
        var notifyJsError = function (err, res) {
            if (err) {
                err &&
                    err.name !== "unhandledrejection" &&
                    _this.win.console &&
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
                _this.submitDataPush(JsError.name, JsError);
            }
        };
        this.win.addEventListener("unhandledrejection", function (e) {
            var reason = e.reason;
            if (Object.prototype.toString.apply(reason) === "[object Error]") {
                reason.name = "unhandledrejection";
                notifyJsError(reason);
            }
            else {
                notifyJsError({ message: reason, name: "unhandledrejection" });
            }
        });
    };
    /**
     * 收集资源加载错误数据 src 相关
     */
    error.prototype.collectSrcError = function () {
        var _this = this;
        var that = this;
        this.win.addEventListener &&
            this.win.addEventListener("error", function (event) {
                var target = event.target || event.srcElement;
                var eventName = event.constructor.name.toLocaleLowerCase();
                if (eventName === "errorevent") {
                    _this.baseErrorGroupFun(event.message, event.filename, event.lineno, event.colno, event.error);
                    return;
                }
                var outerHTML = (target && target.outerHTML) || "";
                var errorLink = target && (target.src || target.link);
                var resourceError = {
                    errorType: "resourceError",
                    target: {
                        outerHTML: outerHTML,
                        src: errorLink,
                        tagName: target && target.tagName,
                        className: target && target.className,
                        type: target && target.type,
                        XPath: tools_1.default.getXPath(target),
                        timeStamp: event.timeStamp
                    },
                    errorLink: errorLink,
                    resourceHost: tools_1.default.getHost(errorLink),
                    resourceType: target.tagName
                };
                that.submitDataPush(errorLink, resourceError);
            }, true);
    };
    /**
     *
     * @param errorInfo
     * @param url
     * @param lineNo
     * @param columnNo
     * @param error
     */
    error.prototype.baseErrorGroupFun = function (errorMessage, url, lineNo, columnNo, error) {
        var errorObj = {};
        if (!!error && !!error.stack) {
            //如果浏览器有堆栈信息直接使用
            errorObj["stacktrace"] = error.stack.toString();
        }
        var md5key = errorMessage;
        errorObj["errorInfo"] = errorMessage;
        errorObj["lineNumber"] = lineNo;
        errorObj["columnNumber"] =
            columnNo ||
                (this.win.event && this.win.event.errorCharacter) ||
                0;
        errorObj["message"] = errorObj["errorInfo"];
        errorObj["fileName"] = encodeURIComponent(url || "");
        errorObj["errorType"] = "jsError";
        this.submitDataPush(md5key, errorObj);
        return false;
    };
    /**
     * 收集基本错误信息
     */
    error.prototype.collectBaseError = function () {
        var _this = this;
        var that = this;
        /**
         * 错误信息收集
         */
        this.win.onerror = function (errorMessage, url, lineNo, columnNo, error) {
            _this.baseErrorGroupFun(errorMessage, url, lineNo, columnNo, error);
            return false;
        };
    };
    /**
     * 开始错误信息收集
     */
    error.prototype.init = function (win_, baseInfo_) {
        _super.prototype.init.call(this, win_, baseInfo_);
        this.addUserBehavior(); //记录用户当前行为
        this.collectPromiseError(); //收集promise错误
        this.collectSrcError();
        this.collectBaseError();
    };
    return error;
}(supper_1.default));
var err = new error();
exports.default = err;


/***/ }),

/***/ "./src/lib/fmp.ts":
/*!************************!*\
  !*** ./src/lib/fmp.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = __webpack_require__(/*! ../base/tools */ "./src/base/tools.ts");
/**
 * dom observer，可以实现dom变化通知我们，然后我们队这次dom做标记（打tag），
 * 并记录这一次tag对应的时间（performance.now()或者自己减去开始时间），这样每一次变更的时间就存储起来了。
 * 然后深入每个dom以及其子节点 计算得分（得分规则：首屏区域比重肯定高，等等）
 */
var performance = window.performance;
// @ts-ignore
var MutationObserver = window.MutationObserver;
/**
 * 统计中需要忽略标签
 */
var IGNORE_TAG_SET = ["SCRIPT", "STYLE", "META", "HEAD", "LINK"];
/**
 * 元素权重
 * 因为我们不希望图片元素权重过大（权重大代表FMP计算会认为其实主角）
 * 所以目前设定为全部1
 */
var TAG_WEIGHT_MAP = {
    SVG: 1,
    IMG: 1,
    CANVAS: 1,
    OBJECT: 1,
    EMBED: 1,
    VIDEO: 2
};
// 统计起点时间
var START_TIME = 0;
try {
    START_TIME = performance.timing.fetchStart;
}
catch (e) {
    START_TIME = Date.now();
}
/**
 * 停止 observe时间
 */
var LIMIT = 10000;
var WW = window.innerWidth;
var WH = window.innerHeight;
var VIEWPORT_AREA = WW * WH;
var DELAY = 500;
// dom标记
var TAG_FLAG = 'o_c';
var location = window.location;
var FMPTiming = /** @class */ (function () {
    function FMPTiming() {
        this.statusCollector = [];
        this.flag = true;
        this.muo = MutationObserver;
        this.observer = null;
        this.callbackCount = 1;
        this.mp = {};
        this.muo && this.initObserver();
    }
    FMPTiming.prototype.initObserver = function () {
        var _this = this;
        this.firstSnapshot();
        tools_1.default.log('initObserver');
        this.observer = new MutationObserver(function () {
            var t = Date.now() - START_TIME;
            var bodyTarget = document.body;
            if (bodyTarget) {
                _this.doTag(bodyTarget, _this.callbackCount++);
            }
            _this.statusCollector.push({ t: t });
        });
        this.observer.observe(document, {
            childList: true,
            subtree: true
        });
        // todo   window beforeunload 必须结束统计
    };
    FMPTiming.prototype.getFMP = function () {
        var me = this;
        // @ts-ignore
        return new Promise(function (resolve, rejet) {
            if (document.readyState === "complete") {
                me.checkCanCal(START_TIME) ?
                    setTimeout(function () {
                        resolve(me.calFinallScore());
                    }, DELAY) : resolve(me.calFinallScore());
            }
            else {
                window.addEventListener("load", function () {
                    resolve(me.getFMP());
                }, true);
            }
        });
    };
    FMPTiming.prototype.firstSnapshot = function () {
        var t = Date.now() - START_TIME;
        var bodyTarget = document.body;
        if (bodyTarget) {
            this.doTag(bodyTarget, this.callbackCount++);
        }
        this.statusCollector.push({
            t: t
        });
    };
    FMPTiming.prototype.initResourceMap = function () {
        var _this = this;
        performance.getEntries().forEach(function (item) {
            _this.mp[item.name] = item['responseEnd'];
        });
    };
    /**
     * 对dom标记
     * @param target
     * @param callbackCount
     */
    FMPTiming.prototype.doTag = function (target, callbackCount) {
        var tagName = target.tagName;
        if (IGNORE_TAG_SET.indexOf(tagName) === -1) {
            var childrenLen = target.children ? target.children.length : 0;
            if (childrenLen > 0) {
                for (var childs = target.children, i = childrenLen - 1; i >= 0; i--) {
                    if (childs[i].getAttribute(TAG_FLAG) === null) {
                        childs[i].setAttribute(TAG_FLAG, callbackCount);
                    }
                    this.doTag(childs[i], callbackCount);
                }
            }
        }
    };
    FMPTiming.prototype.calFinallScore = function () {
        var fmp = -1;
        var me = this;
        if (MutationObserver && this.flag) {
            me.observer.disconnect();
            me.flag = false;
            var res = me.deepTraversal(document.body);
            var tp_1 = {
                'st': undefined,
                'els': [],
                'dpss': [],
            };
            res.dpss.forEach(function (item) {
                if (tp_1 && tp_1.st) {
                    if (tp_1.st < item.st) {
                        tp_1 = item;
                    }
                }
                else {
                    tp_1 = item;
                }
            });
            // console.log(tp, this.statusCollector);
            // @ts-ignore
            // this.initResourceMap();
            var resultSet = this.filterTheResultSet(tp_1.els);
            var fmpTiming = this.calResult(resultSet);
            fmp = Number(fmpTiming.toFixed(0));
            tools_1.default.log("FMP: " + fmp);
        }
        return fmp;
    };
    /**
     * 计算结果 取集合里面最大值
     * @param resultSet
     */
    FMPTiming.prototype.calResult = function (resultSet) {
        var _this = this;
        var rt = -1;
        resultSet.forEach(function (item) {
            var t = 0;
            var index = +item.node.getAttribute(TAG_FLAG) - 1;
            t = _this.statusCollector[index].t;
            // if (item.weight === 1) {
            //
            // }
            // 目前所有元素weight都是1 不会遇到以下逻辑
            // else if (item.weight === 2) {
            //     if (item.node.tagName === "IMG") {
            //         t = this.mp[item.node.src];
            //     } else if (item.node.tagName === "SVG") {
            //         let index = +item.node.getAttribute(TAG_FLAG) - 1;
            //         t = this.statusCollector[index].t;
            //     } else {
            //         //background image
            //         let match = tools.getStyle(item.node, 'background-image')
            //             .match(/url\(\"(.*?)\"\)/);
            //
            //         let s;
            //         if (match && match[1]) {
            //             s = match[1];
            //         }
            //         if (s && s.indexOf("http") == -1) {
            //             s = location.protocol + match[1];
            //         }
            //         t = this.mp[s];
            //     }
            // } else if (item.weight === 4) {
            //     if (item.node.tagName === "CANVAS") {
            //         let index = +item.node.getAttribute(TAG_FLAG) - 1;
            //         t = this.statusCollector[index].t;
            //     } else if (item.node.tagName === "VIDEO") {
            //         t = this.mp[item.node.src];
            //
            //         !t && (t = this.mp[item.node.poster]);
            //     }
            // }
            rt < t && (rt = t);
        });
        return rt;
    };
    /**
     * 过滤出大于平均值的
     * @param els
     */
    FMPTiming.prototype.filterTheResultSet = function (els) {
        var sum = 0;
        els.forEach(function (item) {
            sum += item.st;
        });
        var avg = sum / els.length;
        return els.filter(function (item) {
            return item.st > avg;
        });
    };
    FMPTiming.prototype.deepTraversal = function (node) {
        if (node) {
            var dpss = [];
            for (var i = 0, child = void 0; (child = node.children[i]); i++) {
                var s = this.deepTraversal(child);
                if (s.st) {
                    dpss.push(s);
                }
            }
            return this.calScore(node, dpss);
        }
        return {};
    };
    // 计算得分
    FMPTiming.prototype.calScore = function (node, dpss) {
        var _a = node.getBoundingClientRect(), width = _a.width, height = _a.height, left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right;
        var f = 1;
        if (WH < top || WW < left) {
            // 不在可视viewport中 得分0
            f = 0;
        }
        var sdp = 0;
        dpss.forEach(function (item) {
            sdp += item.st;
        });
        // 所有权重都是1
        var weight = 1; //TAG_WEIGHT_MAP[node.tagName] || 1;
        // if (weight === 1 &&
        //     tools.getStyle(node, 'background-image') &&
        //     tools.getStyle(node, 'background-image') !== "initial") {
        //     weight = 1 //TAG_WEIGHT_MAP["IMG"]; // 将有图片背景的普通元素 权重设置为img
        // }
        // 计算得分
        var st = width * height * weight * f;
        var els = [{ node: node, st: st, weight: weight }];
        var areaPercent = this.calAreaPercent(node);
        // st*面积占比 获得最终得分
        if (sdp > st * areaPercent || areaPercent === 0) {
            st = sdp;
            els = [];
            dpss.forEach(function (item) {
                els = els.concat(item.els);
            });
        }
        return {
            dpss: dpss,
            st: st,
            els: els
        };
    };
    // 检查是否可以停止设置observer dom
    FMPTiming.prototype.checkCanCal = function (start) {
        var ti = Date.now() - start;
        return !(ti > LIMIT ||
            ti - ((this.statusCollector && this.statusCollector.length &&
                this.statusCollector[this.statusCollector.length - 1].t) || 0)
                > 1000);
    };
    /**
     * 计算元素在可视区面积占比
     * @param node
     */
    FMPTiming.prototype.calAreaPercent = function (node) {
        var _a = node.getBoundingClientRect(), left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, width = _a.width, height = _a.height;
        var wl = 0;
        var wt = 0;
        var wr = WW;
        var wb = WH;
        var overlapX = right - left + (wr - wl) - (Math.max(right, wr) - Math.min(left, wl));
        if (overlapX <= 0) {
            //x 轴无交点
            return 0;
        }
        var overlapY = bottom - top + (wb - wt) - (Math.max(bottom, wb) - Math.min(top, wt));
        if (overlapY <= 0) {
            return 0;
        }
        return (overlapX * overlapY) / (width * height);
    };
    return FMPTiming;
}());
exports.default = FMPTiming;


/***/ }),

/***/ "./src/lib/page.ts":
/*!*************************!*\
  !*** ./src/lib/page.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var supper_1 = __webpack_require__(/*! ./supper */ "./src/lib/supper.ts");
var submitPool_1 = __webpack_require__(/*! ../base/submitPool */ "./src/base/submitPool.ts");
var tools_1 = __webpack_require__(/*! ../base/tools */ "./src/base/tools.ts");
var config_1 = __webpack_require__(/*! ../base/config */ "./src/base/config.ts");
var fmp_1 = __webpack_require__(/*! ./fmp */ "./src/lib/fmp.ts");
// @ts-ignore
var page = /** @class */ (function (_super) {
    __extends(page, _super);
    function page() {
        var _this = 
        //载入数据信息
        _super.call(this) || this;
        _this.loadInfo = {};
        _this.TYPE = "page";
        _this.winPf = window.performance;
        _this.times = _this.winPf
            ? _this.winPf["timing"] || _this.winPf.getEntriesByType("navigation")[0]
            : {};
        _this.fmp = null;
        //解决内部onload方法覆盖用户定义全局onload方法
        _this.onloadFun = window.onload || function () { };
        // 自定义字段列表
        _this.customPerf = ["cfpt"];
        return _this;
    }
    /**
     * 初始化数据
     */
    page.prototype.init = function (win_, baseInfo_) {
        _super.prototype.init.call(this, win_, baseInfo_);
        var useFMP = config_1.default.__useFMP;
        if (useFMP) {
            this.getFMPtiming();
        }
    };
    /**
     * 获取页面加载信息
     */
    page.prototype.getLoadPageInfo = function () {
        /**
         * 获取浏览器时间轴信息
         */
        this.loadInfo["timeJson"] = JSON.stringify(this.times);
        var times = this.times;
        var start = 0;
        if (undefined !== times.navigationStart) {
            start = tools_1.default.toFixed2(times.navigationStart);
        }
        /** 阶段耗时 -- start --**/
        //dns解析时间
        this.loadInfo["dnsTime"] = tools_1.default.toFixed2(times.domainLookupEnd - times.domainLookupStart);
        //tcp连接时间
        this.loadInfo["tcpTime"] = tools_1.default.toFixed2(times.connectEnd - times.connectStart);
        //网络请求耗时（新增）time to first byte
        this.loadInfo["ttfb"] = tools_1.default.toFixed2(times.responseStart - times.requestStart);
        //数据传输耗时（新增）
        this.loadInfo["trans"] = tools_1.default.toFixed2(times.responseEnd - times.responseStart);
        //dom解析耗时（新增）
        this.loadInfo["domParsingTime"] = tools_1.default.toFixed2(times.domInteractive - times.responseEnd);
        //资源加载耗时（新增）
        this.loadInfo["resLoadTime"] = tools_1.default.toFixed2(times.loadEventStart - times.domContentLoadedEventEnd);
        // 前端onload 执行时间 (add: 2019-07-15)
        this.loadInfo["onLoadTime"] = tools_1.default.toFixed2(times.loadEventEnd - times.loadEventStart);
        //白屏时间(空页面时间)
        // this.loadInfo["blankTime"] = tools.toFixed2(blankTime - start);
        // fpt First Paint Time, 首次渲染时间 / 白屏时间 (update: 2019-07-17)
        this.loadInfo["blankTime"] = tools_1.default.toFixed2(times.responseEnd - times.fetchStart);
        // fmp first meaning paint, 也就是主要内容可见时间 todo
        // fmp 不可通过指标减法直接得出。先不取
        // 首屏时间   首屏时间计算方式待确认，先不使用。
        this.loadInfo["firstTime"] = tools_1.default.toFixed2(times.responseStart - start);
        // First byte time, 首包时间 (add: 2019-07-17)
        this.loadInfo["fbt"] = tools_1.default.toFixed2(times.responseStart - times.domainLookupStart);
        // Time to Interact 首次可交互时间 (add: 2019-07-17)
        this.loadInfo["tti"] = tools_1.default.toFixed2(times.domInteractive - times.fetchStart);
        // DOM Ready时间、  原来意思为：资源渲染时间
        this.loadInfo["resourceTime"] = tools_1.default.toFixed2(times.domContentLoadedEventEnd - times.fetchStart);
        //最终时间 页面完全加载 (update：2019-07-15 ）
        this.loadInfo["finalTime"] = tools_1.default.toFixed2(times.loadEventStart - times.fetchStart);
        /** 关键性能指标 -- end --**/
        this.loadInfo["resourcesTime"] = this.getResourceTimes();
        // memory 统计2019-08-21
        // todo 应该存放到base中
        var memory = this.winPf && this.winPf["memory"];
        if (memory) {
            this.loadInfo["mused_p"] = Number(((memory.usedJSHeapSize / memory.totalJSHeapSize) * 100).toFixed(0)); // JS 对象（包括V8引擎内部对象）占用的内存
            this.loadInfo["mused"] = memory.usedJSHeapSize; // JS 对象（包括V8引擎内部对象）占用的内存
            this.loadInfo["mtotal"] = memory.totalJSHeapSize; // 可使用的内存
            this.loadInfo["mlimit"] = memory.jsHeapSizeLimit; // 内存大小限制
        }
        this.loadInfo["type"] = this.TYPE;
    };
    page.prototype.getResourceTimes = function () {
        var resTimes = [];
        if (this.winPf && this.winPf.getEntriesByType) {
            var rts = this.winPf.getEntriesByType("resource");
            if (rts && Array.isArray(rts)) {
                rts.forEach(function (t) {
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
    };
    /**
     * 保存自定义性能指标 todo 实验项目
     *  cfpt  自定义首屏数据
     * @param cfpt
     */
    page.prototype.saveCustomPerf = function (_a) {
        var cfpt = _a.cfpt;
        if (cfpt) {
            this.loadInfo["cfpt"] = cfpt;
        }
    };
    /**
     * 获取fmp时间
     */
    page.prototype.getFMPtiming = function () {
        var fmp = new fmp_1.default();
        this.fmp = fmp;
        // todo test fmp2;
    };
    /**
     * 提交首屏时间，首屏时间只在页面加载完成之事提交，具只提交一次。所以独立提交。
     */
    page.prototype.submit = function () {
        var _this = this;
        var useFMP = config_1.default.__useFMP;
        //是否忽略抽样
        //是否debugger
        //就否命中采样。没有命中则不进行操作
        //是否是命中忽略url关健字。
        if (!config_1.default.__debug &&
            config_1.default.__isPvRatio &&
            !tools_1.default.isTakeSample(config_1.default.__pvRatio)) {
            return;
        }
        if (this.winPf) {
            tools_1.default.on(window, "load", function () {
                _this.onloadFun();
                // onload之时 loadEventEnd并没有值。 所以settimeout
                setTimeout(function () {
                    tools_1.default.log("onload", _this.times["loadEventEnd"]);
                    _this.getLoadPageInfo();
                    // 过滤超大异常值
                    var loadInfo = _this.dataCheck();
                    // 确认fmp统计完成
                    if (useFMP) {
                        _this.fmp
                            .getFMP()
                            .then(function (response) {
                            submitPool_1.default.pushDatas(tools_1.default.assign(loadInfo, __assign(__assign({}, _this.baseInfo), { fmp: response })));
                        })
                            .catch(function (e) {
                            console.log(e);
                        });
                    }
                    else {
                        submitPool_1.default.pushDatas(tools_1.default.assign(loadInfo, __assign({}, _this.baseInfo)));
                    }
                }, 50);
            });
        }
        else {
            //不兼容performance时直接提交，只收集基本信息
            submitPool_1.default.pushDatas(tools_1.default.assign(this.loadInfo, this.baseInfo));
            return;
        }
        //ajax提交
    };
    /**
     *  极限性能数据校正
     * @return data
     */
    page.prototype.dataCheck = function () {
        var loadInfo = this.loadInfo;
        // @ts-ignore
        // todo 这里只过滤明显是错误的时间，不对细节时间做调整
        // 以求最大真实度上报数据
        // 所以最后 只要是大于30s的就认为有问题（我们认为大于30s的基本是错误时间）
        var max = [
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
        var maxValue = 300000;
        max.forEach(function (key) {
            var loadKeyVaule = loadInfo[key];
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
    };
    return page;
}(supper_1.default));
/**
 * 客户端页面加载信息收集
 */
exports.default = new page();


/***/ }),

/***/ "./src/lib/req.ts":
/*!************************!*\
  !*** ./src/lib/req.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var submitPool_1 = __webpack_require__(/*! ../base/submitPool */ "./src/base/submitPool.ts");
var err_1 = __webpack_require__(/*! ./err */ "./src/lib/err.ts");
var config_1 = __webpack_require__(/*! ../base/config */ "./src/base/config.ts");
var supper_1 = __webpack_require__(/*! ./supper */ "./src/lib/supper.ts");
var tools_1 = __webpack_require__(/*! ../base/tools */ "./src/base/tools.ts");
var Req = /** @class */ (function (_super) {
    __extends(Req, _super);
    function Req() {
        var _this = 
        //用于去重错误信息;
        _super.call(this) || this;
        _this.TYPE = "slow";
        _this.ajaxUniqueMap = {};
        _this.REQ_TIME = 800;
        return _this;
    }
    /**
     * 统一拦截处理
     * @param reqObj
     * @param that
     * @param superThat
     */
    Req.prototype.intercept = function (reqObj, that, superThat) {
        //当命中忽略关键字后直接返回
        if (tools_1.default.isHitFiltered(reqObj["reqUrl"], config_1.default.__ignoreUrlKeyWord)) {
            return;
        }
        var reqErrorReg = /^(4|5){1}\d{2}$/;
        var reqOkReg = /^2{1}\d{2}$/;
        //正确返回为200状态的数据
        //超过限定的请求时间
        //如果2g网络情况下，则不上报。
        if ((reqOkReg.test(that.status) || that.status + '' === '0') &&
            reqObj["timeLong"] >= superThat.REQ_TIME &&
            superThat.baseInfo.network.toUpperCase() !== "2G") {
            submitPool_1.default.pushDatas(tools_1.default.assign(reqObj, superThat.baseInfo));
            //错误请求,直接进行错误回收
            // 未命中请求过滤
        }
        else if (reqErrorReg.test(that.status)) {
            reqObj["reqStatus"] = that.status;
            var body = tools_1.default.readXHRbody(that);
            reqObj["resp"] = body ? body.toString().substr(0, 300) : ""; //错误请求返回内容
            err_1.default.collectXHRError(reqObj);
        }
    };
    /**
     * 开始错误信息收集
     */
    Req.prototype.init = function (win_, baseInfo_) {
        var superThat = this;
        var xhrObj = Object.create(null);
        this.REQ_TIME = config_1.default.__slowReqTime; //多少秒数据还没有返回，测认定为慢服务
        _super.prototype.init.call(this, win_, baseInfo_);
        if (window.XMLHttpRequest) {
            var xhrProto = window.XMLHttpRequest.prototype;
            var _open_1 = xhrProto.open;
            var _send_1 = xhrProto.send;
            xhrProto.open = function (arg, xhr) {
                var urls = xhr.split("?");
                xhrObj["reqStartTime"] = +new Date();
                xhrObj["reqType"] = arg;
                xhrObj["reqUrl"] = urls[0];
                xhrObj["type"] = superThat.TYPE;
                xhrObj["reqParams"] = urls.length > 1 ? urls[1] : "";
                _open_1.apply(this, arguments);
                // 跨域失败
            };
            xhrProto.send = function () {
                var that = this;
                var _onreadystatechange = that.onreadystatechange;
                var isReport = new RegExp(config_1.default.__requestUrl).test(xhrObj["reqUrl"]);
                that.onreadystatechange = function () {
                    try {
                        if (!isReport && that.readyState === 4) {
                            var reqObj = xhrObj;
                            var startTime = reqObj["reqStartTime"];
                            var endTime = +new Date();
                            var timeLong_ = endTime - startTime;
                            reqObj["timeLong"] = timeLong_;
                            reqObj["status"] = that.status;
                            reqObj["clientTime"] = +new Date();
                            superThat.intercept(reqObj, that, superThat);
                        }
                    }
                    catch (e) {
                        console.log("error:" + e);
                    }
                    finally {
                        _onreadystatechange && _onreadystatechange.apply(that, arguments);
                    }
                };
                _send_1.apply(this, arguments);
                // 失败
            };
        }
    };
    return Req;
}(supper_1.default));
exports.default = new Req();


/***/ }),

/***/ "./src/lib/supper.ts":
/*!***************************!*\
  !*** ./src/lib/supper.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var submitPool_1 = __webpack_require__(/*! ../base/submitPool */ "./src/base/submitPool.ts");
var supper = /** @class */ (function () {
    function supper() {
        this.win = window;
        this.baseInfo = {};
    }
    /**
     * 错误上报提交处理
     */
    supper.prototype.submit = function () {
        submitPool_1.default.start();
    };
    /**
     * 开始错误信息收集
     */
    supper.prototype.init = function (win, baseInfo) {
        this.win = win || window;
        this.baseInfo = baseInfo;
    };
    return supper;
}());
exports.default = supper;


/***/ }),

/***/ "./src/regCenter.ts":
/*!**************************!*\
  !*** ./src/regCenter.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2019-07-30 21:19:29
 * @LastEditTime: 2019-12-26 10:12:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\owl-sdk\src\regCenter.ts
 */
var tools_1 = __webpack_require__(/*! ./base/tools */ "./src/base/tools.ts");
var config_1 = __webpack_require__(/*! ./base/config */ "./src/base/config.ts");
var page_1 = __webpack_require__(/*! ./lib/page */ "./src/lib/page.ts");
var err_1 = __webpack_require__(/*! ./lib/err */ "./src/lib/err.ts");
var req_1 = __webpack_require__(/*! ./lib/req */ "./src/lib/req.ts");
var def_1 = __webpack_require__(/*! ./lib/def */ "./src/lib/def.ts");
var RegCenter = /** @class */ (function () {
    function RegCenter(win_) {
        this.win = window;
        this.baseSysInfo = {};
        this.regModules = [page_1.default, err_1.default, req_1.default, def_1.default];
        //注册数据容器
        this.win = win_ || window;
    }
    /**
     * 注册上报处理对像至容器。
     */
    RegCenter.prototype.regAndTrigger = function () {
        var _this = this;
        this.regModules.forEach(function (obj) {
            _this.regModules.push(obj);
            obj.init(window, JSON.parse(JSON.stringify(_this.baseSysInfo))); //解决引用数据问题，一个简单的拷贝;
            //激发，触动各注册模块的自收集功能。 trigger;
            obj["submit"]();
        });
    };
    /**
     * 初始化数据
     * @param config_
     */
    RegCenter.prototype.init = function (config_) {
        // 配置信息代码需要放在最前面。
        // debug配置
        tools_1.default.getUrlParams("zybdebugger") && (config_.__debug = true);
        // 初始化conf
        config_ && config_1.default.setConfig(config_);
        //获取系统基本信息。
        this.baseSysInfo = tools_1.default.getSysInfo(config_ ? config_.extColumn : null);
        //全局错误收集。
        this.win["errorCollect"] = err_1.default;
        if (tools_1.default.isHitFiltered(tools_1.default.getUrl(), config_1.default.__ignoreUrlKeyWord)) {
            return;
        }
        this.regAndTrigger();
    };
    return RegCenter;
}());
exports.default = RegCenter;


/***/ })

/******/ });
});
//# sourceMappingURL=owl-sdk-0.1.34.js.map