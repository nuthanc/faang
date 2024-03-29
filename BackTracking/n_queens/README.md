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

* Decision and adding board to a separate array called result is the main thing

### Step 5: Double check for Errors

### Step 6: Walk through the Test Case

### Step 7: Time and Space Complexity

* Time Complexity: O(n!)
  * Consider 4x4 board, in 1st row Queen can be placed in 4 positions, 2nd row 3 positions, 3rd row 2 positions...
  * This is n! as 4 x 3 x 2 x 1
* Space Complexity: O(n^2)
  * Max depth of recursive stack is till n
  * Board n x n Grid
  * With author's approach, it is O(n)