/*
 * @Author: your name
 * @Date: 2019-12-16 20:25:09
 * @LastEditTime: 2019-12-16 21:05:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\leetcode\2两数相加.ts
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
interface OneNode {
  val: number;
  next: any;
}
/**
 * @description:
 * @param {type}
 * @return:
 */
var addTwoNumbers = function (l1: any, l2: any): OneNode {
  const result = new OneNode(null);
  let res = 0;
  let jin = 0;

  while (l1.next || l2.next) {
    res = (l1.val + l2.val  + jin) % 10;
    jin = (l1.val || 0 + l2.val || 0) / 10;
    result.val = res;
    result = result.next;
  }
  return result;
};
let l1 = [0, 1];
let l2 = [0, 1, 2];
console.log(addTwoNumbers(l1, l2));
