class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        if n <= 1:
            return 0
        b = -prices[0]
        s = 0
        r = 0
        for i in range(1, n):
            pb = b
            ps = s
            pr = r
            b = max(pb, pr-prices[i])
            s = max(ps, pb+prices[i])
            r = max(ps, pr)
        return max(s, r)
