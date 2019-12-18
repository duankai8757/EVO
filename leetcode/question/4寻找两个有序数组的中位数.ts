/*
 * @Author: your name
 * @Date: 2019-12-18 10:55:09
 * @LastEditTime: 2019-12-18 11:19:06
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
var findMedianSortedArrays = function(
  nums1: number[],
  nums2: number[]
): number {
  let nums = [...nums1, ...nums2];
  console.log(nums);
  debugger;
  let mid1 =
    nums.length & 1
      ? nums[(nums.length + 1) / 2]
      : (nums[nums1.length / 2] + nums[nums1.length / 2 - 1]) / 2;
  return mid1;
};

let nums1 = [1, 3];
let nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2));
