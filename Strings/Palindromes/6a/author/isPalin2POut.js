var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  s = s.replace(/[^a-z0-9A-Z]/g,'').toLowerCase();

  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;

    i++;
    j--;
  }
  return true;
};

s = 'arace car';
console.log(isPalindrome(s));
