/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = [];
  return Math.min(minCost(n - 1, cost, dp), minCost(n - 2, cost, dp));
};

var minCost = function (i, cost, dp) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];

  if (dp[i] !== undefined) return dp[i];
  // With python, the above condition is not possible as we get index out of range, so need to fill with Inf or other values
  dp[i] =
    cost[i] + Math.min(minCost(i - 1, cost, dp), minCost(i - 2, cost, dp));
  return dp[i];
};
