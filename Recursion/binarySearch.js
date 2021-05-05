const binarySearch = (arr, low, high) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (ele === arr[mid]) return mid;
    else if (ele < arr[mid]) return binarySearch(arr, low, mid - 1, ele);
    else return binarySearch(arr, mid + 1, high, ele);
  } else return -1;
};

const arr = [2, 4, 5, 9, 12, 15];
const ele = 12;
console.log(binarySearch(arr, 0, arr.length - 1, ele));
