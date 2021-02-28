var backspaceCompare = function (S, T) {
  let p1 = S.length - 1, p2 = T.length -1, skipS = 0, skipT = 0;
  while (p1 >= 0 || p2 >=0) {
    while(p1 >= 0) {
      if (S[p1] === '#') {
        p1--;
        skipS++;
      }
      else if (skipS > 0) {
        p1--;
        skipS--;
      }
      else {
        break;
      }
    }

    while(p2 >= 0) {
      if (T[p2] === '#') {
        p2--;
        skipT++;
      }
      else if (skipT > 0) {
        p2--;
        skipT--;
      }
      else {
        break;
      }
    }

    if (p1 >=0 && p2 >=0 && S[p1] !== T[p2]) return false;
    if ((p1 >= 0) != (p2 >=0)) return false;
    p1--;
    p2--;
  }
  return true;
};

console.log(backspaceCompare((S = 'abab##'), (T = 'ab')));
