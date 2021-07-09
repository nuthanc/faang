# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.lastSeenValue = None
        self.valid = True

    def isValidBST(self, root: TreeNode) -> bool:
        self.inOrder(root)
        return self.valid


    def inOrder(self, root):
        if root and self.valid:
            self.inOrder(root.left)
            if self.lastSeenValue is not None and root.val <= self.lastSeenValue:
                self.valid = False
                return
            self.lastSeenValue = root.val
            if self.valid:
                self.inOrder(root.right)