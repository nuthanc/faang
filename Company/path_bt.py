'''
1. Verify the Constraints:
* Binary tree is not sorted
* Repeats in BT? Yes (But let's assume distinct for now)
* 2 numbers will be unique? And if there are repeats for that?

2. Test cases
* 2 numbers in same subtree -> [left, left, right] [right, right, right]
* 2 numbers in different subtree -> [left, left] [right, ]
* 2nd number parent of 1st number
* 1st number parent of 2nd number
* 1st number is root
* 2nd number is root

3. Solution without code
* My Google Approach:
    * Find 1st number and add ancestors to set
    * Find 2nd number and check if ancestor is already in set
    * Then make that element as closest
    * closest to 1st number path and inverse the path -> left, right to up, up
    * closest to 2nd number(I think this can be covered while finding 2nd number itself)
    * Set doesn't work because for the second number it will go in the same path as the first number, thereby encountering similar node but during remove step of set, I'm removing only from ancestors and not reassigning closest
    * And because of the above, I don't get the correct closest ancestor

* I can check in code itself

* Instead of this, we can get the answer directly from path1 and path2 itself
    * If first_pos is not None and len(path1) == 0, then answer is path2 inverse
    * If second_pos is not None and len(path2) == 0, then answer is all left and rights converted to UP
    * 
'''


class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def getNode(val):
    return Node(val)

def path(root, num1, num2):
    path1 = []
    path2 = []
    result = []
    first_pos = find(root, num1, path1)
    second_pos = find(root, num2, path2)

    if first_pos and len(path1) == 0:
        while len(path2) != 0:
            result.append(path2.pop())
    elif second_pos and len(path2) == 0:
        while len(path1) != 0:
            result.append('up')
            path1.pop()
    elif first_pos and second_pos:
        while path1 and path2 and path1[-1] == path2[-1]:
            path1.pop()
            path2.pop()
        while len(path1) != 0:
            result.append('up')
            path1.pop()
        while len(path2) != 0:
            result.append(path2.pop())
    print("Result: ", result)


def find(root, num, path):
    if not root:
        return None
    if root.val == num:
        return root
    else:
        found_item = find(root.left, num, path)
        if found_item:
            path.append('left')
            return found_item

        found_item = find(root.right, num, path)
        if found_item:
            path.append('right')
            return found_item

if __name__ == '__main__':
    root = getNode(0)
    root.left = getNode(1)
    root.left.left = getNode(3)
    root.left.left.left = getNode(7)
    root.left.right = getNode(4)
    root.left.right.left = getNode(8)
    root.left.right.right = getNode(9)
    root.right = getNode(2)
    root.right.left = getNode(5)
    root.right.right = getNode(6)
    node1=7
    node2=4
    path(root, 7, 4)
    # root = getNode(1)
    # root.left = getNode(2)
    # root.left.left = getNode(4)
    # root.right = getNode(3)
    # root.right.left = getNode(5)
    # root.right.left.left = getNode(7)
    # root.right.right = getNode(6)
    # root.right.right.right = getNode(8)
    # node1 = 7
    # node2 = 8
    # path(root, 7, 8)
# [3,1,0] [1,0]