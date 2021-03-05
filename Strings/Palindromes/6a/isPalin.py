def isPalindrome(s):
    if len(s) <= 1:
        return True
    parsedString = [string.lower() for string in s if string.isalnum()]
    p1, p2 = 0, len(parsedString) - 1
    while p1 < p2:
        if parsedString[p1] != parsedString[p2]:
            return False
        p1 += 1
        p2 -= 1
    return True

print(isPalindrome("a race car"))
