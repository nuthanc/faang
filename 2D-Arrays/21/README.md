### Question

* https://leetcode.com/problems/rotting-oranges/
* You are given an m x n grid where each cell can have one of three values:
```txt
0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
```

### Step 1: Verify the Constraints

* Empty grid: Return 0
* All Fresh with or without empty cells: Return -1
* All Rotten with or without empty cells: Return 0

### Step 2: Write some test cases

* [] : -1
* [0] : -1
* [[1,0],[0,1]] : -1
* [[2,2],[0,2]] : 0
* [[1,1,1,1,2,0], [0,2,2,0,1,1], [0,1,0,1,0,2]]: -1
* [[1,1,1,1,2,0], [0,2,2,1,1,1], [0,1,0,1,0,2]]: -1

### Step 3: Solution without code

* Create one more array called cost_matrix which has all values of 0
* Traverse matrix sequentially and when you encounter 2
  * BFS or DFS to all elements which have 1 and cost of that neighbor is either 0 or cost[cur] + 1 < cost[neighbor]
  * Update cost matrix for that neighbor and make it current and follow the above step
* After everything is done, take cost_matrix and
  * If for values of 1 in matrix, the cost is not 0
    * Then take maximum in cost_matrix and return it
  * Else
    * Return -1