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
  if (!root) return [];
  let q = [root];
  numberToProcess = 1;
  const ans = [];
  let li = [];
  let counter = 0;
  while (q.length) {
    node = q.shift();
    li.push(node.val);
    counter++;
    
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);

    if (counter === numberToProcess) {
      ans.push(li);
      li = [];
      counter = 0;
      numberToProcess = q.length;
    }
  }
  return ans;
};
