/*
剑指 Offer 62. 圆圈中最后剩下的数字
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

示例 1：

输入: n = 5, m = 3
输出: 3
示例 2：

输入: n = 10, m = 17
输出: 2
 

限制：

1 <= n <= 10^5
1 <= m <= 10^6

https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
*/ 

// 解法一：循环链表，建立循环链表，逐个遍历删除，剩下的节点就是结果。但是 n 很大的时候，时间空间复杂度高

// 解法二：动态规划（约瑟夫环问题）
/*
当 n = 1 的时候，剩下的数字的下标一定为 0
当 n = 2 的时候，向 0 的前面补 m 个数字，如果 m > n 需要取余 % n, 得到的下标是存活的数字的下标
当 n = 3 的时候， f(3) = (f(2)+m)%n
...以此类推，求得 n 的时候，存活数字的下标
*/ 


/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
 var lastRemaining = function(n, m) {
  let res = 0
  for(let i = 1; i <= n; i++) {
      res = (res + m) % i
  }
  return res
};
