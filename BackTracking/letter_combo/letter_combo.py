class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        self.combo = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }
        ans = []
        self.bt(0, [], ans, digits)
        return ans

    def bt(self, index, partialResult, ans, digits):
        if index == len(digits):
            ans.append(''.join([ch for ch in partialResult]))
        else:
            digit = digits[index]
            for letter in self.combo[digit]:
                partialResult.append(letter)
                self.bt(index+1, partialResult, ans, digits)
                partialResult.pop()
