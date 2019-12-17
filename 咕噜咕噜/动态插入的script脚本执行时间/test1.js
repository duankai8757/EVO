/*
 * @Author: your name
 * @Date: 2019-12-17 18:29:11
 * @LastEditTime: 2019-12-17 19:01:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\咕噜咕噜\动态插入的script脚本执行时间\test1.js
 */
console.log("TCL: test111111111");
(function(t) {
  function n(n) {
    for (
      var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
      f < l.length;
      f++
    )
      (c = l[f]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
        (o[c] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
    u && u(n);
    while (p.length) p.shift()();
    return i.push.apply(i, a || []), e();
  }
  function e() {
    for (var t, n = 0; n < i.length; n++) {
      for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
        var s = e[l];
        0 !== o[s] && (r = !1);
      }
      r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
    }
    return t;
  }
  var r = {},
    o = { action: 0 },
    i = [];
  function c(n) {
    if (r[n]) return r[n].exports;
    var e = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
  }
  (c.m = t),
    (c.c = r),
    (c.d = function(t, n, e) {
      c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
    }),
    (c.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function(t, n) {
      if ((1 & n && (t = c(t)), 8 & n)) return t;
      if (4 & n && "object" === typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (c.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var r in t)
          c.d(
            e,
            r,
            function(n) {
              return t[n];
            }.bind(null, r)
          );
      return e;
    }),
    (c.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return c.d(n, "a", n), n;
    }),
    (c.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = n), (l = l.slice());
  for (var a = 0; a < l.length; a++) n(l[a]);
  var u = s;
  i.push([75, "chunk-vendors"]), e();
})({
  "404f": function(t, n, e) {},
  "51b5": function(t, n, e) {},
  75: function(t, n, e) {
    t.exports = e("7e7b");
  },
  "7e7b": function(t, n, e) {
    "use strict";
    e.r(n);
    e("cadf"), e("551c"), e("f751"), e("097d");
    var r = e("2b0e"),
      o =
        (e("404f"),
        function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e("div", { staticClass: "rule_action" }, [
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
              )
            ]),
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
              )
            ]),
            e(
              "ul",
              { staticClass: "rule_action_list" },
              t._l(t.list, function(n, r) {
                return e("li", { key: r, staticClass: "rule_action_li" }, [
                  e("span", { staticClass: "rule_action_tit" }, [
                    t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                  ]),
                  t._v(t._s(n.cnt) + "\n    ")
                ]);
              }),
              0
            ),
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
              )
            ]),
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
              )
            ])
          ]);
        }),
      i = [],
      c = {
        name: "frozen",
        data: function() {
          return {
            list: [
              {
                tit: "头像、昵称、简介",
                cnt:
                  "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
              },
              { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
              { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
              {
                tit: "辱骂/引战",
                cnt:
                  "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
              },
              {
                tit: "推广/广告",
                cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
              },
              {
                tit: "刷采纳/刷分/刷赞",
                cnt: "发布大量求采纳、求赞、求关注等；"
              },
              {
                tit: "灌水/低俗",
                cnt:
                  "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
              },
              {
                tit: "恋爱/泛娱乐",
                cnt:
                  "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
              },
              {
                tit: "抄袭/盗用",
                cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
              },
              {
                tit: "模仿/盗用管理员ID",
                cnt: "冒充作业帮平台官方人员或管理员等；"
              },
              {
                tit: "模仿/盗用他人ID",
                cnt: "冒充作业帮用户/明星的ID、头像等；"
              },
              { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
              { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
              {
                tit: "恶意删除",
                cnt:
                  "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
              },
              {
                tit: "其他",
                cnt:
                  "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
              }
            ]
          };
        }
      },
      l = c,
      s = (e("dc30"), e("2877")),
      a = Object(s["a"])(l, o, i, !1, null, null, null),
      u = a.exports;
    e("ddb8");
    (r["default"].config.productionTip = !1),
      new r["default"]({
        render: function(t) {
          return t(u);
        }
      }).$mount("#app");
  },
  dc30: function(t, n, e) {
    "use strict";
    var r = e("51b5"),
      o = e.n(r);
    o.a;
  },
  ddb8: function(t, n, e) {
    "use strict";
    var r = e("9483");
    Object(r["a"])("./service-worker.js", {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(t) {
        console.error("Error during service worker registration:", t);
      }
    });
  }
});
(function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });
  
  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

(function(t) {
  function n(n) {
    for (
      var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
      f < l.length;
      f++
    )
      (c = l[f]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
        (o[c] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
    u && u(n);
    while (p.length) p.shift()();
    return i.push.apply(i, a || []), e();
  }
  function e() {
    for (var t, n = 0; n < i.length; n++) {
      for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
        var s = e[l];
        0 !== o[s] && (r = !1);
      }
      r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
    }
    return t;
  }
  var r = {},
    o = { action: 0 },
    i = [];
  function c(n) {
    if (r[n]) return r[n].exports;
    var e = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
  }
  (c.m = t),
    (c.c = r),
    (c.d = function(t, n, e) {
      c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
    }),
    (c.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function(t, n) {
      if ((1 & n && (t = c(t)), 8 & n)) return t;
      if (4 & n && "object" === typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (c.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var r in t)
          c.d(
            e,
            r,
            function(n) {
              return t[n];
            }.bind(null, r)
          );
      return e;
    }),
    (c.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return c.d(n, "a", n), n;
    }),
    (c.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = n), (l = l.slice());
  for (var a = 0; a < l.length; a++) n(l[a]);
  var u = s;
  i.push([75, "chunk-vendors"]), e();
})({
  "404f": function(t, n, e) {},
  "51b5": function(t, n, e) {},
  75: function(t, n, e) {
    t.exports = e("7e7b");
  },
  "7e7b": function(t, n, e) {
    "use strict";
    e.r(n);
    e("cadf"), e("551c"), e("f751"), e("097d");
    var r = e("2b0e"),
      o =
        (e("404f"),
        function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e("div", { staticClass: "rule_action" }, [
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
              )
            ]),
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
              )
            ]),
            e(
              "ul",
              { staticClass: "rule_action_list" },
              t._l(t.list, function(n, r) {
                return e("li", { key: r, staticClass: "rule_action_li" }, [
                  e("span", { staticClass: "rule_action_tit" }, [
                    t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                  ]),
                  t._v(t._s(n.cnt) + "\n    ")
                ]);
              }),
              0
            ),
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
              )
            ]),
            e("p", { staticClass: "rule_action_cnt" }, [
              t._v(
                "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
              )
            ])
          ]);
        }),
      i = [],
      c = {
        name: "frozen",
        data: function() {
          return {
            list: [
              {
                tit: "头像、昵称、简介",
                cnt:
                  "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
              },
              { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
              { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
              {
                tit: "辱骂/引战",
                cnt:
                  "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
              },
              {
                tit: "推广/广告",
                cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
              },
              {
                tit: "刷采纳/刷分/刷赞",
                cnt: "发布大量求采纳、求赞、求关注等；"
              },
              {
                tit: "灌水/低俗",
                cnt:
                  "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
              },
              {
                tit: "恋爱/泛娱乐",
                cnt:
                  "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
              },
              {
                tit: "抄袭/盗用",
                cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
              },
              {
                tit: "模仿/盗用管理员ID",
                cnt: "冒充作业帮平台官方人员或管理员等；"
              },
              {
                tit: "模仿/盗用他人ID",
                cnt: "冒充作业帮用户/明星的ID、头像等；"
              },
              { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
              { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
              {
                tit: "恶意删除",
                cnt:
                  "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
              },
              {
                tit: "其他",
                cnt:
                  "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
              }
            ]
          };
        }
      },
      l = c,
      s = (e("dc30"), e("2877")),
      a = Object(s["a"])(l, o, i, !1, null, null, null),
      u = a.exports;
    e("ddb8");
    (r["default"].config.productionTip = !1),
      new r["default"]({
        render: function(t) {
          return t(u);
        }
      }).$mount("#app");
  },
  dc30: function(t, n, e) {
    "use strict";
    var r = e("51b5"),
      o = e.n(r);
    o.a;
  },
  ddb8: function(t, n, e) {
    "use strict";
    var r = e("9483");
    Object(r["a"])("./service-worker.js", {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(t) {
        console.error("Error during service worker registration:", t);
      }
    });
  }
});

(function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });

  (function(t) {
    function n(n) {
      for (
        var r, c, l = n[0], s = n[1], a = n[2], f = 0, p = [];
        f < l.length;
        f++
      )
        (c = l[f]),
          Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
          (o[c] = 0);
      for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
      u && u(n);
      while (p.length) p.shift()();
      return i.push.apply(i, a || []), e();
    }
    function e() {
      for (var t, n = 0; n < i.length; n++) {
        for (var e = i[n], r = !0, l = 1; l < e.length; l++) {
          var s = e[l];
          0 !== o[s] && (r = !1);
        }
        r && (i.splice(n--, 1), (t = c((c.s = e[0]))));
      }
      return t;
    }
    var r = {},
      o = { action: 0 },
      i = [];
    function c(n) {
      if (r[n]) return r[n].exports;
      var e = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, c), (e.l = !0), e.exports;
    }
    (c.m = t),
      (c.c = r),
      (c.d = function(t, n, e) {
        c.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (c.r = function(t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (c.t = function(t, n) {
        if ((1 & n && (t = c(t)), 8 & n)) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (c.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var r in t)
            c.d(
              e,
              r,
              function(n) {
                return t[n];
              }.bind(null, r)
            );
        return e;
      }),
      (c.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t["default"];
              }
            : function() {
                return t;
              };
        return c.d(n, "a", n), n;
      }),
      (c.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (c.p = "https://plat-h5.cdnjtzy.com/plat/app/");
    var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
      s = l.push.bind(l);
    (l.push = n), (l = l.slice());
    for (var a = 0; a < l.length; a++) n(l[a]);
    var u = s;
    i.push([75, "chunk-vendors"]), e();
  })({
    "404f": function(t, n, e) {},
    "51b5": function(t, n, e) {},
    75: function(t, n, e) {
      t.exports = e("7e7b");
    },
    "7e7b": function(t, n, e) {
      "use strict";
      e.r(n);
      e("cadf"), e("551c"), e("f751"), e("097d");
      var r = e("2b0e"),
        o =
          (e("404f"),
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n;
            return e("div", { staticClass: "rule_action" }, [
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "作业帮有专门的审核团队对你使用作业帮的行为进行监督和审核，用户也可通过举报的方式对使用过程中发现的不良内容进行举报。一旦发现作弊及违反作业帮规定的行为，我们将对违规用户进行处理，包括但不限于禁止修改个人资料、禁止发言、禁止登录等，视情形严重情况处以不同类型和不同期限的处理哦。"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "各位同学应保证你注册、登录并使用的账号符合中国相关法律法规的规定，符合《互联网用户账号名称管理规定》，符合作业帮用户行为规范。常见的违规内容包括但不限于以下方面，请各位同学不要在危险的边缘试探哟，小心被关小黑屋！"
                )
              ]),
              e(
                "ul",
                { staticClass: "rule_action_list" },
                t._l(t.list, function(n, r) {
                  return e("li", { key: r, staticClass: "rule_action_li" }, [
                    e("span", { staticClass: "rule_action_tit" }, [
                      t._v(t._s(r + 1) + "、" + t._s(n.tit) + "：")
                    ]),
                    t._v(t._s(n.cnt) + "\n    ")
                  ]);
                }),
                0
              ),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "如果你的账号被限制使用了，请对应以上类型，查查是否有相关违规行为，记得改正哦～"
                )
              ]),
              e("p", { staticClass: "rule_action_cnt" }, [
                t._v(
                  "请各位同学一起遵守相关规范，做遵纪守法的好同学，在作业帮好好学习、天天向上～"
                )
              ])
            ]);
          }),
        i = [],
        c = {
          name: "frozen",
          data: function() {
            return {
              list: [
                {
                  tit: "头像、昵称、简介",
                  cnt:
                    "出现违法不良信息，以虚假信息骗取账号名称注册、冒用关联机构和社会名人注册；"
                },
                { tit: "违法内容", cnt: "违反国家相关法律法规的内容；" },
                { tit: "诈骗/赌博", cnt: "发布赌博类、诈骗类信息及相关链接；" },
                {
                  tit: "辱骂/引战",
                  cnt:
                    "发布恶意言论对个人或群体谩骂侮辱、无端嘲讽、故意挑拨他人发生矛盾；"
                },
                {
                  tit: "推广/广告",
                  cnt: "发布内容涉及广告、邀请码、链接或其它第三方引流行为；"
                },
                {
                  tit: "刷采纳/刷分/刷赞",
                  cnt: "发布大量求采纳、求赞、求关注等；"
                },
                {
                  tit: "灌水/低俗",
                  cnt:
                    "发布大量无意义的相同或相似内容、发布内容包含有严重影响他人浏览的内容和格式等；"
                },
                {
                  tit: "恋爱/泛娱乐",
                  cnt:
                    "发布及讨论涉及早恋、耽美、游戏等不适合青少年学生讨论的内容等；"
                },
                {
                  tit: "抄袭/盗用",
                  cnt: "未获得他人授权、抄袭他人文章或复制他人回答等；"
                },
                {
                  tit: "模仿/盗用管理员ID",
                  cnt: "冒充作业帮平台官方人员或管理员等；"
                },
                {
                  tit: "模仿/盗用他人ID",
                  cnt: "冒充作业帮用户/明星的ID、头像等；"
                },
                { tit: "疑似被盗", cnt: "帐号多次在异地登录，有被盗可能等；" },
                { tit: "恶意举报", cnt: "大量举报他人正常信息、发言等；" },
                {
                  tit: "恶意删除",
                  cnt:
                    "删除大量已有评论的提问或发帖内容，对其他用户造成严重影响等；"
                },
                {
                  tit: "其他",
                  cnt:
                    "存在其他违法法律，扰乱作业帮秩序的或影响作业帮一课正常经营行为等。"
                }
              ]
            };
          }
        },
        l = c,
        s = (e("dc30"), e("2877")),
        a = Object(s["a"])(l, o, i, !1, null, null, null),
        u = a.exports;
      e("ddb8");
      (r["default"].config.productionTip = !1),
        new r["default"]({
          render: function(t) {
            return t(u);
          }
        }).$mount("#app");
    },
    dc30: function(t, n, e) {
      "use strict";
      var r = e("51b5"),
        o = e.n(r);
      o.a;
    },
    ddb8: function(t, n, e) {
      "use strict";
      var r = e("9483");
      Object(r["a"])("./service-worker.js", {
        ready: function() {
          console.log(
            "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
          );
        },
        registered: function() {
          console.log("Service worker has been registered.");
        },
        cached: function() {
          console.log("Content has been cached for offline use.");
        },
        updatefound: function() {
          console.log("New content is downloading.");
        },
        updated: function() {
          console.log("New content is available; please refresh.");
        },
        offline: function() {
          console.log(
            "No internet connection found. App is running in offline mode."
          );
        },
        error: function(t) {
          console.error("Error during service worker registration:", t);
        }
      });
    }
  });
  
