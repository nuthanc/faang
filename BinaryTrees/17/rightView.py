# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if not root: return []
            q = deque()
            q.append(root)
            node = None
            result = []
            while len(q):
                count = 0
                length = len(q)
                while count < length:
                    node = q.popleft()
                    if node.left: q.append(node.left)
                    if node.right: q.append(node.right)
                    count += 1
                result.append(node.val)
            return result