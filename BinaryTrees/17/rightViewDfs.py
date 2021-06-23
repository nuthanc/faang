# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque


class Solution:
    def __init__(self):
        self.results = []
        self.counter = 0

    def rightSideView(self, root: TreeNode) -> List[int]:
        self.dfs(root, 0)
        return self.results

    def dfs(self, node, level):
        if node:
            if level == self.counter:
                self.counter += 1
                self.results.append(node.val)
            self.dfs(node.right, level+1)
            self.dfs(node.left, level+1)
