/*
剑指 Offer 57. 和为s的两个数字
输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
 

限制：

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6
https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
*/ 
// 思路：双指针
 var twoSum = function(nums, target) {
  let l = 0
  let r = nums.length

  while(l < r) {
      let first = nums[l]
      let last = nums[r]
      if(first + last === target) {
          return [first, last]
      } else if(first + last < target) {
          l++
      } else {
          r--
      }
  }
};
