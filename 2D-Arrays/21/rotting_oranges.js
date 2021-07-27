const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var orangesRotting = function (grid) {
  if (grid.length === 0) return 0;
  const cost_matrix = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(0));

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        q = [];
        q.push([row, col]);
        while (q.length) {
          const [row, col] = q.shift(); // Adding const saves from getting different variable name, else different name to be given to avoid conflict. See python implementation
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
            if (
              grid[newRow][newCol] === 1 &&
              (cost_matrix[newRow][newCol] === 0 ||
                cost_matrix[row][col] + 1 < cost_matrix[newRow][newCol])
            ) {
              cost_matrix[newRow][newCol] = cost_matrix[row][col] + 1;
              q.push([newRow, newCol]);
            }
          }
        }
      }
    }
  }
  return calculate_cost(grid, cost_matrix);
};

var calculate_cost = function (grid, cost_matrix) {
  let cost = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1 && cost_matrix[row][col] === 0) return -1;
      cost = Math.max(cost, cost_matrix[row][col]);
    }
  }
  return cost;
};
