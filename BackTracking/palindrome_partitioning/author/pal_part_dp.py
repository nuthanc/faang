class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []
        dp = [[False] * len(s) for i in range(len(s))]
        self.solve(0, s, [], result, dp)
        return result
    
    def solve(self, start_partition, s, partial_splits, result, dp):
        if start_partition == len(s):
            result.append(partial_splits.copy())
        else:
            for i in range(start_partition, len(s)):
                if s[start_partition] == s[i] and (i-start_partition <= 2 or dp[start_partition+1][i-1]):
                    dp[start_partition][i] = True
                    pal_partition = s[start_partition:i+1]
                    partial_splits.append(pal_partition)
                    self.solve(i+1, s, partial_splits, result, dp)
                    partial_splits.pop()