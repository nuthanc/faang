def backspaceCompare(S, T):
    def build(s):
        ans = []
        for ele in s:
            if ele != '#':
                ans.append(ele)
            elif ans:
                ans.pop()
        return ans
    return build(S) == build(T)


print(backspaceCompare(S="ab##", T="ab##"))
