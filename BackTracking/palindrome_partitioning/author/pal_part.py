class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []
        self.solve(0, s, [], result)
        return result

    def is_palindrome(self, s, start, end):
        while start < end:
            if s[start] != s[end]:
                return False
            start += 1
            end -= 1
        return True

    def solve(self, start_partition, s, partial_splits, result):
        if start_partition == len(s):
            result.append(partial_splits.copy())
        else:
            for i in range(start_partition, len(s)):
                if self.is_palindrome(s, start_partition, i):
                    pal_partition = s[start_partition:i+1]
                    partial_splits.append(pal_partition)
                    self.solve(i+1, s, partial_splits, result)
                    partial_splits.pop()
