def searchRange(nums, target):
    if len(nums) == 0:
        return [-1, -1]
    ret = binarySearch(nums, target)
    if ret is None:
        return [-1, -1]
    return ret


def binarySearch(nums, target):
    low, high = 0, len(nums) - 1
    first = None
    last = None
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            foundIndex = mid
            first = foundIndex
            last = foundIndex
            for i in range(foundIndex-1, low-1, -1):
                if nums[i] != target:
                    break
                else:
                    first = i
            for j in range(foundIndex+1, high+1):
                if nums[j] != target:
                    break
                else:
                    last = j
            return [first, last]
        elif nums[mid] > target:
            high = mid - 1
        else:
            low = mid + 1 


nums = [5, 7, 7, 8, 8, 10]
target = 11
print(searchRange(nums, target))
# Time Complexity is O(n) when all are the same numbers [4,4,4,4,4,4], target = 4
