class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        prev = [0] * (len(word2)+1)
        for i in range(1, len(word1)+1):
            cur = [0] * (len(word2)+1)
            for j in range(1, len(word2)+1):
                if word1[i-1] == word2[j-1]:
                    cur[j] = 1 + prev[j-1]
                else:
                    cur[j] = max(prev[j], cur[j-1])
            prev = cur
        return len(word1) + len(word2) - 2 * prev[len(word2)]
