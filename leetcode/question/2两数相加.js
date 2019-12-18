/*
 * @Author: your name
 * @Date: 2019-12-16 20:43:16
 * @LastEditTime: 2019-12-16 22:50:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\leetcode\2两数相加.js
 */
let { getListFromArray } = require("./utils");
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    curr = dummyHead;
  let carry = 0;
  while (p != null || q != null) {
    let x = p != null ? p.val : 0;
    let y = q != null ? q.val : 0;
    let sum = carry + x + y;
    carry = parseInt( sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
};

var l1 = getListFromArray([1, 2, 3]);
var l2 = getListFromArray([3]);
console.log(addTwoNumbers(l1, l2));
