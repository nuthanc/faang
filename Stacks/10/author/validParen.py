
def isValid(s):
    if len(s) == 0: return True

    parens = {
        '(':')',
        '{':'}',
        '[':']'
    }
    stack = []

    for ch in s:
        if parens.get(ch):
            stack.append(ch)
        else:
            if len(stack):
                leftParen = stack.pop()
                if parens[leftParen] != ch:
                    return False
            else:
                return False
    return len(stack) == 0


ch = '([])'
print(isValid(ch))
