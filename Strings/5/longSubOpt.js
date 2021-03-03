var lengthOfLongestSubstring = function (s) {
  let maxlen = 0;
  const n = s.length;
  let i = 0;
  hmap = {}
  for (let j = 0; j < n; j++) {
    if (s[j] in hmap) {
      i = Math.max(i, hmap[s[j]])
    }
    maxlen = Math.max(maxlen, j-i+1);
    hmap[s[j]] = j+1;
  }
  return maxlen;
};

const s = 'abcbad';
console.log(lengthOfLongestSubstring(s));
