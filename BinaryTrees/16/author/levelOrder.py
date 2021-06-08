# Definition for a binary tree node.
from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        q = deque()
        q.append(root)
        ans = []
        li = []
        counter = 0
        numberToProcess = 1
        while len(q):
            node = q.popleft()
            li.append(node.val)
            counter += 1

            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
            
            if counter == numberToProcess:
                ans.append(li)
                li = []
                counter = 0
                numberToProcess = len(q)
        return ans
