def dfs(graph, start_node, values, seen):
    seen.add(start_node)
    values.append(start_node)
    for i, val in enumerate(graph[start_node]):
        if val > 0 and i not in seen:
            dfs(graph, i, values, seen)


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
values = []
seen = set()
dfs(graph, 0, values, seen)
print(values)