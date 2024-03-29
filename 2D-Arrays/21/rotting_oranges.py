from collections import deque
class Solution:
    def __init__(self):
        self.directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ]
    def orangesRotting(self, grid):
        if len(grid) == 0: return 0
        cost_matrix = [[0] * len(grid[0]) for _ in range(len(grid))]
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 2:
                    q = deque()
                    q.append([i, j])
                    while len(q) > 0:
                        row, col = q.popleft()
                        for direction in self.directions:
                            newRow = row + direction[0]
                            newCol = col + direction[1]
                            if newRow < 0 or newRow >= len(grid) or newCol < 0 or newCol >= len(grid[0]):
                                continue
                            if grid[newRow][newCol] == 1 and (cost_matrix[newRow][newCol] == 0 or cost_matrix[row][col] + 1 < cost_matrix[newRow][newCol]):
                                cost_matrix[newRow][newCol] = cost_matrix[row][col] + 1
                                q.append([newRow, newCol])
        
        return self.calculate_cost(grid, cost_matrix)

    def calculate_cost(self, grid, cost_matrix):
        cost = 0
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == 1 and cost_matrix[row][col] == 0:
                    return -1
                cost = max(cost, cost_matrix[row][col])
        return cost

s = Solution()
grid = [[2,2],[1,1],[0,0],[2,0]]
print(s.orangesRotting(grid))