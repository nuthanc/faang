### Question

* https://leetcode.com/problems/sudoku-solver/
```txt
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
```

### Step 1: Verify the Constrainsts

### Step 2: Write out some Test Cases

### Step 3: Solution without Code

* Value being added is valid is the main logic
* Core of the problem in BT is Decision and little nuances like the Constraints for the question

### Step 7: Time and Space Complexity

* Comparing With Brute force
  * Time Complexity: O(9^81)
    * When nothing is filled
    * You don't care about constraints, you try every possibility
    * Each of the cells has 9 possibilities
    * So 9 possibilities 81 times
* With Backtracking
  * Time Complexity: O(9!^9)
    * Due to having constrainsts, first cell 9, then 8, 7...
    * Which is 9*8*7*6*5...1
    * So it's 9! for 1 row
    * So 9! * 9!.....9 times
    * Process is figuring out what values we are eliminating and thinking about the numerical math that will yield the actual time improvements
    * In this question, the board size is fixed
    * Then, it's n or m values instead of 9
  * Space Complexity: O(81) ~O(1)
    * Max call stack size from 1 cell to last cell
    * Set size so O(1) which is constant because of Constant space
      * We don't have to scale up or down as the input doesn't change

