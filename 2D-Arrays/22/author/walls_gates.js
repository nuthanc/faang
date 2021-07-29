const INF = 2147483647;
const GATE = 0;
const WALL = -1;

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const shortest_path = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === GATE) {
        dfs(matrix, row, col, 1);
      }
    }
  }
  console.log(matrix);
};

const dfs = function (matrix, row, col, distance) {
  for (const direction of directions) {
    const nextRow = row + direction[0];
    const nextCol = col + direction[1];

    if (
      nextRow < 0 ||
      nextRow >= matrix.length ||
      nextCol < 0 ||
      nextCol >= matrix[0].length
    )
      continue;
    if (distance < matrix[nextRow][nextCol]) {
      matrix[nextRow][nextCol] = distance;
      dfs(matrix, nextRow, nextCol, distance + 1);
    }
  }
};

// const matrix = [
//   [INF, -1, 0, INF],
//   [INF, INF, INF, -1],
//   [INF, -1, INF, -1],
//   [0, -1, INF, INF],
// ];
const matrix = [
  [INF, -1, 0, INF],
  [-1, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];
shortest_path(matrix);