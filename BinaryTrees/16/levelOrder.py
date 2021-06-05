# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from collections import deque

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        q = deque()
        ans = []
        li = None
        i = -1
        q.append((root, 0))
        while len(q):
            node, level = q.popleft()
            if node.left:
                q.append((node.left, level+1))
            if node.right:
                q.append((node.right, level+1))
            if i != level:
                if li: # Be careful here in JS
                    ans.append(li)
                li = []
                li.append(node.val)
                i += 1
            else:
                li.append(node.val)
        ans.append(li)
        return ans