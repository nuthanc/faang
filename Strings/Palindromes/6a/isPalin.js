var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  const regex = /^[a-z0-9A-Z]+$/;
  let parsedString = [];
  for (let i=0; i < s.length; i++) {
    if (s[i].match(regex)) {
      parsedString.push(s[i].toLowerCase())
    }
  }
  
  let i = 0, j = parsedString.length -1;
  while (i < j) {
    if (parsedString[i] !== parsedString[j]) return false;

    i++; j--;
  }
  return true;
};

s = 'madam';
console.log(isPalindrome(s));