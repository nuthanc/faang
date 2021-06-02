### Question

* https://leetcode.com/problems/maximum-depth-of-binary-tree/
* Given the root of a binary tree, return its maximum depth.
* A binary tree's maximum depth is the **number of nodes** along the longest path from the root node down to the farthest leaf node.

### Step 1: Verify the Constraints

* What to return when tree is empty: 0

### Step 2: Test Cases

* root = [3,9,20,null,null,15,7]
  * 3
* root = []
  * 0
* Worst case is only nodes on one side
  * root = [1,null,2,null,3,null,4,null,5,null,6,null]
    * 6 

### Step 3: Solution without code

* Starting point is for empty node, must return 0
* Next is for BT consisting of only one node, must return 1
* The above is the base case, i.e. return 0 when root is null
* Else traverse throught left and right child and return the max of it
#### Author's questions
* Do I need to traverse this tree? Yes
  * 2 ways: BFS and DFS
    * BFS is not suitable for this
    * DFS is very suitable for our need
  * Traversal type: Preorder, Inorder and Postorder
    * But we do not care about the value
    * So any of this
* Think of a recursive approach since iterative will be complicated for tree and graph problems
* Think of the base cases
* Even count was used in function call
  * I think this is for tail recursion
  * In my way of code, there is still computation left
  * But even in Author's approach, max computation is still hanging

### Step 4: Solution with code

### Step 5: Double check for Errors

### Step 6: Walk through the test cases

### Step 7: Time and Space Complexity

* Space Complexity: Size of recursion in worst case is size of the tree: O(n)
  * i.e. Nodes only on right side or left side
* Time Complexity: O(n)
  * Will visit all the nodes