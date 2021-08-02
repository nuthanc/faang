class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        if n <= 1:
            return 0
        subordinates = [[] for _ in range(len(manager))]
        for i, ele in enumerate(manager):
            if ele > -1:
                subordinates[ele].append(i)

        return self.dfs(headID, subordinates, informTime, 0, 0)

    def dfs(self, id, subordinates, informTime, minutes, maximum):
        if len(subordinates[id]) == 0: return maximum

        minutes = informTime[id] + minutes
        maximum = max(maximum, minutes)

        for ele in subordinates[id]:
            maximum = self.dfs(ele, subordinates, informTime, minutes, maximum)
        
        return maximum
