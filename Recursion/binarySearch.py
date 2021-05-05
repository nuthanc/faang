def binary_search(arr, low, high, ele):
    if low <= high:
        mid = (low + high) // 2
        if ele == arr[mid]: return 'Found'
        elif ele < arr[mid]: return binary_search(arr, low, mid-1, ele)
        else: return binary_search(arr, mid+1, high, ele)
    else:
        return 'Not Found'

arr = [3,4,2,13,5]
arr.sort()
print(binary_search(arr, 0, len(arr) - 1, 5))