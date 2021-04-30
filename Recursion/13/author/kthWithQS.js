var findKthLargest = function (nums, k) {
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
};

const partition = (arr, low, high) => {
  let pivotValue = arr[high];
  let pivotIndex = low;
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
  return pivotIndex;
};

nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(findKthLargest(nums, 4));
