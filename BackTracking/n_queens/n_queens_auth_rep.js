/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  backTrack(0, [], result, n);
  return result;
};

var genSol = function (colQueenPlacement, n) {
  const result = [];
  for (let row = 0; row < n; row++) {
    let resultString = '';
    for (let col = 0; col < n; col++) {
      if (col === colQueenPlacement[row]) resultString += 'Q';
      else resultString += '.';
    }
    result.push(resultString);
  }
  return result;
};

var isValid = function (colQueenPlacement) {
  if (colQueenPlacement.length === 1) return true;
  const placedRow = colQueenPlacement.length - 1;
  const placedCol = colQueenPlacement[placedRow];
  for (let i = 0; i < colQueenPlacement.length - 1; i++) {
    let row = i;
    let col = colQueenPlacement[row];
    if (placedCol === col) {
      return false;
    }
    if (placedRow - row === Math.abs(placedCol - col)) {
      return false;
    }
  }
  return true;
};

var backTrack = function (row, colQueenPlacement, result, n) {
  if (row === n) {
    result.push(genSol(colQueenPlacement, n));
  } else {
    for (let col = 0; col < n; col++) {
      colQueenPlacement.push(col);
      if (isValid(colQueenPlacement)) {
        backTrack(row + 1, colQueenPlacement, result, n);
      }
      colQueenPlacement.pop();
    }
  }
};
