class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        self.quickSort(nums, 0, len(nums) - 1)
        return nums[-k]
    
    def quickSort(self, arr, low, high):
        if low < high:
            p = self.partition(arr, low, high)
            self.quickSort(arr, low, p-1)
            self.quickSort(arr, p+1, high)

    def partition(self, arr, low, high):
        pivotValue = arr[high]
        pivotIndex = low
        for i in range(low, high):
            if arr[i] < pivotValue:
                arr[i], arr[pivotIndex] = arr[pivotIndex], arr[i]
                pivotIndex += 1
        arr[pivotIndex], arr[high] = arr[high], arr[pivotIndex]
        return pivotIndex