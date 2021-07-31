from collections import deque

def bfs(adj_list, start_node):
    q = deque()
    seen = set()
    q.append(start_node)
    values = []
    while len(q):
        node = q.popleft()
        seen.add(node)
        values.append(node)
        for ele in adj_list[node]:
            if ele not in seen:
                q.append(ele)
    print(values)

adjacency_list = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
]
bfs(adjacency_list, 0)
