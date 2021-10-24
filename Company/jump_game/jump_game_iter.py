class Solution:
    def canJump(self, nums: List[int]) -> bool:
        l = len(nums) - 1
        index = 0
        jump = 1
        while jump > 0 and index < l:
            jump -= 1
            jump = max(jump, nums[index])
            if jump > 0:
                index += 1
        if index == l:
            return True
        return False
