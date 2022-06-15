const build = function (string) {
  let builtString = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '#') {
      builtString.push(string[i]);
    } else { //else if (string.length > 0) not required, but in python required
      builtString.pop();
    }
  }
  return builtString;
};

var backspaceCompare = function (S, T) {

  firstString = build(S);
  secondString = build(T);

  // All the false conditions first, then true
  if (firstString.length !== secondString.length) {
    return false;
  } else {
    for (let i = 0; i < firstString.length; i++) {
      if (firstString[i] !== secondString[i]) {
        return false;
      }
    }
  }

  return true;
};

console.log(backspaceCompare('ab', 'ba'));
