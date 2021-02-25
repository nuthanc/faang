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
    return firstString == secondString

print(backspaceCompare(S="ab##", T=""))
