var validSubPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}


var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1,

  while (left < right) {
    if (s[left] !== s[right]) {
      return validSubPalindrome(s,left+1,right) || validSubPalindrome(s,left,right-1)
    }
    left++;
    right--;
  }

  return true;
};
