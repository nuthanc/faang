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
 * @return {number[]}
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ['left', 'right']) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const tree = new TreeNode(1);
tree.insert([2, 3, null, 5, null, 4]);

const results = [];
let counter = 0;

var dfs = function (node, level) {
  if (node) {
    if (level === counter) {
      counter++;
      results.push(node.val);
    }
    dfs(node.right, level+1);
    dfs(node.left, level+1);
  }
}

var rightSideView = function (root) {
  dfs(root, 0);
  return results;
};

console.log(rightSideView(tree));
