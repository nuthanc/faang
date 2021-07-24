const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

var numIslands = function (grid) {
  let count = 0;
  const seen = new Array(grid.length)
    .fill(false)
    .map(() => new Array(grid[0].length).fill(false));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        convertOldIslands(i, j, grid, seen);
      }
    }
  }
  return count;
};

var convertOldIslands = function (i, j, grid, seen) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    seen[i][j] ||
    grid[i][j] == '0'
  )
    return;
  seen[i][j] = true;
  grid[i][j] = '0';
  for (let d = 0; d < directions.length; d++) {
    const currentDirection = directions[d];
    convertOldIslands(
      i + currentDirection[0],
      j + currentDirection[1],
      grid,
      seen
    );
  }
};
