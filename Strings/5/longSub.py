def lengthOfLongestSubstring(s):
    maxlen, n = 0, len(s)
    for i in range(n):
        l, hset = 0, set()
        for j in range(i,n):
            if s[j] not in hset:
                l += 1
                hset.add(s[j])
            else:
                break
        if l > maxlen:
            maxlen = l
    return maxlen


s = "abcabcbb"
print(lengthOfLongestSubstring(s))
