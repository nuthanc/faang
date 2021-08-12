/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) { 
  const n = cost.length;
  if (n === 0) return 0;
  if (n <= 2) return Math.min(...cost); // All these are extra steps, check Author's
  cost.push(0);
  const mc = [cost[0], cost[1]];
  for (let i = 2; i <= n; i++) {
    mc[i] = cost[i] + Math.min(mc[i - 1], mc[i - 2]);
  }
  return mc[n];
};
