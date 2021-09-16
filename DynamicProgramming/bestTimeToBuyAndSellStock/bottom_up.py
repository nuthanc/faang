class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        if n <= 1:
            return 0
        dp = [0] * n

        for j in range(1, n):
            for i in range(n):
                if i >= j:
                    break
                else:
                    profit_selling_current = prices[j] - prices[i]
                    if i-2 >= 0:
                        profit_selling_current += dp[i-2]
                    profit_selling_previous = dp[j-1]
                    dp[j] = max(
                        profit_selling_current, profit_selling_previous, dp[j])

        return dp[n-1]
