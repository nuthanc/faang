def validPalindrome(s):
    p1, p2 = 0, len(s)-1
    count = 0
    new_ptrs = []

    while p1 < p2:
        if s[p1] != s[p2] and count < 2:
            if count == 0:
                new_ptrs.append(p1);
                new_ptrs.append(p2-1);
                p1 += 1
            elif count == 1:
                p1, p2 = new_ptrs
            count += 1
            continue
        if s[p1] != s[p2]:
            return False
        p1 += 1
        p2 -= 1
    return True

s = "nuthan"
print(validPalindrome(s))