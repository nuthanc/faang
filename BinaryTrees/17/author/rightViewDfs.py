from collections import deque
class Solution:
    def __init__(self):
        self.results = []
        
    def rightSideView(self, root: TreeNode) -> List[int]:
        self.dfs(root, 0)
        return self.results

    def dfs(self, node, level):
        if node:
            if level == len(self.results):  # Here, author had >=
                self.results.append(node.val)
            self.dfs(node.right, level+1)
            self.dfs(node.left, level+1)
