
def twoSum(nums, target):
    hashMap = dict()
    for p1 in range(len(nums)):
        if nums[p1] in hashMap.keys():
            return [hashMap[nums[p1]], p1]
        numToFind = target - nums[p1]
        hashMap[numToFind] = p1
    return None


print(twoSum(nums=[1, 3, 7, 9, 2], target=11))
