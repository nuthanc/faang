# https://www.interviewbit.com/problems/regular-expression-ii/
# https://leetcode.com/problems/regular-expression-matching/

'''
### Step 1: Verify the Constraints

* Empty strings equal? Yes
* Casing matters? yes
* Can there be consecutive *?
* Regular expression always valid(i.e no mistake while providing the pattern)? Yes

### Step 2: Test Cases

* aa, a -> 0
* aa, aa -> 1
* aa, .. -> 1
* abcd, a.*d -> 1
* abc, .*d -> 0
* abcd, .*d -> 1
* acd, ab*cd -> 1
* aaaa, a* -> 1

### Step 3: Solution without code

* Compare one character at a time from the ends
* 3 possibilites from pattern, (.*ch)
    * If *, then previous ch can be . or ch
        * If it is ., it can match any ch
        * If it is ch, then match till they are equal and come out when they are not equal
    * If ch, then check if both are equal
* Lazy match when it is *
'''


class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        return self.check(len(s)-1, len(p)-1, s, p)

    def check(self, ind_s, ind_p, s, p):
        if ind_s < 0 and ind_p < 0:
            return True
        elif ind_s < 0 or ind_p < 0:
            return False
        else:
            if p[ind_p] == '*':
                preceding = p[ind_p-1]
                if preceding == '.':
                    if ind_p - 1 == 0:
                        return True
                    while ind_s >= 0:
                        if self.check(ind_s, ind_p-2, s, p):
                            return True
                        ind_s -= 1
                else:
                    if ind_p - 1 == 0: # Need to check here and finally through example
                        return True
                    while ind_s >= 0:
                        if self.check(ind_s, ind_p-2, s, p):
                            return True
                        if p[ind_p-1] == s[ind_s]:
                            ind_s -= 1
                        else:
                            return False
            elif p[ind_p] == '.':
                return self.check(ind_s-1, ind_p-1, s, p)
            else:
                if p[ind_p] != s[ind_s]:
                    return False
                return self.check(ind_s-1, ind_p-1, s, p)
