var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
/*
 * @Author: your name
 * @Date: 2019-12-18 10:55:09
 * @LastEditTime: 2019-12-18 11:52:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\leetcode\4寻找两个有序数组的中位数.ts
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var nums = sorttwoArr(nums1, nums2);
  var mid1 =
    nums.length & 1
      ? nums[(nums.length - 1) / 2]
      : (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  return mid1.toFixed(1);
};

var sorttwoArr = function(nums1, nums2) {
  let _res = [];
  let l1 = nums1.length;
  let l2 = nums2.length;
  let j = 0;
  let i = 0;
  while (i !== l1 && j !== l2) {
    if (nums1[i] < nums2[j]) {
      _res.push(nums1[i]);
      i++;
    } else {
      _res.push(nums2[j]);
      j++;
    }
  }
  if (i !== l1) {
    _res.push(...nums1.slice(i, l1));
  } else {
    _res.push(...nums2.slice(j, l2));
  }
  return _res;
};
var nums1 = [1, 3];
var nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
