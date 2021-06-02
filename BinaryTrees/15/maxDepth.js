class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const maxDepth = (root) => {
  if (root) {
    return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
  }
  return 0;
};
