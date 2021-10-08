class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root==null)
            return null;
        
        //one of the nodes has been found. return it
        if(root.val==p.val || root.val==q.val)
            return root;
        
        //look for both nodes in both sub-trees
        TreeNode ancestorInLeftSubTree = lowestCommonAncestor(root.left, p, q);
        TreeNode ancestorInRightSubTree = lowestCommonAncestor(root.right, p, q);
        
        //if p & q were found in different sub-trees. I am the LCA
        if(ancestorInLeftSubTree!=null && ancestorInRightSubTree!=null)
            return root;
        
        //if an ancestor was found, return it. Else, return null. 
        return (ancestorInLeftSubTree!=null) ? ancestorInLeftSubTree : ancestorInRightSubTree;
    }
}