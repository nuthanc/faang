class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        low, high = 0, len(nums)-1
        if len(nums) == 0:
            return [-1, -1]
        sol = []
        self.binarySearch(nums, target, low, high, sol)
        if len(sol) == 0:
            return [-1, -1]
        elif len(sol) == 1:
            return [sol[0], sol[0]]
        else:
            return [min(sol), max(sol)]

    def binarySearch(self, nums, target, low, high, sol):
        if low <= high:
            mid = (low + high) // 2
            if nums[mid] == target:
                sol.append(mid)
                self.binarySearch(nums, target, low, mid - 1, sol)
                self.binarySearch(nums, target, mid + 1, high, sol)
            elif nums[mid] > target:
                self.binarySearch(nums, target, low, mid - 1, sol)
            else:
                self.binarySearch(nums, target, mid + 1, high, sol)
        return sol
