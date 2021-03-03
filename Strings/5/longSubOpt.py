'''Steps:
1. p1 and p2 start at index 0
2. p2 advances till there is no repetition
3. When there is repetition, calculate l, remove elements from hashmap and advance p1
Below is what I thought which O(2n) which is good

def lengthOfLongestSubstring(s):
    maxlen, n = 0, len(s)
    p1 = p2 = 0
    hmap = {}
    while p2 < n:
        if s[p2] not in hmap:
            hmap[s[p2]] = p2
            p2 += 1
        else:
            l = p2 - p1
            if l > maxlen:
                maxlen = l
            first_occ = hmap[s[p2]]
            for i in range(p1, first_occ+1):
                del hmap[s[i]]
            p1 = first_occ + 1
    l = p2 - p1
    if l > maxlen:
        maxlen = l
    return maxlen


s = "abcbad"
print(lengthOfLongestSubstring(s))
'''

'''More optimal is 
My above steps but instead of deleting from dictionary, reassign the element
'''
def lengthOfLongestSubstring(s):
    maxlen, n = 0, len(s)
    p1 = 0
    hmap = {}
    for p2 in range(n):
        if s[p2] in hmap:
            p1 = max(hmap[s[p2]], p1)
        maxlen = max(maxlen, p2 - p1 + 1)
        hmap[s[p2]] = p2 + 1
    return maxlen


s = "abcbad"
print(lengthOfLongestSubstring(s))
