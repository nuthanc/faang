var backspaceCompare = function (S, T) {
  var build = function(s) {
    let ans = []
    for (let i=0;i<s.length;i++) {
      if (s[i] !== '#') {
        ans.push(s[i]);
      }
      else if (s.length > 0) {
        ans.pop();
      }
    }
    return ans;
  }
  firstString = build(S);
  secondString = build(T);

  if (firstString.length === secondString.length) {
    for (let i=0;i<firstString.length;i++) {
      if (firstString[i] !== secondString[i]) {
        return false;
      }
    }
    return true;
  }
  else {
    return false;
  }
}
  

console.log(backspaceCompare('ab','ba'));
