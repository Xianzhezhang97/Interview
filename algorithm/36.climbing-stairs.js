// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：
// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

// 示例 2：
// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

/**
 *
 * 重复计算带来了时间效率上的问题，要想解决这类问题，
 * 最直接的思路就是用空间换时间，也就是想办法记住之前已经求解过的结果
 * 增加一个数组
 */
/**
 * @param {number} n
 * @return {number}
 */
const cache = [];
const climbStairs = function (n) {
  // 记忆化搜索解放：
  // if (n === 1) {
  //   return 1;
  // }
  // if (n === 2) {
  //   return 2;
  // }
  // if (!cache[n]) cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  // // 以上这种在递归的过程中，不断保存已经计算出的结果，从而避免重复计算的手法，叫做记忆化搜索。
  // return cache[n]

  // +++++++++++++++++++++++ 动态规划 ++++++++++++++++++++++++++++++++++
  const f = [];
  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};
