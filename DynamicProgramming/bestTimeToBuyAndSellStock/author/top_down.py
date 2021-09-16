# Recurrence relation
# f(i, buy) = 0, i >= N
# max(-A[i]+f(i+1, false), f(i+1, true)), buy = true
# max(A[i]+f(i+2, true), f(i+1, false)), buy = false

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        self.prices = prices
        self.dp = dict()
        return self.maxProfitTopdown(0, True)

    def maxProfitTopdown(self, i: int, buy: bool) -> int:
        # Base case
        if i >= len(self.prices):
            return 0
        # Cache case
        elif (i, buy) in self.dp:
            return self.dp[(i, buy)]
        # Step case
        elif buy is True:
            self.dp[(i, buy)] = max(-self.prices[i]+self.maxProfitTopdown(i +
                                                                          1, False), self.maxProfitTopdown(i+1, True))
            return self.dp[(i, buy)]
        else:  # buy is False
            self.dp[(i, buy)] = max(
                self.prices[i]+self.maxProfitTopdown(i+2, True), self.maxProfitTopdown(i+1, False))
            return self.dp[(i, buy)]
