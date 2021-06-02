class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const maxDepth = (root, count) => {
  if (root) {
    ++count;
    return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
  }
  return count;
};

// maxDepth(root, 0)