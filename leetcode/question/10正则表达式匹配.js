/*
 * @Author: your name
 * @Date: 2019-12-31 14:21:13
 * @LastEditTime : 2019-12-31 15:11:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\leetcode\question\10正则表达式匹配.ts
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 说明:
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 */
var isMatch = function (s, p) {
    if (!s && !p) {
        return false;
    }
    var arrs = s.split("");
    var arrp = p.split("");
    var charts = ["*", "."];
    var strMatch = arrp.every(function (item) { return !((charts).indexOf(item) !== -1); });
    if (strMatch) {
        return s.indexOf(p) !== -1;
    }
    else {
        var i = 0, j = 0, flag = false;
        for (var key in arrs) {
            if (arrp[j] === "." ||
                (arrp[j] === "*" && arrs[i] == arrs[i - 1]) ||
                arrs[i] == arrp[j]) {
                i++;
                j++;
                flag = true;
            }
            else if (arrs[i] !== arrp[j]) {
                i++;
                flag = false;
                j = 0;
            }
            if (j === arrp.length - 1) {
                return true;
            }
        }
    }
};
var s = "mississippi", p = "mis*is*p*.";
console.log(isMatch(s, p));
