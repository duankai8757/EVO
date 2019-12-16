/*
 * @Author: your name
 * @Date: 2019-12-16 21:23:46
 * @LastEditTime: 2019-12-16 22:45:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\leetcode\utils.js
 */
/**
 * 链表节点
 * @param {*} val
 * @param {ListNode} next
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
/**
 * 将一个数组转为链表
 * @param {array} a
 * @return {ListNode}
 */
const getListFromArray = a => {
  let dummy = new ListNode();
  let pre = dummy;
  a.forEach(x => {
    pre = pre.next = new ListNode(x);
    return pre;
  });
  return dummy.next;
};
/**
 * 将一个链表转为数组
 * @param {ListNode} node
 * @return {array}
 */
const getArrayFromList = node => {
  let a = [];
  while (node) {
    a.push(node.val);
    node = node.next;
  }
  return a;
};
/**
 * 打印一个链表
 * @param {ListNode} node
 */
const logList = node => {
  let str = "list: ";
  while (node) {
    str += node.val + "->";
    node = node.next;
  }
  str += "end";
  log(str);
};
module.exports = { getListFromArray, getArrayFromList, logList };
