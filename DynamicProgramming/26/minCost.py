class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        return min(self.minCost(n-1, cost), self.minCost(n-2, cost))

    def minCost(self, i, cost):
        if i < 0:
            return 0
        if i == 0 or i == 1:
            return cost[i]
        return cost[i] + min(self.minCost(i-1, cost), self.minCost(i-2, cost))
