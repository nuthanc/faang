# https://leetcode.com/problems/gas-station/
# Greedy

class Solution:
    def canCompleteCircuit(self, gas, cost):
        # algorithm: Greedy
        # step1: pick a point as the reference point j
        # step2: check the remaining gas (aij) for each point i to the reference point
        # step3: the largest one is the answer, if it is larger than 0
        # time complexity: O(n)
        # space complexity: O(1)

        # what should we pick if we know a circular rotine exist? a15, a25, a35, a45, a55
        # we should pick the maximun one (greedy)
        # if i is the start point
        # i should have the largest remaining gas for each arriving point
        max_ = 0
        rem = 0
        start = -1
        for i in range(len(gas)-1, -1, -1):
            rem += gas[i]-cost[i]
            print(i, rem)
            if max_ <= rem:
                max_ = rem
                start = i
        return -1 if rem < 0 else start


gas = [1, 2, 3, 4, 5]
cost = [3, 4, 5, 1, 2]
# gas = [2, 3, 4]
# cost = [3, 4, 3]
s = Solution()
print(s.canCompleteCircuit(gas, cost))
