class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        result = []
        self.backTrack(0, [], result, n)
        return result

    def genSol(self, colQueenPlacement, n):
        result = []
        for row in range(n):
            resultString = ''
            for col in range(n):
                if col == colQueenPlacement[row]:
                    resultString += 'Q'
                else:
                    resultString += '.'
            result.append(resultString)
        return result

    def isValid(self, colQueenPlacement):
        if len(colQueenPlacement) == 1:
            return True
        placedRow = len(colQueenPlacement) - 1
        placedCol = colQueenPlacement[placedRow]
        for i in range(len(colQueenPlacement)-1):
            row = i
            col = colQueenPlacement[row]
            if placedCol == col:
                return False

            if placedRow - row == abs(placedCol - col):
                return False
        return True

    def backTrack(self, row, colQueenPlacement, result, n):
        if row == n:
            result.append(self.genSol(colQueenPlacement, n))
        else:
            for col in range(n):
                colQueenPlacement.append(col)
                if self.isValid(colQueenPlacement):
                    self.backTrack(row+1, colQueenPlacement, result, n)
                colQueenPlacement.pop()
