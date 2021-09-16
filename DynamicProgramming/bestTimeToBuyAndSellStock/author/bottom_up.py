from math import inf


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        self.prices = prices
        self.dp = dict()
        return self.maxProfitBottomup()

    def maxProfitBottomup(self) -> int:
        for i in range(len(self.prices)+1, -1, -1):
            for buy in (True, False):
                # Base case
                if i >= len(self.prices):
                    self.dp[(i, buy)] = 0
                # Step case
                elif buy is True:
                    self.dp[(i, buy)] = max(-self.prices[i] +
                                            self.dp[(i+1, False)], self.dp[(i+1, True)])
                else:  # buy is False
                    self.dp[(i, buy)] = max(self.prices[i] +
                                            self.dp[(i+2, True)], self.dp[(i+1, False)])
        return self.dp[(0, True)]
