/* 输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。 */
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s: string): number {
  let total = {};
  let len = 0;
  let arr = s.split("");
  arr.map(item => {
    if (total[item]) {
      len = Object.keys(total).length > len ? Object.keys(total).length : len;
      total = {};
      total[item] = 1;
    } else {
      total[item] = 1;
    }
  });
  return len;
};
const a: string = "pwwkew";
console.log(lengthOfLongestSubstring(a));
