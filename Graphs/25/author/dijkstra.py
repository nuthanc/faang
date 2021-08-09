import heapq

def networkDelayTime(times, n, k):
    INFINITY = float('inf')
    distances = [INFINITY]*n
    distances[k-1] = 0
    adjList = [[] for _ in range(n)]
    for time in times:
        u, v, w = time
        adjList[u-1].append([v-1, w])
    
    heap = []
    heapq.heappush(heap, (0, k-1)) #(weight, index)
    while len(heap):
        weight, currentVertex = heapq.heappop(heap)
        adjacent = adjList[currentVertex]
        for item in adjacent:
            vertex, weight = item
            if distances[currentVertex] + weight < distances[vertex]:
                distances[vertex] = distances[currentVertex] + weight
                heapq.heappush(heap, (distances[vertex], vertex))
    ans = max(distances)
    return -1 if ans == INFINITY else ans


times = [
    [1, 2, 9],
    [1, 4, 2],
    [2, 5, 1],
    [4, 2, 4],
    [4, 5, 6],
    [3, 2, 3],
    [5, 3, 7],
    [3, 1, 5],
]

# times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]]
# n = 4
# k = 2

print(networkDelayTime(times, 5, 1))
# print(networkDelayTime(times, n, k))
