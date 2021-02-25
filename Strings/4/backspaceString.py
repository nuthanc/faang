def backspaceCompare(S,T):
    firstString, secondString = "", ""
    for ele in S:
        if ele == '#':
            firstString = firstString[:len(firstString)-1]
        else:
            firstString += ele
    for ele in T:
        if ele == '#':
            secondString = secondString[:len(secondString)-1]
        else:
            secondString += ele
    if firstString == secondString:
        return True
    else:
        return False

print(backspaceCompare(S="ab##", T="ab"))
