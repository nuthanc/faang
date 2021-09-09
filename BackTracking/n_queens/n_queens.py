class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        board = [['.'] * n for _ in range(n)]
        inCols = [False for _ in range(n)]
        result = []
        self.backTrack(0, board, inCols, result)
        return result

    def dec_i_and_j_and_check(self, i, j, board):
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j -= 1
        return True

    def dec_i_and_inc_j_and_check(self, i, j, board):
        n = len(board)
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1
        return True

    def isNotAttacking(self, row, col, inCols, board):
        if inCols[col]:
            return False
        if not self.dec_i_and_j_and_check(row-1, col-1, board):
            return False
        if not self.dec_i_and_inc_j_and_check(row-1, col+1, board):
            return False
        return True

    def backTrack(self, row, board, inCols, result):
        if row == len(board):
            result.append([''.join(row) for row in board])
            return
        for col in range(len(board)):
            board[row][col] = 'Q'
            # print(board, row, col)
            if self.isNotAttacking(row, col, inCols, board):
                inCols[col] = True
                self.backTrack(row+1, board, inCols, result)
                inCols[col] = False
            board[row][col] = '.'
