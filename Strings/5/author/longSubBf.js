var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  
  let maxlen = 0;
  for (let left = 0; left < s.length; left++) {
    let l = 0,
      seenChars = {}
    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (!seenChars[currentChar]) {
        l += 1;
        seenChars[currentChar] = true;
      } else break;
    }
    if (l > maxlen) maxlen = l;
  }
  return maxlen;
};

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
