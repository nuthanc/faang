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
  if (row < 0 || row >= n || column < 0 || column >= n || n == 0) return 0;
  if (k === 0) return 1;
  const grid = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
  grid[0][row][column] = 1;
  for (let itr = 0; itr < k; itr++) {
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[itr][r][c] > 0) {
          for (const direction of directions) {
            const newRow = r + direction[0];
            const newCol = c + direction[1];
            if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n) {
              continue;
            }
            grid[itr + 1][newRow][newCol] =
              grid[itr + 1][newRow][newCol] + (grid[itr][r][c] / 8);
          }
        }
      }
    }
  }
  let sum = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      sum += grid[k][r][c];
    }
  }
  return sum;
};
