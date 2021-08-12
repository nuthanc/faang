class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        mc = [float('inf')]*n
        return min(self.minCost(n-1, cost, mc), self.minCost(n-2, cost, mc))

    def minCost(self, i, cost, mc):
        if i < 0:
            return 0
        if i == 0 or i == 1:
            return cost[i]
        if mc[i] != float('inf'):
            return mc[i]
        else:
            mc[i] = cost[i] + min(self.minCost(i-1, cost, mc), self.minCost(i-2, cost, mc))
            return mc[i]
