class Solution:
    def __init__(self):
        self.directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ]

    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        seen = [[False]*len(grid[0]) for _ in range(len(grid))]
        # Sequential search
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == '1':
                    count += 1
                    self.convertOldIslands(row, col, grid, seen)
        return count

    # Using dfs to convert all old islands to 0
    def convertOldIslands(self, row, col, grid, seen):
        from collections import deque
        q = deque()
        q.append([row, col])
        while len(q) > 0:
            row, col = q.popleft()
            if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or seen[row][col] or grid[row][col] == '0':
                continue
            grid[row][col] = '0'
            seen[row][col] = True
            for direction in self.directions:
                q.append([row+direction[0], col+direction[1]])
