var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  s = s.replace(/[^a-z0-9A-Z]/g, '').toLowerCase();
  let i,j;
  if (s.length%2 === 1) {
    i = j = Math.floor(s.length / 2);
    console.log(i,j)
  }
  else {
    j = Math.floor(s.length / 2);
    i = j - 1;
  }

  while (i >=0 && j < s.length) {
    if (s[i] !== s[j]) return false;

    i--;
    j++;
  }
  return true;
};

s= "abb";
console.log(isPalindrome(s));
