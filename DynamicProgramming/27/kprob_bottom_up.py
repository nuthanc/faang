class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        if row < 0 or row >= n or column < 0 or column >=n or n == 0:
            return 0
        if k == 0: 
            return 1
        directions = [
            [-2, -1],
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, -1],
            [2, 1],
            [-1, -2],
            [1, -2]
        ]
        grid = [[[0]*n for _ in range(n)] for _ in range(k+1)]
        grid[0][row][column] = 1

        for itr in range(k):
            for r in range(n):
                for c in range(n):
                    if grid[itr][r][c] > 0:
                        for direction in directions:
                            newRow = r + direction[0]
                            newCol = c + direction[1]
                            if newRow < 0 or newRow >= n or newCol < 0 or newCol >= n:
                                continue
                            grid[itr+1][newRow][newCol] = grid[itr+1][newRow][newCol] + (grid[itr][r][c]/8)
        
        sum = 0
        for i in range(n):
            for j in range(n):
                sum += grid[k][i][j]
        return sum

