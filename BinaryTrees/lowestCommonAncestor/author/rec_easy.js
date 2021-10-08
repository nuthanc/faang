/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }

  // one of the nodes have been found, return it
  if (root === p || root === q) {
    return root;
  }

  // look for both nodes in both sub-trees
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If both left and right subtrees are not null, I'm LCA
  if (left !== null && right !== null) {
    return root;
  }

  // If an ancestor is return it, else null
  return left !== null ? left : right;
};
