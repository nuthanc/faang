const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

var numIslands = function (grid) {
  if (grid.length === 0) return 0;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        convertOldIslands(i, j, grid);
      }
    }
  }
  return count;
};

var convertOldIslands = function (i, j, grid) {
  const q = [[i, j]];
  grid[i][j] = '0';
  while (q.length > 0) {
    [i, j] = q.shift();
    for (let d = 0; d < directions.length; d++) {
      const currentDirection = directions[d];
      const nextRow = i + currentDirection[0];
      const nextCol = j + currentDirection[1];
      if (
        nextRow < 0 ||
        nextRow >= grid.length ||
        nextCol < 0 ||
        nextCol >= grid[0].length
      )
        continue;
      if (grid[nextRow][nextCol] === '1') {
        q.push([nextRow, nextCol]);
        grid[nextRow][nextCol] = '0';
      }
    }
  }
};
