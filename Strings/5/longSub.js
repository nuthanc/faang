var lengthOfLongestSubstring = function (s) {
  let maxlen= 0;
  const n = s.length;
    for (let i=0; i < n; i++) {
      let l= 0, hset = new Set();
        for (let j=i; j < n; j++) {
          if (!hset.has(s[j])) {
            l += 1;
            hset.add(s[j]);
          }
          else break
        }
        if (l > maxlen)
          maxlen = l
    }
  return maxlen
};

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));