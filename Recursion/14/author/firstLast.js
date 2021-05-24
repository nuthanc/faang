const searchRange = (nums, target) => {
  if (nums.length === 0) return [-1, -1];
  let low = 0,
    high = nums.length - 1;
  let ret = binarySearch(nums, target, low, high);
  if (!ret) return [-1,-1];

  [low, mid, high] = ret;
  let left = mid,
    right = mid;

  ret = binarySearch(nums, target, low, mid - 1);
  while (ret) {
    left = ret[1];
    ret = binarySearch(nums, target, ret[0], ret[1] - 1);

  }
  ret = binarySearch(nums, target, mid + 1, high);

  while (ret) {
    right = ret[1];
    ret = binarySearch(nums, target, ret[1] + 1, ret[2]);

  }
  return [left, right];
};

const binarySearch = (nums, target, low, high) => {
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return [low, mid, high];
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return false;
};

const array = [1, 3, 3, 5, 5, 5, 8, 9];
const targetToFind = 10;
console.log(searchRange(array, targetToFind));
