from collections import deque

INF = 2147483647
GATE = 0
WALL = -1

directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

def shortest_path(matrix):
    if len(matrix) == 0: return matrix
    q = deque()
    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            if matrix[row][col] == GATE:
                for direction in directions:
                    nextRow = row + direction[0]
                    nextCol = col + direction[1]
                    if nextRow < 0 or nextRow >= len(matrix) or nextCol < 0 or nextCol >= len(matrix[0]):
                        continue
                    if matrix[nextRow][nextCol] == INF:
                        matrix[nextRow][nextCol] = 1
                        q.append([nextRow, nextCol])
    
    while(len(q)):
        row, col = q.popleft()
        for direction in directions:
            nextRow = row + direction[0]
            nextCol = col + direction[1]
            if nextRow < 0 or nextRow >= len(matrix) or nextCol < 0 or nextCol >= len(matrix[0]):
                continue
            if matrix[nextRow][nextCol] == INF:
                matrix[nextRow][nextCol] = matrix[row][col] + 1
                q.append([nextRow, nextCol])
    print(matrix)

matrix = [
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
]
matrix = [[INF, -1, 0, INF], [-1, INF, INF, -1], [INF, -1, INF, -1], [0, -1, INF, INF]]
shortest_path(matrix)
