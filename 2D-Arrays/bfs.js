const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const bfs = function (matrix, row, col, seen) {
  const values = [];
  const q = [];
  q.push([row, col]);
  while (q.length > 0) {
    [row, col] = q.shift();
    if (!seen[row][col]) {
      values.push(matrix[row][col]);
      seen[row][col] = true;
      for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        const newRow = row + direction[0];
        const newCol = col + direction[1];
        if (
          newRow >= 0 &&
          newRow < matrix.length &&
          newCol >= 0 &&
          newCol < matrix[0].length &&
          !seen[newRow][newCol]
        ) {
          q.push([newRow, newCol]);
        }
      }
    }
  }
  return values;
};

matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

seen = new Array(matrix.length)
  .fill(false)
  .map(() => new Array(matrix[0].length).fill(false));

console.log(bfs(matrix, 2, 2, seen));
