'''
numsay: [1, 3, 7, 9, 2], target = 11
'''

def twoSum(nums, target):
    for p1 in range(len(nums)-1):
        des = target - nums[p1]
        for p2 in range(p1+1, len(nums)):
            if nums[p2] == des:
                return [p1,p2]
    return null

print(find_two_sum(nums=[1,3,7,9,2], target=11))