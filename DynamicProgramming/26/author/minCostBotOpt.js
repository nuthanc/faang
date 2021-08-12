/*
Recurrence relation:

minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];

*/

const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[0];
  let dpOne = cost[0];
  let dpTwo = cost[1];
  for (let i = 2; i < n; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }

  return Math.min(dpOne, dpTwo);
};

console.log(minCostClimbingStairs([20, 15]));