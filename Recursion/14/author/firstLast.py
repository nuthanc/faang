class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1, -1]
        low, high = 0, len(nums) - 1
        ret = self.binarySearch(nums, target, low, high)
        if ret is None:
            return [-1, -1]

        low, mid, high = ret
        left = right = mid
        ret = self.binarySearch(nums, target, low, mid-1)
        while ret:
            left = ret[1]
            ret = self.binarySearch(nums, target, ret[0], ret[1] - 1)
        # Continue from here
        ret = self.binarySearch(nums, target, mid+1, high)
        while ret:
            right = ret[1]
            ret = self.binarySearch(nums, target, ret[1] + 1, ret[2])
        return [left, right]

    def binarySearch(self, nums, target, low, high):
        while low <= high:
            mid = (low + high) // 2
            if nums[mid] == target:
                return low, mid, high
            elif nums[mid] > target:
                high = mid - 1
            else:
                low = mid + 1

nums = [4,4,4,4,4,4,4,4]
target = 4
s = Solution()
print(s.searchRange(nums, target))
