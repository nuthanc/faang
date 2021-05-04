var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

const quickSelect = (arr, low, high, indexToFind) => {
  p = partition(arr, low, high);
  if (p === indexToFind) return arr[p];
  else if (indexToFind < p) return quickSelect(arr, low, p - 1, indexToFind);
  else return quickSelect(arr, p + 1, high, indexToFind);
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
