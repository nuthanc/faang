let valid = true;

var isValidBST = function (root) {
  preorder(root, null, null);
  return valid;
};

var preorder = function (root, lt, gt) {
  if (root && valid) {
    if (lt !== null){
      if (root.val >= lt) {
        valid = false
        return;
      }
    }
    if (gt !== null) {
      if (root.val <= gt) {
        valid = false;
        return;
      }
    }
    if (valid) {
      preorder(root.left, root.val, gt);
      preorder(root.right, lt, root.val);
    }
  }
};
