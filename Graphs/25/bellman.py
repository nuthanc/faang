class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        INFINITY = float('inf')
        distances = [INFINITY] * n
        distances[k-1] = 0
        for i in range(n-1):
            changed = False
            for time in times:
                u, v, w = time
                if distances[u-1] + w < distances[v-1]:
                    distances[v-1] = distances[u-1] + w
                    changed = True
            if not changed:
                break
        value = max(distances)
        return -1 if value == INFINITY else value
