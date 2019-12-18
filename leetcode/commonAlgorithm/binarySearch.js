/*
 * @Author: your name
 * @Date: 2019-12-18 14:35:32
 * @LastEditTime: 2019-12-18 15:54:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\leetcode\commonAlgorithm\binarySearch.js
 */
/**
 * @description: while循环方法
 * @param {arr: number[],key: number|string}
 * @return: number
 */
const binarySearch = function(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(arr.length / 2);
  while (start < end) {
    if (arr[mid] == key) {
      return mid;
    }
    if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((end + start) / 2);
  }
  return mid;
};

let arr = [1, 2, 3, 4, 5, 6, 16, 23, 45, 55, 79];
console.log(binarySearch(arr, 45));

/**
 * @description: 递归调用
 * @param {type}
 * @return:
 */
const binarySearch2 = function(arr, key, s, e) {
  let start = s || 0;
  let end = e || arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  } else {
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] > key) {
      return binarySearch2(arr, key, start, mid - 1);
    } else {
      return binarySearch2(arr, key, mid + 1, end);
    }
  }
};

console.log(binarySearch2(arr, 45));
