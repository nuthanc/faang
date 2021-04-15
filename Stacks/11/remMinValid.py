def minRemoveToMakeValid(s):
    i = 0
    l = len(s)
    if l == 0: return s
    valid = ""
    invalid = set()
    stack = []
    while i < l:
        ch = s[i]
        if ch == '(':
            stack.append(i)
        elif ch == ')':
            if len(stack) > 0:
                stack.pop()
            else:
                invalid.add(i)
        i += 1
    while len(stack) > 0:
        invalid.add(stack.pop())
    j = 0
    while j < l:
        if j not in invalid:
            valid += s[j]
        j += 1
    return valid


s = "(a(b(c)d)"
print(minRemoveToMakeValid(s))
