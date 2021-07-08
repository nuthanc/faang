# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from math import ceil
class Solution:
    def __init__(self):
        self.level = -1

    def countNodes(self, root: TreeNode) -> int:
        self.findLastLevel(root)
        if self.level == -1 or self.level == 0:
            return self.level + 1
        countExceptLastLevel = 2 ** self.level - 1
        left = 0
        right = 2 ** self.level - 1
        lastLevelCount = self.binarySearch(root, left, right)
        return countExceptLastLevel + lastLevelCount

    def findLastLevel(self, root):
        if root:
            self.level += 1
            self.findLastLevel(root.left)

    def binarySearch(self, root, left, right):
        if left != right:
            indexToFind = ceil((left + right)/2)
            if self.checkNodeExists(root, indexToFind, 0, 2 ** self.level - 1):
                return self.binarySearch(root, indexToFind, right)
            else:
                return self.binarySearch(root, left, indexToFind-1)
        return left + 1

    def checkNodeExists(self, root, indexToFind, left, right):
        mid = ceil((left + right)/2)
        if left == right:
            return True if root else False
        elif indexToFind >= mid:
            return self.checkNodeExists(root.right, indexToFind, mid, right)
        elif indexToFind < mid:
            return self.checkNodeExists(root.left, indexToFind, left, mid-1)
        
