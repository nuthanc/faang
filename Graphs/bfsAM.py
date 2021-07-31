from collections import deque

def bfs(graph):
    q = deque([0])
    seen = set()
    values = []
    while len(q) > 0:
        index = q.popleft()
        values.append(index)
        seen.add(index)
        for i, ele in enumerate(graph[index]):
            if ele == 1 and i not in seen:
                q.append(i)
    print(values)


graph = [
    [0,1,0,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,0,0,0],
    [0,0,0,1,0,0,1,0,0],
    [0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,0],
    [0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,0]
]

bfs(graph)