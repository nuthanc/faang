/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var getBoxId = function (r, c) {
  const col = Math.floor(c / 3);
  const row = Math.floor(r / 3) * 3;
  return row + col;
};

var solveSudoku = function (board) {
  const n = board.length;
  const rows = new Array(n),
    cols = new Array(n),
    boxes = new Array(n);
  for (let i = 0; i < n; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
    boxes[i] = new Set();
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== '.') {
        const val = board[r][c];
        rows[r].add(val);
        cols[c].add(val);
        const boxId = getBoxId(r, c);
        boxes[boxId].add(val);
      }
    }
  }

  solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const isValid = function (box, row, col, val) {
  if (box.has(val) || row.has(val) || col.has(val)) {
    return false;
  }
  return true;
};

var solveBacktrack = function (board, boxes, rows, cols, r, c) {
  if (r === board.length || c === board.length) {
    return true;
  }
  if (board[r][c] === '.') {
    for (let num = 1; num <= 9; num++) {
      const numVal = num.toString();
      board[r][c] = numVal;
      const boxId = getBoxId(r, c);
      const box = boxes[boxId];
      const row = rows[r];
      const col = cols[c];
      if (isValid(box, row, col, numVal)) {
        box.add(numVal);
        row.add(numVal);
        col.add(numVal);
        let nextCol = c + 1,
          nextRow = r;
        if (Math.floor(nextCol / 9) > 0) {
          nextCol = nextCol % 9;
          nextRow = r + 1;
        }
        if (solveBacktrack(board, boxes, rows, cols, nextRow, nextCol)) {
          return true;
        }
        box.delete(numVal);
        row.delete(numVal);
        col.delete(numVal);
      }
      board[r][c] = '.';
    }
  } else {
    let nextCol = c + 1,
      nextRow = r;
    if (Math.floor(nextCol / 9) > 0) {
      nextCol = nextCol % 9;
      nextRow = r + 1;
    }
    if (solveBacktrack(board, boxes, rows, cols, nextRow, nextCol)) {
      return true;
    }
  }
  return false;
};
