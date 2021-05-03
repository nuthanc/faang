var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length-k) || nums[nums.length-k];
};

const quickSelect = (arr, low, high, indexToFind) => {
  if (low < high) {
    p = partition(arr, low, high);
    if (p > indexToFind) return quickSelect(arr, low, p - 1, indexToFind);
    else if (p < indexToFind) return quickSelect(arr, p + 1, high, indexToFind);
    else return arr[p]
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

nums = [3, 2, 1, 5, 6, 4];
console.log(findKthLargest(nums, 2));
