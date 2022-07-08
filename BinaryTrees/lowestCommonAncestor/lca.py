# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        path1 = []
        path2 = []
        self.find(root, p, path1)
        self.find(root, q, path2)

        lca = None
        i = len(path1) - 1
        j = len(path2) - 1
        while i >= 0 and j >= 0 and path1[i] == path2[j]:
            lca = path1[i]
            i -= 1
            j -= 1
        return lca

    def find(self, root, node, path):
        if not root:
            return False
        if root == node:
            path.append(root)
            return True
        else:
            if self.find(root.left, node, path):
                path.append(root)
                return True
            if self.find(root.right, node, path):
                path.append(root)
                return True
            return False
