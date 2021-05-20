def searchRange(nums, target):
    if len(nums) == 0:
        return [-1, -1]
    low, high = 0, len(nums) - 1
    ret = binarySearch(nums, target, low, high)
    if ret is None:
        return [-1, -1]

    low, mid, high = ret
    left = right = mid
    ret = binarySearch(nums, target, low, mid-1)
    while ret:
        left = ret[1]
        ret = binarySearch(nums, target, ret[0], ret[1] - 1)
    # Continue from here
    ret = binarySearch(nums, target, mid+1, high)
    while ret:
        right = ret[1]
        ret = binarySearch(nums, target, ret[1] + 1, ret[2])
    return [left, right]


def binarySearch(nums, target, low, high):
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
print(searchRange(nums, target))
'''
1,4,5,6,6,6,6,6,*6*,6,8,*8*,8,8,8,9,10
Found the target
Now, find left and right ranges
    Left Range:
        bS(low, mid-1)
        Return None if target is not found else returns a Tuple
    Right Range:
        bS(mid+1, high)

4,4,4,*4*,4,4,4,4
'''
