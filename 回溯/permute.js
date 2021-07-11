/*

46. 全排列

给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/ 

var permute = function (nums) {
  let res = []
  let temp = nums.slice(0) // 可以不用push的方式，而是使用


  const permuteCal = (start, length) => {
      if(start >= length) {
          res.push(temp.slice(0))
          return true
      }

      for(let i = start; i < length; i++) {
          [temp[i], temp[start]] = [temp[start], temp[i]]
          permuteCal(start+1, length);
          [temp[start], temp[i]] = [temp[i], temp[start]]
      }
  }

  permuteCal(0, nums.length)
  return res
};