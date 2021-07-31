def dfs(adj_list, start_node, values, seen):
    seen.add(start_node)
    values.append(start_node)
    for ele in adj_list[start_node]:
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
