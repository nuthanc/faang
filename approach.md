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