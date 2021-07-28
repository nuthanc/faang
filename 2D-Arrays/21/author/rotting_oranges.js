const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var orangesRotting = function (grid) {
  if (grid.length === 0) return 0;
  q = [];
  fresh_count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) q.push([row, col]);
      else if (grid[row][col] === 1) fresh_count++;
    }
  }

  minutes = 0;
  while (q.length > 0) {
    qlen = q.length;
    while (qlen > 0) {
      const [row, col] = q.shift();
      qlen--;
      for (const direction of directions) {
        const newRow = row + direction[0];
        const newCol = col + direction[1];
        if (
          newRow < 0 ||
          newRow >= grid.length ||
          newCol < 0 ||
          newCol >= grid[0].length
        )
          continue;
        if (grid[newRow][newCol] === 1) {
          grid[newRow][newCol] = 2;
          fresh_count--;
          q.push([newRow, newCol]);
        }
      }
    }
    if (q.length > 0) minutes++;
  }
  return fresh_count > 0 ? -1 : minutes;
};
