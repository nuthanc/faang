### Question 

* https://leetcode.com/problems/binary-tree-right-side-view/
* Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

### Step 1: Verify the Constrainsts

* What to return when root is null
  * Empty array

### Step 2: Test cases

* Right completely obstructing the left
* Right partially obstructing the left
* No obstruction
![Right view](../../img/rightView.png)
* Things to account for when coming up with Test Case
  * There are nodes which we cannot see when we are on the Right side of the Tree
  * Nodes also on the left branch of the Tree that are not obstructed
  * Null case, return empty array
  * Single value, return array with single value

### Step 3: Solution without code

* BFS Answer
  * Last element at every level
* DFS Answer
  * Start with Preorder of rRL
  * Use global counter and level passed to each node to check whether level is equal to counter and push the result
* * Author's **first questions**
  * Is traversal necessary? YES
  * BFS or DFS? Both can be done
* For BFS
  * Identify the end of the level
  * Add last node to result
* For DFS
  * Prioritize right side
  * Keep track of level
  * Changing order of traversal with R first and then L and see values for Preorder, Inorder and Postorder
    * This is an awesome technique
    * Don't force answer from existing Traversal
    * See the overall pattern and make changes accordingly
  * First time an element shows up in a level for Preorder is the element in the result
### Step 4: Solution with code

* Author used currentNode(node in my case) in the while block, whereas I used it in the function block
* Author used length of results array for level check instead of my counter
* Also for DFS solution, he used result as a parameter for dfs
  * Concatenating result from base case for every recursive call is difficult, so passed it as an argument
  * Referencing the same global array
* The author also adds condition for node.right and node.left

### Step 5: Double check for errors

### Step 6: Walk through the test cases

### Step 7: Time and Space Complexity

* Time Complexity: O(n)
  * Exploring the whole Tree
* Space Complexity: O(n)
  * Size of Recursion stack is O(n)
  * with dfs, it is O(h), where h is the height of the tree. Worst case is when the Tree is skewed(like only on one side)
  * with bfs, it is O(w), where w is the fattest part of the tree. Worst case is when the Tree is Full or Complete BT