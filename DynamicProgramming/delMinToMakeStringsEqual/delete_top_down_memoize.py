class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        store = [[None] * len(word2) for _ in range(len(word1))]
        lcs = self.longest_common_subsequence(word1, word2, 0, 0, store)
        return len(word1) + len(word2) - 2 * lcs

    def longest_common_subsequence(self, word1, word2, i, j, store):
        if i == len(word1) or j == len(word2):
            return 0
        if store[i][j] is not None:
            return store[i][j]
        if word1[i] == word2[j]:
            store[i][j] = 1 + \
                self.longest_common_subsequence(word1, word2, i+1, j+1, store)
            return store[i][j]
        else:
            store[i][j] = max(self.longest_common_subsequence(word1, word2, i+1, j, store), self.longest_common_subsequence(word1, word2, i, j+1, store))
            return store[i][j]

s = Solution()
print(s.minDistance("mart", "karma"))
