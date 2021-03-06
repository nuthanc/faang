var validPalindrome = function (s) {
  if (s.length <= 1) return true;

  let p1 = 0, p2 = s.length -1, count = 0;
  let newPtrs = [];

  while (p1 < p2) {
    if (s[p1] !== s[p2] && count < 2) {
      if (count === 0) {
        newPtrs.push(p1);
        newPtrs.push(p2-1);
        p1++;
      }
      else if (count === 1) {
        [p1, p2] = newPtrs;
      }
      count++;
      continue;
    }
    if (s[p1] !== s[p2]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
};
