/*
 * @Author: your name
 * @Date: 2019-12-31 14:21:13
 * @LastEditTime : 2019-12-31 15:11:53
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
var isMatch = function(s: String, p: string): boolean {
  if (!s && !p) {
    return false;
  }
  debugger
  let arrs = s.split("");
  let arrp = p.split("");
  var charts = ["*", "."];
  let strMatch=arrp.every(item => !((charts).indexOf(item)!==-1))
  if (strMatch) {
    return s.indexOf(p) !== -1;
  } else {
    let i = 0,
      j = 0,
      flag = false;
    for (const key in arrs) {
      if (
        arrp[j] === "." ||
        (arrp[j] === "*" && arrs[i] == arrs[i - 1]) ||
        arrs[i] == arrp[j]
      ) {
        i++;
        j++;
        flag = true;
      } else if (arrs[i] !== arrp[j]) {
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
var s = "mississippi",
  p = "mis*is*p*.";
console.log(isMatch(s, p));
