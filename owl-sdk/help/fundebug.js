var _0x2274 = [ 'exports',
'defineProperty',
'constructor',
'user',
'stacktrace',
'callback',
'Content-Type',
'length',
'join',
'isSampled',
'verifyApiKey',
'location',
'XMLHttpRequest',
'className',
'href',
'getTime',
'detail',
'cyclic object value',
'property removed because of circular structure',
'silentWebsocket',
'onerror',
'message',
'lineNumber',
'name',
'warning',
'addEventListener',
'stringify',
'scripts',
'getAttribute',
'maxEventNumber',
'false',
'silentHttp' ]
var _0x1fc5 = function (e, t) {
    return _0x2274[e -= 0]
};
! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define &&
        define.amd ? define([], t) : "object" == typeof exports ? exports.fundebug = t() : e.fundebug = t()
}(window, function () {
    return function (n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t[_0x1fc5("0x0")], o), t.l = !0, t.exports
        }
        return o.m = n, o.c = r, o.d = function (e, t, n) {
            o.o(e, t) || Object[_0x1fc5("0x1")](e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function (t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function (e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 0)
    }(
[
    //初始化
    function (e, t, n) {
        "use strict";
        var r = n(1),
            o = n(7),
            i = n(9),
            a = n(10),
            u = n(12),
            s = n(13),
            c = n(14),
            l = n(15),
            f = n(16),
            d = n(17),
            p = n(18),
            m = n(19),
            y = n(20),
            g = m.getConfig();
        r(g, y), o(g, y), i(g, y), a(g, y), u(g, y), s(g, y), c(g, y), l(g, y), f(g, y), d(g, y), p(g,
            y), window.fundebug = g, e.exports = g
    },
    // promise reject异常 监控
    function (e, t, n) {
        "use strict";
        var i = n(2);
        e.exports = function (r, o) {
            "addEventListener" in window && window.addEventListener("unhandledrejection", function (
                e) {
                try {
                    var t = {
                        type: "unhandledrejection",
                        name: "unhandledrejection",
                        message: e.reason
                    };
                    i(t, r, o)
                } catch (n) {}
            })
        }
    }, 
    // send方法，发送统计的数据
    function (e, t, n) {
        "use strict";
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e[_0x1fc5("0x2")] === Symbol && e !== Symbol
                    .prototype ? "symbol" : typeof e
            },
            s = n(3),
            c = n(4),
            l = n(5),
            f = n(6),
            d = "https://web.fundebug.net/event/";

        function r(e, t, n) {
            var r = t.apikey;
            if (c.verifyApiKey(r) && t.maxEventNumber && !t.silent && !l(t.silentDev)) {
                var o;
                t.maxEventNumber -= 1, o = t.revideo && t.revideo.fetchSequence && t.revideo.fetchSequence();
                var i, a = n.getBreadcrumbs();
                t.silentPerformance || (i = f.getPerformance());
                var u = {
                    notifierVersion: "1.7.3",
                    userAgent: window.navigator.userAgent,
                    locale: window.navigator.language || window.navigator.userLanguage,
                    url: window.location.href,
                    title: document.title,
                    appVersion: t.appversion,
                    apiKey: t.apikey,
                    releaseStage: t.releasestage,
                    metaData: e.metaData || t.metaData,
                    user: e.user || t[_0x1fc5("0x3")],
                    name: e.name,
                    time: (new Date).getTime(),
                    message: e.message,
                    fileName: e.fileName,
                    lineNumber: e.lineNumber,
                    columnNumber: e.columnNumber,
                    stacktrace: e[_0x1fc5("0x4")],
                    type: e.type,
                    severity: e.severity,
                    target: e.target,
                    req: e.req,
                    res: e.res,
                    breadcrumbs: a,
                    redo: o,
                    performance: i
                };
                u.userAgent && u.userAgent.match(/Googlebot/) || (t.callback && t[_0x1fc5("0x5")](u), s
                    .isFiltered(u, t.filters) || c.isSampled(t.sampleRate) && function (e) {
                        var t = function (e) {
                            var t;
                            try {
                                t = p(e)
                            } catch (n) {
                                delete e.metaData;
                                try {
                                    t = p(e)
                                } catch (r) {
                                    return
                                }
                            }
                            return t
                        }(u);
                        if (t)
                            if (window.XMLHttpRequest && window.atob) {
                                var n = new XMLHttpRequest;
                                n.Fundebug = !0, n.open("POST", d), n.setRequestHeader(_0x1fc5(
                                    "0x6"), "application/json"), n.send(t)
                            } else {
                                (new Image).src = d + "?event=" + encodeURIComponent(t)
                            }
                    }())
            }
        }

        function p(e) {
            if ("undefined" != typeof JSON) return JSON.stringify(e);
            if (e instanceof Array) {
                for (var t = [], n = 0; n < e[_0x1fc5("0x7")]; n++) t.push(p(e[n]));
                return "[" + t[_0x1fc5("0x8")](",") + "]"
            }
            var r = [];
            for (var o in e)
                if (e.hasOwnProperty(o)) {
                    var i = '"' + o + '":',
                        a = e[o];
                    a && ("object" === (void 0 === a ? "undefined" : u(a)) ? i += p(a) : "number" ==
                        typeof a ? i += a : i = i + '"' + a.replace(/\n/g, "\\n") + '"', r.push(i))
                } return "{" + r.join(",") + "}"
        }
        e.exports = function (e, t, n) {
            // revideo操作录制
            t.revideo ? setTimeout(function () {
                r(e, t, n)
            }, 1e3) : r(e, t, n)
        }
    },
    // 数据过滤
    function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!e) return !1;
            if (!t) return !1;
            if (Object.keys && !Object.keys(t).length) return !1;
            for (var n in t)
                if (t.hasOwnProperty(n))
                    if (t[n].constructor === RegExp) {
                        if (!t[n].test(e[n])) return !1
                    } else if (t[n].constructor === Object) {
                if (!r(e[n], t[n])) return !1
            } else {
                if (t[n].constructor !== String || "inexistence" !== t[n]) return !1;
                if (e.hasOwnProperty(n)) return !1
            }
            return !0
        }
        t.isFiltered = function (e, t) {
            if (!t || !t.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (r(e, t[n])) return !0;
            return !1
        }
    },
    // 校验
    function (e, t, n) {
        "use strict";
        t['isSampled'] = function (e) {
            return !e && 0 !== e || (e = parseFloat(e), !!isNaN(e) || Math.random() <= e)
        }, t['verifyApiKey'] = function (e, t) {
            return e ? !!e.match(/^[0-9a-z]{64}$/i) || (t || console.error("Fundebug: apikey格式错误"),
                !1) : (t || console.error("Fundebug: 请配置apikey"), !1)
        }
    },
    // url check
    function (e, t, n) {
        "use strict";
        // 
        e['exports'] = function (e) {
            return !(!e || !(t = window['location'].href) || !/^http:\/\/localhost/.test(t) &&
                !/^http:\/\/(\d{1,3}\.){3}\d{1,3}/.test(t));
            var t
        }
    },
    // 获取timing api数据
    function (e, t, n) {
        "use strict";
        t.getPerformance = function () {
            if ("performance" in window) {
                if ("getEntriesByType" in performance) var e = {
                    navigation: performance.getEntriesByType("navigation")
                };
                return e
            }
        }
    },
    // window.onerror 事件注册，格式化
    function (e, t, n) {
        "use strict";
        var l = n(2),
            f = n(8);
        e['exports'] = function (s, c) {
            window.onerror = function (e, t, n, r, o) {
                var i;
                void 0 === r && window.event && (r = window.event.errorCharacter), i = t && t !==
                    window.location.href ? t : null;
                var a = f(o),
                    u = {
                        message: e,
                        lineNumber: n,
                        columnNumber: r,
                        fileName: i || a && a.fileName,
                        name: a && a.name || "uncaught error",
                        stacktrace: o && o.stack || function () {
                            var e, t, n = [];
                            try {
                                t = arguments.callee.caller.caller
                            } catch (o) {
                                t = ""
                            }
                            for (; t && n.length < 10;) {
                                var r = t.toString().match(/function\s*([\w\_$]+)?\s*\(/i);
                                e = r && r[1] || "[anonymous]", n.push(e), t = t.caller
                            }
                            return "generated-stack:\n" + n.join("\n")
                        }(),
                        severity: "error",
                        type: "uncaught"
                    };
                return l(u, s, c), !1
            }
        }
    },
    //
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            if (!e) return null;
            var t = {};
            return window['XMLHttpRequest'] ? t = {
                name: e.name,
                message: e.message,
                fileName: e.fileName || e.sourceURL,
                lineNumber: e.lineNumber || e.line,
                columnNumber: e.columnNumber || e.column
            } : t.message = e.message, t
        }
    },
    // 资源异常上报
    function (e, t, n) {
        "use strict";
        var s = n(2);
        e.exports = function (a, u) {
            window.addEventListener && window.addEventListener("error", function (e) {
                try {
                    if (a.silentResource || e.message) return;
                    var t, n = (t = e.target ? e.target : e.srcElement) && t.outerHTML;
                    n && 200 < n.length && (n = n.slice(0, 200));
                    var r = {
                        type: "resourceError",
                        target: {
                            outerHTML: n,
                            src: t && t.src,
                            tagName: t && t.tagName,
                            id: t && t.id,
                            className: t && t['className'],
                            name: t && t.name,
                            type: t && t.type,
                            XPath: function (e) {
                                for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e =
                                    e.parentNode) {
                                    var n, r = 0,
                                        o = !1;
                                    for (n = e.previousSibling; n; n = n.previousSibling)
                                        n.nodeType != Node.DOCUMENT_TYPE_NODE && n.nodeName ==
                                        e.nodeName && ++r;
                                    for (n = e.nextSibling; n && !o; n = n.nextSibling)
                                        n.nodeName == e.nodeName && (o = !0);
                                    var i = (e.prefix ? e.prefix + ":" : "") + e.localName,
                                        a = r || o ? "[" + (r + 1) + "]" : "";
                                    t.splice(0, 0, i + a)
                                }
                                return t.length ? "/" + t['join']("/") :
                                    null
                            }(t),
                            selector: function (e) {
                                for (var t = []; e.parentNode;) {
                                    if (e.id) {
                                        t.unshift("#" + e.id);
                                        break
                                    }
                                    if (e == e.ownerDocument.documentElement) t.unshift(
                                        e.tagName);
                                    else {
                                        for (var n = 1, r = e; r.previousElementSibling; r =
                                            r.previousElementSibling, n++);
                                        t.unshift(e.tagName + ":nth-child(" + n +
                                            ")")
                                    }
                                    e = e.parentNode
                                }
                                return t.join(" > ")
                            }(t),
                            timeStamp: e.timeStamp
                        }
                    };
                    if (t.src === window.location['href']) return;
                    if (t.src && t.src.match(/.*\/(.*)$/) && !t.src.match(/.*\/(.*)$/)[1])
                        return;
                    if (r.target.src && window.XMLHttpRequest) {
                        var o = new XMLHttpRequest;
                        o.Fundebug = !0, o.open("HEAD", r.target.src), o.send(), o.onload =
                            function (e) {
                                200 !== e.target.status && (r.target.status = e.target.status,
                                    r.target.statusText = e.target.statusText), s(r, a,
                                    u)
                            }
                    }
                } catch (i) {}
            }, !0)
        }
    },
    // hook xhr & fetch
    function (e, t, n) {
        "use strict";
        var o = n(2),
            p = n(11);
        e['exports'] = function (a, u) {
            // hook xhr
            if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
                var s, c, l, e = XMLHttpRequest.prototype,
                    r = e.open;
                e.open = function (e, t) {
                    try {
                        s = e, c = t, l = (new Date).getTime(), r.apply(this, arguments)
                    } catch (n) {
                        r && r.apply(this, arguments)
                    }
                };
                var t = e.send;
                e.send = function (r) {
                    var o = this,
                        i = o.onreadystatechange;
                    o.onreadystatechange = function () {
                        try {
                            if (4 === o.readyState && !o.Fundebug &&
                                "https://web.fundebug.net/event/" != c) {
                                var e = (new Date)[_0x1fc5("0xf")]() - l,
                                    t = {
                                        type: "XMLHttpRequest",
                                        page: {
                                            url: window.location.href
                                        },
                                        detail: {
                                            method: s,
                                            url: o.responseURL || c,
                                            status: o.status,
                                            statusText: o.statusText
                                        },
                                        elapsedTime: e,
                                        time: l
                                    };
                                a.setHttpBody && (t.detail.body = p.copyWithoutPrivacy(r)),
                                    d(t) && f({
                                        method: t.detail.method,
                                        url: t.detail.url,
                                        body: t.detail.body
                                    }, {
                                        status: o.status,
                                        statusText: o.statusText,
                                        response: o.response,
                                        elapsedTime: e
                                    }), u.addBreadcrumb(t, a.silentBehavior)
                            }
                            i && i.apply(this, arguments)
                        } catch (n) {
                            i && i.apply(this, arguments)
                        }
                    }, t.apply(this, arguments)
                }
            }
            // hook fetch
            if (window.fetch) {
                var n = window.fetch;
                window.fetch = function (e, r) {
                    var o = (new Date).getTime();
                    return n.apply(this, arguments).then(function (e) {
                        var t = (new Date).getTime() - o,
                            n = {
                                type: "fetch",
                                page: {
                                    url: window.location.href,
                                    title: document.title
                                },
                                detail: {
                                    method: r && r.method || "GET",
                                    url: e.url,
                                    status: e.status,
                                    statusText: e.statusText
                                },
                                elapsedTime: t,
                                time: o
                            };
                        return d(n) && f({
                            method: n.detail.method,
                            url: n[_0x1fc5("0x10")].url
                        }, {
                            status: e.status,
                            statusText: e.statusText,
                            elapsedTime: t
                        }), u.addBreadcrumb(n, a.silentBehavior), e
                    })
                }
            }

            function f(e, t, n) {
                var r = {
                    type: "httpError",
                    req: e,
                    res: t,
                    user: n && n.user,
                    metaData: n && n.metaData
                };
                o(r, a, u)
            }

            function d(e) {
                return !(a.silentHttp || 0 === e.detail.status && /^file:\/\/\//.test(e.detail.url) ||
                    2 === parseInt(e.detail.status / 100))
            }
        }
    },
    // utils
    function (e, t, n) {
        "use strict";
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                "symbol" : typeof e
        };
        t.copyWithoutPrivacy = function (e) {
            try {
                var t = e;
                return "string" == typeof e && (t = JSON.parse(e)).password && (t.password =
                    "Fundebug: deleted for protectiong privary"), t
            } catch (n) {
                return e
            }
        },
         t.copyWithoutCircle = function (e) {
            return e && "object" === (void 0 === e ? "undefined" : u(e)) && function (e) {
                try {
                    JSON.stringify(e)
                } catch (t) {
                    return -1 !== t.message.indexOf("Converting circular structure to JSON") ||
                        -1 !== t.message.indexOf(
                            "JSON.stringify cannot serialize cyclic structures") || -1 !== t.message
                        .indexOf(_0x1fc5("0x11")) || -1 !== t.message.indexOf(
                            "Circular reference in value argument not supported") || -1 !== t.message
                        .indexOf("循环引用")
                }
                return !1
            }(e) ? "entries" in Object ? function a(e, o) {
                try {
                    var i = {};
                    return Object.entries(e).forEach(function (e) {
                        var t = function (e, t) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return function (e, t) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (var a, u = e[Symbol.iterator](); !
                                            (r = (a = u.next()).done) && (n.push(
                                                    a.value), !t || n.length !==
                                                t); r = !0);
                                    } catch (s) {
                                        o = !0, i = s
                                    } finally {
                                        try {
                                            !r && u["return"] && u["return"]()
                                        } finally {
                                            if (o) throw i
                                        }
                                    }
                                    return n
                                }(e, t);
                                throw new TypeError(
                                    "Invalid attempt to destructure non-iterable instance"
                                )
                            }(e, 2),
                            n = t[0],
                            r = t[1];
                        "object" === (void 0 === r ? "undefined" : u(r)) && null !== r ?
                            o.has(r) ? i[n] = _0x1fc5("0x12") : 10 < o.size ? i[n] =
                            "property removed to avoid deep recursion" : (o.add(r), i[n] =
                                a(r, o)) : i[n] = r
                    }), i
                } catch (t) {
                    return e
                }
            }(e, new Set([e])) : {} : e
        }
    },
    // hook websocket error 
    function (e, t, n) {
        "use strict";
        var i = n(2);
        e.exports = function (r, o) {
            try {
                if (r['silentWebsocket']) return;
                if (!("WebSocket" in window)) return;
                var t = Object.getOwnPropertyDescriptor(WebSocket.prototype, 'onerror');
                if (!t) return;
                if (!t.configurable) return;
                Object.defineProperty(WebSocket.prototype, "onerror", {
                    set: function () {
                        if (r.silentWebsocket) return t.set.apply(this, arguments);
                        try {
                            var n = arguments[0];
                            return t.set.apply(this, [function (e) {
                                var t = {
                                    type: "websocketError",
                                    target: {
                                        type: "onerror",
                                        url: e.target.url,
                                        timeStamp: e.timeStamp
                                    }
                                };
                                i(t, r, o), n.apply(this, arguments)
                            }])
                        } catch (e) {
                            return t.set.apply(this, arguments)
                        }
                    }
                })
            } catch (e) {
                return
            }
        }
    },
    // 异常上报接口1 将捕获的异常上报
    function (e, t, n) {
        "use strict";
        var a = n(2),
            u = n(8);
        e.exports = function (o, i) {
            o.notifyError = function (e, t) {
                if (e) {
                    window.console && console.error(e);
                    var n = u(e),
                        r = {
                            name: n.name || t && t.name || "caught error",
                            message: n.message || t && t['message'],
                            stacktrace: e.stack,
                            fileName: n.fileName,
                            lineNumber: n['lineNumber'],
                            columnNumber: n.columnNumber,
                            severity: t && t.severity || "error",
                            type: "caught",
                            user: t && t.user,
                            metaData: t && t.metaData
                        };
                    a(r, o, i)
                }
            }
        }
    },
    // 异常上报接口2 自定义异常信息
    function (e, t, n) {
        "use strict";
        var u = n(2),
            s = n(4);
        e.exports = function (i, a) {
            i.notify = function (e, t, n) {
                if (e) {
                    var r = {
                            name: e || n && n['name'],
                            message: t || n && n.message,
                            severity: n && n.message || 'warning',
                            stacktrace: function () {
                                var e;
                                try {
                                    throw new Error("")
                                } catch (t) {
                                    e = t.stack
                                }
                                return e ? e = "generated-stack:\n" + (e = (e = e.replace(
                                    /(.*?)fundebug(.*?)\.js(.*)\n?/gm, "")).replace(
                                    /^Error\n/g, "")) : void 0
                            }(),
                            type: "notification",
                            user: n && n.user,
                            metaData: n && n.metaData
                        },
                        o = i.apikey;
                    return s.verifyApiKey(o, !0) ? (u(r, i, a), "fundebug.com" === location.host ||
                        "www.fundebug.com" === location.host ?
                        "亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!" :
                        "请查看邮箱以及Fundebug控制台!") : o ? "apikey格式错误" : "请配置apikey"
                }
            }
        }
    },
    // 发送测试数据
    function (e, t, n) {
        "use strict";
        var a = n(2),
            u = n(4);
        e.exports = function (o, i) {
            o.test = function (e, t) {
                var n = {
                        name: e || "Test",
                        message: t || "Hello, Fundebug!",
                        severity: "test",
                        type: "test"
                    },
                    r = o.apikey;
                return u.verifyApiKey(r, !0) ? (a(n, o, i), "fundebug.com" === location.host ||
                    "www.fundebug.com" === location.host ?
                    "亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!" :
                    "请查看邮箱以及Fundebug控制台!") : r ? "apikey格式错误" : "请配置apikey"
            }
        }
    },
    // 追踪行为
    function (e, t, n) {
        "use strict";
        e.exports = function (o, i) {
            function e(e) {
                var t, n = (t = e.target ? e.target : e.srcElement) && t.outerHTML;
                n && 200 < n.length && (n = n.slice(0, 200));
                var r = {
                    type: "click",
                    page: {
                        url: window.location.href,
                        title: document.title
                    },
                    detail: {
                        outerHTML: n,
                        tagName: t && t.tagName,
                        id: t && t.id,
                        className: t && t.className,
                        name: t && t.name
                    },
                    time: (new Date).getTime()
                };
                i.addBreadcrumb(r, o.silentBehavior)
            }
            window.addEventListener ? window['addEventListener']("click", e, !0) : document.attachEvent(
                "onclick", e)
        }
    },
    // hook url change (h5 & hashchange)
    function (e, t, n) {
        "use strict";
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                "symbol" : typeof e
        };
        e.exports = function (r, o) {
            var i = {
                url: window.location['href']
            };
            document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
                i = {
                    url: window.location.href,
                    title: document.title
                }
            }) : document.attachEvent("onreadystatechange", function () {
                i = {
                    url: window.location.href,
                    title: document.title
                }
            });
            var t = window.onpopstate;
            (void 0 === t || s(t)) && (window.onpopstate = function () {
                var e = {
                    url: window.location['href']
                };
                if (i.title || (i.title = document.title), i.url !== e.url && u(i, e), t) return t
                    .apply(this, arguments)
            });
            var n = window.history.pushState;
            n && (window.history.pushState = function () {
                i = {
                    url: window.location.href,
                    title: document.title
                };
                var e = {};
                if (3 === arguments.length && (e.url = arguments[2]), i.url !== e.url && u(
                        i, e), n) return n.apply(this, arguments)
            });
            var a = window.onhashchange;

            function u(e, t) {
                var n = {
                    type: "navigation",
                    detail: {
                        from: e,
                        to: i = t
                    },
                    time: (new Date).getTime()
                };
                JSON['stringify'](n, null, 4), o.addBreadcrumb(n, r.silentBehavior)
            }
            s(window.onhashchange) && (window.onhashchange = function () {
                var e = {
                    url: window.location.href,
                    title: document.title
                };
                if (i.url !== e.url && u(i, e), a) return a.apply(this, arguments)
            })
        }
    },
    // hook console
    function (e, t, n) {
        "use strict";
        var s = n(11);
        e['exports'] = function (a, u) {
            function e(o) {
                var i = console[o];
                console[o] = function () {
                    try {
                        var e = {
                            type: "console",
                            page: {
                                url: window.location.href,
                                title: document.title
                            },
                            detail: {
                                level: o,
                                arguments: (t = arguments, t[0] instanceof Error ? [].slice
                                    .apply(t).join(" ") : s.copyWithoutCircle(t))
                            },
                            time: (new Date).getTime()
                        };
                        a.silentConsole || u.addBreadcrumb(e, a.silentBehavior)
                    } catch (r) {}
                    var t;
                    if ("function" == typeof i)
                        if (i.apply) i.apply(console, arguments);
                        else {
                            var n = Array.prototype.slice.apply(arguments)[_0x1fc5("0x8")](" ");
                            i(n)
                        }
                }
            }
            for (var t = ["log", "warn", "debug", "info"], n = {}, r = 0; r < t.length; r++) window
                .console && (n[t[r]] = console[t[r]], a.silentConsole || e(t[r]));
            document.addEventListener && document.addEventListener("DOMContentLoaded", function () {
                for (var e = 0; e < t.length; e++) window.console && a.silentConsole && n[t[
                    e]] && (console[t[e]] = n[t[e]])
            })
        }
    }, 
    // get config  参考：https://docs.fundebug.com/notifier/javascript/customize/
    // 通过script的attribute 来获取相关设置详情。
    function (e, t, n) {
        "use strict";
        var r = function () {
            var e = document.currentScript;
            if (!e) {
                var t = document['scripts'];
                e = t[t.length - 1]
            }
            return e
        }();
        t.getConfig = function () {
            var e = {};
            return e.silent = r.getAttribute("silent") || !1,
                 "false" === e.silent && (e.silent = !1), 
                e.maxEventNumber =  r.getAttribute("maxeventnumber") || 10, 
                e.setHttpBody = r.getAttribute("setHttpBody")  || !1,
                false === e.setHttpBody && (e.setHttpBody = ! 1),
                e.silentResource = r.getAttribute("silentResource") || !1, 
                "false" === e.silentResource && (e.silentResource = !1),
                e.silentWebsocket = r.getAttribute("silentWebsocket") || !1,
                "false" === e.silentWebsocket && (e.silentWebsocket = ! 1),
                e.silentHttp = r.getAttribute("silentHttp") ||!1,
                "false" === e.silentHttp && (e.silentHttp = !1), 
                e.silentConsole = r.getAttribute( "silentConsole")|| !1,
                "false" === e.silentConsole && (e.silentConsole = !1),
                e.sampleRate = r.getAttribute("sampleRate"),
                e.silentBehavior = r.getAttribute("silentBehavior") || !1,
                "false" === e.silentBehavior && (e.silentBehavior = !1),
                e.silentPerformance = r.getAttribute("silentPerformance")|| !1,
                "false" === e.silentPerformance && (e.silentPerformance = ! 1),
                e.silentDev = r.getAttribute("silentDev") || !1,
                "false" === e.silentDev && (e.silentDev = !1),
                e.apikey = r.getAttribute("apikey"),
                e.appversion = r.getAttribute("appversion"), 
                e.releasestage = r.getAttribute("releasestage"),
                e
        }
    }, 
    //用户行为存储 最多20
    function (e, t, n) {
        "use strict";
        var r = [],
            o = 0;
        t.addBreadcrumb = function (e, t) {
            t || (r[o] = e, 20 == ++o && (o = 0))
        }, t.getBreadcrumbs = function () {
            return r
        }
    }
])
});