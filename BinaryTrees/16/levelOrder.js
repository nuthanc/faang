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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let q = []
  const ans = []
  let li = []
  let i = -1
  q.push([root, 0])
  while(q.length){
    [node, level] = q.shift();
    if (node.left) q.push([node.left, level+1])
    if (node.right) q.push([node.right, level+1])
    if (i !== level) {
      if (li.length) ans.push(li)
      li = []
      li.push(node.val)
      i++;
    } else {
      li.push(node.val)
    }
  }
  ans.push(li);
  return ans;
};
