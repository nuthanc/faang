class Solution:
    def __init__(self):
        self.valid = True

    def isValidBST(self, root: TreeNode) -> bool:
        self.preorder(root, None, None)
        return self.valid

    def preorder(self, root, lt, gt):
        if root and self.valid:
            if lt is not None:
                if root.val >= lt: 
                    self.valid = False
                    return
            if gt is not None:
                if root.val <= gt:
                    self.valid = False
                    return
            if self.valid:
                self.preorder(root.left, root.val, gt)
                self.preorder(root.right, lt, root.val)
