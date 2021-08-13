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
  [1, -2]
]

var knightProbability = function (n, k, row, column) {
  if (row < 0 || row >= n || column < 0 || column >=n) return 0;
  if (k === 0) return 1;
  let res = 0;
  for (const direction of directions) {
    res += knightProbability(n, k-1, row + direction[0], column + direction[1])/8;
  }
  return res;
};
