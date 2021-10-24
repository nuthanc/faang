/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const canJumpDp = new Array(nums.length).fill(null);
  return backtrack(0, nums, canJumpDp);
};

var decide = function (index, nums) {
  if (index < nums.length - 1 && nums[index] === 0) return false;
  return true;
};

var backtrack = function (index, nums, canJumpDp) {
  if (index >= nums.length - 1) return true;

  if (canJumpDp[index] !== null) return canJumpDp[index];

  for (let i = nums[index]; i > 0; i--) {
    const jump = index + i;
    if (decide(jump, nums)) {
      if (backtrack(jump, nums, canJumpDp)) {
        return true;
      }
    }
  }
  canJumpDp[index] = false;
  return canJumpDp[index];
};
