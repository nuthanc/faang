class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        lcs = self.longest_common_subsequence(word1, word2, 0, 0)
        return len(word1) + len(word2) - 2 * lcs

    def longest_common_subsequence(self, word1, word2, i, j):
        if i == len(word1) or j == len(word2):
            return 0
        if word1[i] == word2[j]:
            return 1 + self.longest_common_subsequence(word1, word2, i+1, j+1)
        else:
            return max(self.longest_common_subsequence(word1, word2, i+1, j), self.longest_common_subsequence(word1, word2, i, j+1))
