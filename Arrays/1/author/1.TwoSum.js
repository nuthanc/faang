/* 
nums: [1, 3, 7, 9, 2], target = 11
*/
const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
  for (let p1=0; p1<nums.length; p1++) {
    // console.log({p1, value: nums[p1]});
    const numberToFind = target - nums[p1]
    // console.log({ numberToFind });
    for (let p2=p1+1; p2<nums.length; p2++) {
      // console.log({ p2, value: nums[p2] });
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null; // For no solution
}

console.log(findTwoSum(numsArray, targetToFind));