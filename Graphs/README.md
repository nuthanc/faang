### Graphs

* Collection of nodes(vertex) and connections(edges)
* Nodes can have any number of connections
* Possibilities of Cycle(Circular connection)
* Undirected and Directed
* Unweighted(No weight to edges) and Weighted
* Unconnected Graph(Entirety of all nodes not connected as one Structure)
* All Trees are Graphs, but not all Graphs are Trees
* Binary Tree as a Directed Graph
* 2D arrays also represent Graph

### Representation of Graphs

* Adjacency List and Adjacency Matrix

### Adjacency List

![al](../img/al.png)
![al2](../img/al2.png)
* List or Object 
* List where Index value corresponds to nodes
* Nodes attached as value to the index

### Adjacency Matrix

![am](../img/am.png)

### BFS

![bfsGraph](../img/bfsGraph.png)

### DFS

![dfsGraph](../img/dfsAL.png)

### Dijkstra's Algorithm

* Greedy method Algorithm
  * It's an algorithm paradigm(way that we tackle problems)
  * Only applies when working with Optimization problems(Max or Min value)
  * If decision needs to be made between all the options, it picks the one that gets to the optimum solution
  * Limitations of Greedy:
  * ![glim](../img/glim.png)
  * It chooses 2(between 2 and 4), 5(between 5 and 6) and 10: 17
  * But there are better paths
  * ![glim2](../img/glim2.png)
  * Doesn't care about the future steps, just thinks about what is the greediest path right now
* Dijkstra's takes the concept of Greedy and utilizes in a way that covers the above weakness
* Dijkstra's Algorithm can only be applied to Graphs that are Directed and Weighted(Non-negative)
  * Allows to find the Shortest possible path we can take to reach each of the different nodes
* Initial array containing Infinity to all the nodes
  * Put zero to the starting node's value
  * If we can directly travel from start node, then we update that value, else leave as it is
  * Close off the starting node, we are never going back to it
* Next choose the smallest value in the Array and repeat the above process and updating only if it shorter than the previous