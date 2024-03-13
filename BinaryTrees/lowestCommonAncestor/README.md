### Lowest Common Ancestor of a Binary Tree

* https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
* Super approach: https://medium.com/analytics-vidhya/lowest-common-ancestor-of-a-binary-tree-day-10-python-be7d09791ba2
```txt
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
```

### Step 1: Verify the Constraints

* Is it a Binary Search Tree? Can be
* Are there Repeats? No, all are unique
* Can the 2 nodes be the same? No
* Will the 2 nodes be always in the tree? Yes
* Can lowest common ancestor be one of the 2 nodes? Yes
* Will there always be a solution? Yes
* **Forgot to check what to return, whether Node or value?** It's node

### Step 2: Write some test cases

* Lowest Common Ancestor in Faang Play Area

### Step 3: Solution without code

* Find path of p from root and similarly for q
* Then in the paths find for lowest common element

### Step 4: Solution with code
* Super approaches in https://medium.com/analytics-vidhya/lowest-common-ancestor-of-a-binary-tree-day-10-python-be7d09791ba2

### Step 5: Double Check for Errors

### Step 6: Walk through the test cases

### Step 7: Time and Space Complexity

* Time Complexity: O(n)
  * To find p and q, O(2n)
  * To find lca in path1 and path2, O(n)
* Space Complexity: O(n)
  * path1 and path2, O(2n)