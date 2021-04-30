var findKthLargest = function (nums, k) {
  quickSort(nums, 0, nums.length-1);
  return nums[nums.length-k];
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    p = partition(arr, left, right);
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
};

const partition = (arr, left, right) => {
  let i = left,
    p = right;
  while (i < p) {
    if (arr[i] <= arr[p]) {
      i++;
    } else {
      if (p - 1 === i) {
        const temp = arr[p];
        arr[p] = arr[i];
        arr[i] = temp;
        i++;
        p--;
      } else {
        const temp = arr[i];
        arr[i] = arr[p - 1];
        arr[p - 1] = arr[p];
        arr[p] = temp;
        p--;
      }
    }
  }
  return p;
};

nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(findKthLargest(nums, 4));