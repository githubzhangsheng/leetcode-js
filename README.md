# leetcode-js

LeetCode 刷题指南（JavaScript 版）

数据结构与算法的学习没有捷径，只有日积月累、水滴石穿，当然还要配合正确的学习方法，提高效率。

## 数据结构

首先需要了解常用的数据结构，这里从二叉树开始，二叉树的数据结构比一般的结构要稍微复杂些，也是大厂最喜欢考的数据结构的类型。
先学会二叉树性价比比较高。

### 二叉树

### 二叉树的三种遍历方式

- 前序遍历（根、左、右）
- 中序遍历（左、根、右）
- 后序遍历（左、右、根）

常见的方法使用递归的方式来求解，代码简单而且易于理解。
当掌握了递归的方式来遍历二叉树后，一些面试官会要求给出迭代遍历二叉树的算法（⭐️）。
在二叉树的迭代遍历算法中，一般可以借助栈来记住遍历过的节点，其中的难点是二叉树后序遍历的时候一些节点会出现二次遍历的情况，此时需要判断该节点是否已经被遍历过。

[二叉树前序遍历](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/001%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86/%E4%B8%AD%E7%AD%89-%E4%BA%8C%E5%8F%89%E6%A0%91%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86.js)

[二叉树中序遍历](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/001%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86/%E4%B8%AD%E7%AD%89-%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86.js)

[二叉树后序遍历](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/001%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86/%E4%B8%AD%E7%AD%89-%E4%BA%8C%E5%8F%89%E6%A0%91%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86.js)

### 对称的二叉树

首先先学习如何判断两个二叉树是否相等：

[判断两棵树是否相同](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/002%E5%AF%B9%E7%A7%B0%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91/%E7%AE%80%E5%8D%95-%E7%9B%B8%E5%90%8C%E7%9A%84%E6%A0%91.js)

利用判断两棵树是否相等的算法（类似），以此延伸出判断 B 树是否是 A 树的子结构（⭐️）

[树的子结构]()

判断一棵二叉树是不是对称的，我们可以把树的两个子节点看成两棵树，来作比较。

[判断一棵树是不是对称的](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/002%E5%AF%B9%E7%A7%B0%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91/%E7%AE%80%E5%8D%95-%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.js)

既然能判断一棵二叉树是不是对称的，那输出二叉树的镜像也不是什么难题了，Homebrew 的作者曾在 Google 面试中因写不出这道题而被拒绝（未经考证），但是题目不难，大家可以试试。

[翻转二叉树/二叉树的镜像](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/002%E5%AF%B9%E7%A7%B0%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91/%E7%AE%80%E5%8D%95-%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.js)

### 二叉树的层序遍历

通过以上的题目，我们大体可以了解到，数据结构和算法的题目大都是从一个基本算法不断开始延伸的，这是一个循序渐进的过程。
在这其中二叉树的层序遍历可以形成一个系列，把层序遍历的考察玩出花。

从上到下，从左至右的层序遍历二叉树，把值放在一个数组里，借助一个队列就可以解决：

[从上到下打印二叉树 I](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/003%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86/%E4%B8%AD%E7%AD%89-%E4%BB%8E%E4%B8%8A%E5%88%B0%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%911.js)

仍然是从上到下，从左至右，但是同一层的节点的值要放在一个子数组里，定义两个队列，一个队列记录当前层的节点，一个队列记录下一层的节点即可解决：

[从上到下打印二叉树 II](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/003%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86/%E4%B8%AD%E7%AD%89-%E4%BB%8E%E4%B8%8A%E5%88%B0%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%912.js)

之字形打印二叉树，记录当前是奇数层还是偶数层，如果是偶数层则把结果翻转。也可以借助栈的特性，用两个栈来解决，不过相对来说就麻烦多了。

[从上到下打印二叉树 III](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/003%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86/%E4%B8%AD%E7%AD%89-%E4%BB%8E%E4%B8%8A%E5%88%B0%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%913.js)

自底向上的层序遍历，从左至右遍历（可以说出题者是相当无聊了）,讨巧一点，我们可以把（从上到下打印二叉树 II）的结果反转一下，或者在每次添加结果的时候，都从头插入(unshift)，而不是从尾部插入(push)。

[从上到下打印二叉树 IV](https://github.com/zuckstar/leetcode-js/blob/main/%E6%A0%91%E4%B8%8E%E5%9B%BE/003%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86/%E4%B8%AD%E7%AD%89-%E4%BB%8E%E4%B8%8A%E5%88%B0%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%914.js)

### 二叉树的深度

给定一棵二叉树，要能求出它的高度（深度）

[二叉树最大深度/二叉树的深度]

最小深度是从根节点到最近叶子节点的最短路径上的节点数量（⭐️）

[二叉树的最小深度]

[平衡二叉树]

### 二叉树的路径

判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum

[路径总和]()

找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

[路径总和 II]()

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）

[路径总和 III]()

### 二叉搜索树

[验证二叉搜索树]()（⭐️）

[将有序数组转为二叉搜索树]()

[二叉搜索树的第 K 大节点]()

### 二叉树的公共祖先

[二叉树的最近公共祖先]()

注意利用二叉搜索树值的特性
[二叉搜索树的最近公共祖先]()

## 数组

[是否存在重复元素/查找数组中的重复元素]()

1. 二分法
2. 哈希法
3. 下标交换法 （⭐️）

### 双指针

[盛最多水的容器]()
[三数之和]()

## 链表

递归+迭代法
[反转链表]()

除了传统的双指针法，别忘了还可以了用 WeakSet 这些数据结构来解决问题
[环形链表]()

找到环形链表的入口节点
[环形链表 2]()

[回文链表]()

[相交链表]()

[旋转链表]()

[特定深度节点链表]()

## 动态规划

[爬楼梯]()

[最小花费爬楼梯]()

[青蛙跳]()

[丑数/第 k 个数]()
