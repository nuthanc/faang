
def isValid(s):
    if s == "":
        return True
    stack = []
    for ch in s:
        if ch == '(' or ch == '{' or ch == '[':
            stack.append(ch)
        else:
            if len(stack) > 0:
                popped = stack.pop()
                if ch == '}':
                    if popped == '{':
                        continue
                    else:
                        return False
                elif ch == ')':
                    if popped == '(':
                        continue
                    else:
                        return False
                elif ch == ']': 
                    if popped == '[':
                        continue
                    else:
                        return False
                else:
                    return False
            else:
                return False
    if len(stack):
        return False
    else:
        return True # Made mistake of returning True as soon as for loop is done

ch = '([])'
print(isValid(ch))
