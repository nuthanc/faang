var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let maxlen = 0;
  const n = s.length;
  let left = 0;
  seenChars = {};
  for (let right = 0; right < n; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars[currentChar]; // either undefined or the index
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    maxlen = Math.max(maxlen, right - left + 1);
    seenChars[currentChar] = right;
  }
  return maxlen;
};

const s = 'abcbad';
console.log(lengthOfLongestSubstring(s));
