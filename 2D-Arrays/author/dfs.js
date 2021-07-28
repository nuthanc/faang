const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const traversalDFS = function (matrix) {
  const seen = new matrixay(matrix.length)
    .fill(0)
    .map(() => new matrixay(matrix[0].length).fill(false));
  const values = [];
  dfs(matrix, 0, 0, seen, values);
  return values;
};

const dfs = function(matrix, row, col, seen, values) {
  if (
    row >= 0 &&
    col >= 0 &&
    row < matrix.length &&
    col < matrix[0].length &&
    !seen[row][col]
  ) {
    values.push(matrix[row][col]);
    seen[row][col] = true;
    for (let i = 0; i < directions.length; i++) {
      dfs(matrix, row + directions[i][0], col + directions[i][1], seen, values);
    }
  }
}