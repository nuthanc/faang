### BFS and DFS

* BFS: Level by level
  * Queue implementation
  * Requires extra memory to hold all the children at a level
* DFS: As deep as possible
  * Stack implementation
  * Doesn't require extra memory

### When to use one over the other

* Time complexity: O(n)
* BFS
  * **Shortest Path**
  * If the solution is not far from the root of the tree: Easier search
  * Closer Nodes
  * Downside: Requires More memory
* DFS
  * Less Memory
  * Solution is located deep in the tree: Easier search
  * Determining **whether a path exists** between 2 nodes
  * Downside: Can Get Slow