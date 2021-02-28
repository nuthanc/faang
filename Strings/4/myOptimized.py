def backspaceCompare(S, T):
    p1, p2 = len(S)-1, len(T)-1
    skipA, skipB = 0, 0
    while p1 >= 0 or p2 >= 0:
        while p1 >= 0:
            if S[p1] == '#':
                skipA += 1
                p1 -= 1
            elif skipA > 0:
                skipA -= 1
                p1 -= 1
            else:
                break
        while p2 >= 0:
            if T[p2] == '#':
                skipB += 1
                p2 -= 1
            elif skipB > 0:
                skipB -= 1
                p2 -= 1
            else:
                break
        if p1 >= 0 and p2 >= 0 and S[p1] != T[p2]:
            return False
        if (p1 >= 0) != (p2 >= 0):
            return False
        p1 -= 1
        p2 -= 1
    return True

print(backspaceCompare(S="bxj##tw", T="bxo#j##tw"))

'''
#ac#b  b
abab###  a
###a#   ""
###    ""
##aa#   a
'''


