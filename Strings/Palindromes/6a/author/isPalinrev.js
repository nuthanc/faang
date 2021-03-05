var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  s = s.replace(/[^a-z0-9A-Z]/g, '').toLowerCase();

  let rev = "";

  for (let i = s.length-1; i>=0; i--) {
    rev += s[i];
  }

  return s === rev;
}

s = 'race car';
console.log(isPalindrome(s));
