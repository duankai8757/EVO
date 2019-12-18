/*
 * @Author: your name
 * @Date: 2019-12-16 21:23:46
 * @LastEditTime: 2019-12-18 11:04:06
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

const _max = Math.max.bind(Math); //求最大
const _min = Math.min.bind(Math); //求最小
const _pow = Math.pow.bind(Math); // Math.pow(base, exponent)  基数（base）的指数（exponent）次幂
const _floor = Math.floor.bind(Math); //向下取整
const _round = Math.round.bind(Math); //四舍五入
const _ceil = Math.ceil.bind(Math); //向上取整
const log = console.log.bind(console); //log

// 判断一个整数 x 的奇偶性： x & 1 = 1  (奇数) ，  x & 1 = 0  (偶数)
// 求一个浮点数 x 的整数部分： ~~x ，对于正数相当于  floor(x)  对于负数相当于  ceil(-x)
// 计算  2 ^ n ： 1 << n  相当于  pow(2, n)
// 计算一个数 x 除以 2 的 n 倍： x >> n  相当于  ~~(x / pow(2, n)) 
// 判断一个数 x 是 2 的整数幂（即  x = 2 ^ n ）:  x & (x - 1) = 0
module.exports = { getListFromArray, getArrayFromList, logList };
