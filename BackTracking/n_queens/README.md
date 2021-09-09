### Question

* https://leetcode.com/problems/n-queens/
```txt
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
```

### Step 1: Verify the Constraints

* What to return when n = 0
  * n starts from 1
* What to return when there is no solution
  * For ex, in 2x2 chessboard, there is no possibility
  * Empty 2d array?

### Step 2: Test Cases

* n = 4
  * [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
* n = 2
  * [[]] or dots in all cells
* n = 1
  * [["Q"]]

### Step 3: Solution without code

* Candidate for Backtracking because we need to try all possible combinations with the Constraint of no 2 queens attacking each other
* Backtracking steps:
  * Addition
    * What to add: Queen
    * Where: row, col
  * Decision
    * Row, Col sets and Side(Increase and Decrease i and j)
  * Removal

### Step 4: Solution with code
