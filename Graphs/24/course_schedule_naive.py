class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjList = [[] for _ in range(numCourses)]
        for item in prerequisites:
            [child, parent] = item
            adjList[parent].append(child)

        for node in range(len(adjList)):
            seen = set()
            finish = self.dfs(node, adjList, seen)
            if not finish:
                return False
        return True

    def dfs(self, node, adjList, seen):
        if len(adjList[node]) == 0:
            return True
        children = adjList[node]
        seen.add(node)
        for child in children:
            if child not in seen:
                no_loop = self.dfs(child, adjList, seen.copy()) #Here copy of set should be done, else change reflected in the previous call, will affect the next
                if not no_loop:
                    return False
            else:
                return False
        return True
