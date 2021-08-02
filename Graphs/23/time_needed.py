class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        if n <= 1:
            return 0
        direct_sub = {}
        for i, ele in enumerate(manager):
            if ele > -1:
                if direct_sub.get(ele):
                    direct_sub[ele].append(i)
                else:
                    direct_sub[ele] = [i]

        timeFromHead = [0]*n

        for ele in direct_sub.get(headID):
            timeFromHead[ele] = informTime[headID]

        employees = direct_sub.get(headID)
        maxTime = informTime[headID]

        while len(employees) > 0:
            emp = employees.pop()
            informTimeToSub = timeFromHead[emp] + informTime[emp]
            maxTime = max(maxTime, informTimeToSub)
            if direct_sub.get(emp):
                for sub in direct_sub[emp]:
                    timeFromHead[sub] = informTimeToSub
                    employees.append(sub)
        return maxTime

s = Solution()
s.numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0])


