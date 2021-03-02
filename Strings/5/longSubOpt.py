'''Steps:

'''

def lengthOfLongestSubstring(s):
    maxlen, n = 0, len(s)
    p1 = p2 = 0
    hmap = {}
    while p2 < n:
        if s[p2] not in hmap.keys():
            hmap[s[p2]] = p2
            p2 += 1
        else:

    return maxlen


s = "abcabcbb"
print(lengthOfLongestSubstring(s))
