def dfs(adj_list, vertex, values, seen):
    seen.add(vertex)
    values.append(vertex)
    for ele in adj_list[vertex]:
        if ele not in seen:
            dfs(adj_list, ele, values, seen)


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
values = []
seen = set()
dfs(adjacency_list, 0, values, seen)
print(values)
