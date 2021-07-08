/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  const level = findLastLevel(root, -1);
  if (level === -1 || level === 0) return level + 1;
  const countExceptLastLevel = 2 ** level - 1;
  const countLastLevel = binarySearch(
    root,
    0,
    countExceptLastLevel,
    countExceptLastLevel
  );
  return countExceptLastLevel + countLastLevel;
};

var findLastLevel = function (root, level) {
  if (root) {
    level++;
    return findLastLevel(root.left, level);
  }
  return level;
};

var binarySearch = function (root, left, right, fullRightRange) {
  if (left !== right) {
    const indexToFind = Math.ceil((left + right) / 2);
    if (checkNodeExists(root, indexToFind, 0, fullRightRange)) {
      return binarySearch(root, indexToFind, right, fullRightRange);
    } else {
      return binarySearch(root, left, indexToFind - 1, fullRightRange);
    }
  }
  return left + 1;
};

var checkNodeExists = function (root, indexToFind, left, right) {
  const mid = Math.ceil((left + right) / 2);
  if (left === right) return root ? true : false;
  else if (indexToFind >= mid)
    return checkNodeExists(root.right, indexToFind, mid, right);
  else return checkNodeExists(root.left, indexToFind, left, mid - 1);
};
