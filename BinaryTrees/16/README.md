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
  * 3 things to be done
    * Identify level of tree
    * Initialize our final array
    * Push array into result
  * Queue contains only root initially, which is at level 1 and queue has length of 0
  * This means it has only one element to process at level 1
  * After that is removed and its children are appended, they are the elements of level 2. So the length of queue determines the level, which is equivalent to elements to process at a level 


### Step 4: Solution with code

* Used in-built queue collection in python
* **Don't know what to use for JS**
* Author's approach
  * Uses counter and length of queue to determine the level
  * Did initialization in while loop, whereas I did it outside
  * Author used another while loop to separate out the regular BFS
  * Outside while loop for the levels and the internal while loop for the regular BFS along with pushing of elements in a level
### Step 5: Double check for errors

### Step 6: Walk through the Test Case

### Step 7: Time and Space Complexity

* Space Complexity: O(2n) ~ O(n)
  * Scaling data structures of result, queue
  * result will hold all elements of the tree, so O(n)
  * queue: Size at largest is the size of the fattest level(which inside a full complete binary tree N/2)
    * Bottom level of full bt is size of all the previous levels + 1(So, it's N/2 + 1)
    * So Space complexity of queue is O(n/2) ~ O(n)
* Time Complexity: O(n)
  * Touch every node once