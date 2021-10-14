### Two Sum

* Brute Force approach: Use 2 Loops over all the numbers to find targetToFind for current Number
* Use HashMap(Dictionary) to check for targetToFind(target - currentNum)
* Store targetToFind as key and check with currentNum

### Container with Most Water

* Brute Force approach: 2 Loops and store the max at each iteration
* 2 Pointers one at the beginning and the other at the end
* Calculate max and move the pointer which is smaller

### Trapping RainWater

* Formula: min(maxLeft, maxRight) - current
* Brute Force: 2 Pointers along with maxLeft and maxRight found by iterating in either directions from the 2 pointers
* 2 Pointers at the very end, 1 with maxLeft, leftPtr and rightPtr, the other with maxRight, rightPtr and leftPtr
* Move the pointer which is minimum
* The logic is to consider only the maxLeft or maxRight along with one of the pointers because the other is bigger than the considered pointer and is not used in the calculation
* The maxLeft or maxRight are updated if the currentPtr is greater than it

### Backspace String Compare

* Compare both the Strings from the End
* If Backspace is encountered, a counter of -2 is set and is iterated over it one by one to check if there are any Backspaces within this counter

### Longest Substring without Repeating Characters

* Dictionary and 2 pointers(i and j=i+1)
* When a repeat is found, the dictionary and i are updated
* i should be max of previous found location + 1 and i+1

### Valid Palindrome

* 3 ways
  * Two pointers 1 at the beginning and the other at the end
  * Two pointers from the middle and moving away
  * Reverse and compare with original

### Almost Palindrome

* Palindrome as subproblem
* OR operation of Remove character from 1st pointer, Remove character from 2nd pointer

### Reverse Linked List

* 3 pointers, prev, cur and next to change the links

### M, N Reversals

* Reverse Linked List as subproblem
* Key points such as M-1, N, N+1 and M

### Merge Multi-Level Doubly Linked List

* Move the second level(nodes with child property) to the first level and continue the process
* After moving the child to the first level, set child property as null

### Cycle Detection

* Hashmap
* Slow as Fast pointer(1 and 2 leaps)
* At meeting point, move that pointer 1 step at a time along with head point 1 step at a time to get the node at which cycle starts

### Valid Parentheses

* Dictionary of Open braces for fast lookup
* Pop and compare when Close braces are encountered

### Minimum Brackets To Remove To Make Valid

* Convert String to List using split
* When Open Brace is encountered, add its index to stack
* When Close Brace is encountered, pop from stack
* If Stack is empty, make the Close brace as ''(Empty string)
* At the end of string, if the stack is not empty, make all of those characters at that indices as Empty string and join them at the end to get the Solution

### Implement Queues with Stacks

* 2 Stacks
* Push to stack1 which is O(1) operation
* For Popping, if stack2 is not empty, it is O(1) operation, else remove and add from stack1(Till stack1 is empty) which is O(n) operation

### Quick Sort

* Find the partition element
  * Using the last element as pivot for comparison, start from the beginning
  * If the current element is less than or equal to pivot, swap with pointer j and advance j
* Quick sort low to partition - 1 and partition + 1 to high

### Merge Sort

* Keep on slicing till one element is found(Can use array length and slicing in Python instead of mid)
* Join using auxiliary arrays left and right
* i,j,k = 0 as indices

### Kth Largest Element

* len - k or -k
* Use partition to decide to go either left of partition or right of partition

### Start and End of Target

* Use initial binary search
* use binary search multiple times till -1 is returned
* The previous found values are stored

### Max Depth of Binary Search Tree

* Base case of if node is None, return 0
* 1 + max(dfs(root.left), dfs(root.right))
* If current_depth is passed as argument, then in Base case, current_depth is returned when node is None
* Else current_depth+=1 and return max(dfs(root.left, current_depth), dfs(root.right, current_depth))

### Level Order Of Binary Tree 

* BFS
* Queue length in a variable and update it when it becomes 0 to determine level

### Right Side View of Tree 

* BFS or DFS(rRL)
* Using Result length to determine level in DFS
* In BFS, last element in a level and level can be determined by Queue length

### Number of nodes in a complete tree

* First find the Height of the tree(Can use Iterative approach)
* Then use the formula 2^h-1 to get the Penultimate level nodes
* Use Binary search utilizing low, high and mid to get the number of nodes in the last level
* To find the nodes, start from root and utilize height of tree as a counter to get to the last level to find if Node exists or not

### Validate Binary Search Tree

* Using min, max as rules with Preorder traversal
* Or Inorder traversal

### Lowest Common Ancestor

* My logic was to find the paths for both the nodes and compare the paths for the LCA
* Author's even better approach was 
  * If a node has both the given nodes to find in its left and right subtrees, then it is the LCA
  * If a node has one of the given node in its subtree, but not the other, then the given found node is the LCA, because the second node will be in the sub-trees of the first node

### Max Heap/Priority Queue

* heapq data structure in Python(heappush and heapop on given array)
* Insert the element at the end
* siftUp the element until it is in its right place
  * compare is true AND >=0
* For deletion, swap first with last element and pop the last element
* siftDown the first element until it is in its right place
  * left and right child exists AND compare is true

### DFS in 2D-Arrays

* Use directions array
* Move continously in one direction till you reach some boundaries or is already visited before moving on to the next direction
* Use of Stack or Recursion and seen Set

### BFS in 2D-Arrays

* Use of Queues and seen Set
* Move in Radial direction

### Number of Islands

* Sequential traversal and upon encountering 1 BFS or DFS to all 1 regions and turn them to 0s and update counter

### Rotting Oranges

* Initial traversal to add to Queue all rotting oranges and keep count of Fresh oranges
* Later BFS and using Queue size decrement the timer

### Walls and Gates

* Sequentially traverse and upon encountering Gates, BFS and DFS and update the empty rooms

### BFS Graph traversal

* Using adjacency list or adjacency matrix and add to Queue all unseen elements

### DFS Graph traversal

* Using adjacency list or adjacency matrix and Recursion with seen Set

### Time Needed To Inform all Employees

* max of all Child elements using DFS + add timeNeededToInform from that Manager

### Course Scheduler

* Cycle detection using Topological Sort
  * It is based on Indegree
  * Get nodes with Indegree of 0 and remove the connections from that node to other nodes

### Network Delay Time

* Dijkstra's or Bellman Ford Algorithm
* Dijkstra's using Priority Queue
  * Distances array of all nodes to keep track of min distance from src node
  * Src node of 0 and rest Infinity
  * dist[src] + w < dist[neighbor]
* Bellman Ford Algorithm
  * Dynamic Programming
  * n-1 iterations over the Edges
  * Distances array of all nodes to keep track of min distance from src node
  * Src node of 0 and rest Infinity
  * dist[src] + w < dist[neighbor]

### Minimum Cost of Climbing Stairs

* Think of the final state, top of stairs
* It can be reached via n-1 and n-2, so get minCost of those 2 added with current stair cost
* Base case of stair 1 and stair 2 being their values and anything below that as 0
* Iterative start from stair 1 and stair as their base cases

### Knight Probability in Chessboard

* Knight Within bounds and k=0, then return 1
* Else result += eight directions prob/8

### Sudoku Solver

* Add numbers from 1 to 8 using a loop
* Decide whether to recurse further based on row set, column set and box set
* Remove that number

### N-Queens

* Add Queen in a particular column(Loop for this)
* Decide if it is not attacking
* Remove
* Base condition when row is out of bounds, add colPlacements to result

### Interface Design

* isAlive and DFS traversal
* Name of person as dictionary key and Person object as value for fast lookup

### Tries

* Trie Node with keys and isEnd
* Use currentNode = root and use iterative approach