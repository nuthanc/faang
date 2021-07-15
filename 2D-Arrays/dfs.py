
def dfs(arr, row, col, visited):
    if row >=0 and row < len(arr) and col >=0 and col < len(arr[row]) and visited[row][col] != 1:
        print(arr[row][col], end=' ')
        visited[row][col] = 1
        dfs(arr, row-1, col, visited) #up
        dfs(arr, row, col+1, visited) #right
        dfs(arr, row+1, col, visited) #down
        dfs(arr, row, col-1, visited) #left

arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20]
]

visited = [[0]*5 for _ in range(4)]
dfs(arr, 0, 0, visited)