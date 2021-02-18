const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
  let numsMap = {};
  console.log({numsMap});
  for (let p = 0; p < nums.length; p++) {
    console.log({p, value: nums[p]})
    currentMapVal = numsMap[nums[p]]
    console.log({ currentMapVal });
    if (currentMapVal >= 0) // I think just currentMap can be used sinced undefined is false
    {
      return [currentMapVal, p];
    }
    let numToFind = target - nums[p];
    numsMap[numToFind] = p;
  console.log({ numsMap, numToFind });

  }
  return null;
};


console.log(findTwoSum(numsArray, targetToFind));