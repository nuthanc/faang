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
 * @return {boolean}
 */
let lastSeenValue = null;
let valid = true;

var isValidBST = function (root) {
  inOrder(root);
  return valid;
};

var inOrder = function (root, prev) {
  if (root && valid) {
    inOrder(root.left);
    if (lastSeenValue !== null && root.val <= lastSeenValue) {
      valid = false;
      return;
    }
    lastSeenValue = root.val;
    if (valid) inOrder(root.right);
  }
};
