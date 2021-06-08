### Question 

* https://leetcode.com/problems/binary-tree-level-order-traversal/
* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

### Step 1: Verify the Constraints

* What is level order
  * Array consisting of all elements in a particular level
  * I didn't think of all elements in a level but only the child elements
  * I initially thought of this as BFT
* What to return when root is null
  * Empty array

### Step 2: Write out some test cases

* Input: root = [3,9,20,null,null,15,7], Output: [[3],[9,20],[15,7]]
* Input: root = [1,null,2,null,3,null,4,null,5,null,6,null], Output: [[1], [2], [3], [4], [5], [6]]
* Input: root = [3,6,1,9,2,null,4,null,5,null,null,null,null,8,null,null,null], Output: [[3],[6,1],[9,2,4],[5],[8]]

### Step 3: Solution without code

* Used queue with additional data of level for each node
* Initialized i with 0 and compared it with level
  * If it is on the same level, elements are just appended to the list
  * If it is on a different level, then new list is created and old list is appended to the answer list
* Author's **first questions**
  * Is traversal necessary? YES
  * BFS or DFS? It's BFS
  * What differences from BFS?
  * Compare BFS and the final answer
    * They are the same values in order
    * Add level to above
  * 2 things to be done
    * Identify level of tree
    * Initialize our final array


### Step 4: Solution with code

* Used in-built queue collection in python
* **Don't know what to use for JS**
* Author's approach
  * Uses counter and length of queue to determine the level

### Step 5: Double check for errors

### Step 6: Walk through the Test Case

### Step 7: Time and Space Complexity

* Space Complexity: O(n)
  * I think it's O(2n), where along with the node elements, additional info of level is also stored
* Time Complexity: O(n)