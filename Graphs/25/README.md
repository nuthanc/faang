### Question

```txt
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
```

### Step 1: Verify the Constraints

* Can the graph be unconnected
  * Yes and return -1
* Empty graph
* Can time(weight) be negative integers
  * No

### Step 2: Write out some test cases

* [[1,2,10], [1,3,2], [1,4,3], [3,2,4], [4,5,7], [5,2,6], [5,1,4]]
* **Author's**
![ndt](../../img/ndt.png)

### Step 3: Solution without code

* **Author's approach**
* This question is an **Optimization question(minimum value or maximum value)**
* If the question asks for Shortest path for a given source node in a Weighted directed Graph, then we already have 2 algorithms for it
* DFS and BFS are very verbose and time-consuming
* Check Dijkstra's algorithm in Graphs README
* 