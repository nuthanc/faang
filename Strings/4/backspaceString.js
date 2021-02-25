var backspaceCompare = function (S, T) {
  let firstString = "", secondString = "";
  for (let i=0; i<S.length; i++) {
    if (S[i] === '#') {
      firstString = firstString.slice(0, firstString.length-1);
    }
    else {
      firstString += S[i];
    }
  }
  for (let i=0; i<T.length; i++) {
    if (T[i] === '#') {
      secondString = secondString.slice(0, secondString.length-1);
    }
    else {
      secondString += T[i];
    }
  }
  if (firstString === secondString) {
    return true
  }
  else {
    return false
  }
};

console.log(backspaceCompare(S="ab##", T=""))