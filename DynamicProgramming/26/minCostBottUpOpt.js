/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let mTwo, mOne;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      mTwo = cost[i];
    } else if (i === 1){
      mOne = cost[i];
    }
    else {
      const dp = cost[i] + Math.min(mOne, mTwo);
      mTwo = mOne;
      mOne = dp;
    }
  }
  return Math.min(mTwo, mOne);
};
