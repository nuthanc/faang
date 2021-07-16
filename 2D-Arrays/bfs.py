from collections import deque

directions = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1]
]

def bfs(matrix, row, col, seen):
    values = []
    q = deque()
    q.append([row, col])
    while len(q) > 0:
        row, col = q.popleft()
        if not seen[row][col]:
            values.append(matrix[row][col])
            seen[row][col] = True
            for direction in directions:
                newRow = row + direction[0]
                newCol = col + direction[1]
                if newRow >= 0 and newRow < len(matrix) and newCol >= 0 and newCol < len(matrix[0]) and not seen[newRow][newCol]:
                    q.append([newRow, newCol])
    return values


matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

seen = [[False]*5 for _ in range(4)]
print(bfs(matrix, 2, 2, seen))
