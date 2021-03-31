/*
剑指 Offer 48. 最长不含重复字符的子字符串
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

提示：

s.length <= 40000

https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
*/ 

// 解法一:滑动窗口 + 哈希表
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let i = -1
  let max = 0
  let map = new Map()

  for(let j = 0; j < s.length; j++) {
      // j 位置之前已经出现过一次该字符
      if(map.has(s[j])) {
          // 更新滑动窗口的左指针
          i = Math.max(i, map.get(s[j]))
      }

      map.set(s[j], j) // 更新当前字符的位置

      max = Math.max(max, j-i)
  }

  return max
};
