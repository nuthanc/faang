from collections import deque
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjList = [[] for _ in range(numCourses)]
        for item in prerequisites:
            [child, parent] = item
            adjList[parent].append(child)

        for node in range(len(adjList)):
            start = node
            q = deque([start])
            seen = set()
            while len(q):
                course = q.popleft()
                seen.add(course)
                for other in adjList[course]:
                    if other == start:
                        return False
                    if other not in seen:
                        q.append(other)
        return True