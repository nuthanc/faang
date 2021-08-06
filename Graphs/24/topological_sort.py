from collections import deque


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjList = [[] for _ in range(numCourses)]
        indegree = [0]*numCourses
        for item in prerequisites:
            [child, parent] = item
            adjList[parent].append(child)
            indegree[child] += 1
        num = 0
        stack = []

        for v in range(numCourses):
            if indegree[v] == 0:
                stack.append(v)

        while len(stack):
            v = stack.pop()
            num += 1
            for node in adjList[v]:
                indegree[node] -= 1
                if indegree[node] == 0:
                    stack.append(node)
        
        return True if num == numCourses else False
# Time : O(n)
# Space: O(n^2)