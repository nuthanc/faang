
const findTwoSum = (nums, target) => {
  let hashMap = new Map()
  for(let p1=0;p1 < nums.length; p1++) {
    if (hashMap.has(nums[p1])) {
      return [hashMap.get(nums[p1]), p1]
    }
    let numToFind = target - nums[p1]
    hashMap.set(numToFind, p1)
  }
  return null;
}

console.log(findTwoSum((nums = [1, 3, 7, 9, 2]), (target = 11)));