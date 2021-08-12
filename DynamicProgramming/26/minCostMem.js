/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const mc = new Array(n).fill(Infinity);
  return Math.min(minCost(n - 1, cost, mc), minCost(n - 2, cost, mc));
};

var minCost = function (i, cost, mc) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];

  if (mc[i] != Infinity) return mc[i];
  else {
    mc[i] =
      cost[i] + Math.min(minCost(i - 1, cost, mc), minCost(i - 2, cost, mc));
    return mc[i];
  }
};
