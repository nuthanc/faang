'''
Array: [1, 3, 7, 9, 2], target = 11
'''

def find_two_sum(arr, target):
    for p1 in range(len(arr)-1):
        des = target - arr[p1]
        for p2 in range(p1+1, len(arr)):
            if arr[p2] == des:
                return p1,p2
    return null

print(find_two_sum(arr=[1,3,7,9,2], target=11))