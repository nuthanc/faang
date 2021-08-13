/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */

const directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, -1],
  [2, 1],
  [-1, -2],
  [1, -2],
];

var knightProbability = function (n, k, row, column) {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));
  return recurse(n, k, row, column, dp);
};

var recurse = function (n, k, row, column, dp) {
  if (row < 0 || row >= n || column < 0 || column >= n) return 0;
  if (k === 0) return 1;
  if (dp[k][row][column] !== undefined) return dp[k][row][column];
  let res = 0;
  for (const direction of directions) {
    res += recurse(n, k - 1, row + direction[0], column + direction[1], dp) / 8;
  }
  dp[k][row][column] = res;
  return res;
};
