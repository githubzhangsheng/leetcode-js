/*
  977. 有序数组的平方
  https://leetcode-cn.com/problems/squares-of-a-sorted-array/
  
  给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。


  示例 1：

  输入：[-4,-1,0,3,10]
  输出：[0,1,9,16,100]
  示例 2：

  输入：[-7,-3,2,3,11]
  输出：[4,9,9,49,121]

   

  提示：

  1 <= A.length <= 10000
  -10000 <= A[i] <= 10000
  A 已按非递减顺序排序。

*/

const eg1 = [-4, -1, 0, 3, 10]
const eg2 = [-7, -3, 2, 3, 11]
const log = console.log


/* 解法一： 常规解法，时间复杂度 O(nlogn) */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let res = A.map((v) => {
    return v * v;
  }).sort((a, b) => a - b)
  return res;
};
/* 解法二： 双指针，时间复杂度 O(n) */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let i = 0,
    j = A.length - 1,
    k = A.length - 1
  let res = []

  while (i <= j) {
    if (A[i] + A[j] < 0) {
      res[k--] = A[i] * A[i]
      i++
    } else {
      res[k--] = A[j] * A[j]
      j--
    }
  }
  return res

};





log(sortedSquares(eg2))
