/* 输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。 */

//  对象记录当前 字符类型
//  数组记录当前 最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var curr = [];
  var len = 0;
  var arr = s.split("");
  arr.map(function(item) {
    let index = curr.indexOf(item);
    if (index !== -1) {
      curr.splice(0, index + 1);
    }
    curr.push(item);
    len = Math.max(curr.length, len);
  });
  return len;
};
var a = "b!ab";
console.log(lengthOfLongestSubstring(a));
