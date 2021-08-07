class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj_list = [{} for _ in range(n)]
        for time in times:
            u,v,w = time
            adj_list[u-1][v-1] = w
        
        INFINITY = float('inf')
        shortest_path_list = [INFINITY]*n
        visited = [False]*n
        count = 0

        for key in adj_list[k-1]:
            shortest_path_list[key] = adj_list[k-1][key]
        shortest_path_list[k-1] = 0
        visited[k-1] = True
        count += 1

        while count < n:
            src = -1
            minimum = INFINITY
            for i in range(len(shortest_path_list)):
                if not visited[i] and shortest_path_list[i] < minimum:
                    minimum = shortest_path_list[i]
                    src = i
            
            if src != -1:
                count += 1
                visited[src] = True
                for key in adj_list[src]:
                    if shortest_path_list[src] + adj_list[src][key] < shortest_path_list[key]:
                        shortest_path_list[key] = shortest_path_list[src] + adj_list[src][key]
            else:
                break
        
        return -1 if count < n else max(shortest_path_list)

