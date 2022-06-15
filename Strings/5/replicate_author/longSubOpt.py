class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = dict()
        left = 0
        longest = 0
        for right in range(len(s)):
            current_char = s[right]
            if current_char in seen and seen[current_char] >= left:
                left = seen[current_char] + 1
            longest = max(longest, right-left+1)
            seen[current_char] = right
        return longest
