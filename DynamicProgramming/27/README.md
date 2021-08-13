### Question

* https://leetcode.com/problems/knight-probability-in-chessboard/
```txt
On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).

A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly k moves or has moved off the chessboard.

Return the probability that the knight remains on the board after it has stopped moving.
```

* **Break down the Question** when you get it like this
* We get the n value
  * We get to know the rows and columns from this
* row and column which are the starting values for the Knight
* k value
  * How many steps this Knight will end up moving
* 8 possible ways the Knight can move 
![kprob](../../img/kprob.png)

### Step 1: Verify the Constraints

* Will the Chessboard be big enough for atleast 1 valid Knight move
* Valid row and col values?
* Zero moves, what to return?
* **Author's**
* How many decimals do we round to?
  * Don't round, leave the answer as is

### Step 2: Write out some test cases

![ktc](../../img/ktc.png)
* Get test case from Interviewer
* Get k value to 3 when you are running
* Edge cases when n=0, k can be whatever for this: Return 0
* Also where n=2, k=3, r=1, c=1
  * The knight will move off the grid
* Case where k=0
  * Probability should be 1

### Step 3: Solution without code

* How to **realize it's a dp question**
  * Here there is nothing to do with minimum or maximum
  * Instead, think of what dp does for you
  * It *optimizes the process of generating all of the possible solutions that exist*
  * In this question, we are trying to get the overall probability of the knight staying on the Chessboard after making k moves
  * We have to generate the different possible paths the knight can take and combine all of them together to get the overall probability for this question
  * The fact that we need to generate all the possible paths tell you that DP can probably help you
  * Main thing we need to see here is whether or not there is an *overlap* in the possible paths we can take
  * Run through a simulation and force the knight to take an overlapping path along its way of taking different unique paths
  * [Overlapping path](../../img/op.png)
  * There is Wasted steps that we could make and DP can help us out
* Get the Recurrence relation
  * To begin, we need to get a Generic formula that guides our logic of how our Recursive solution works
  * The Recursive solution would be Brute force(i.e no Memoization in the beginning)
  * To get Recursive solution
    * We need to think what is the main Problem we are trying to solve?
    * Can we break this down into smaller but Repeated sub-problems
    * The Subproblem should look like a reflection of the Main problem
* Define some type of function that represents our Recursive function
  * knightP(k,r,c) 
  * We are gonna receive Arguments and there is a relationship between the Arguments that we get and the Arguments that we pass to our subsequent Recursive function calls
  * n value is static and there is no relationship, i.e we don't vary the size of the Chessboard
  * The probability is determined based on where on the Chessboard the knight is placed, so row and column has a relationship(Impact on the probability)
    * The next possible row and column value we can take is dependent on current row and column values
  * k is definitely an argument because it has an impact whether the Knight stays or moves out of the Chessboard
    * When k is zero and the knight is in the Chessboard, then the Knight stays on the Chessboard(Prob of 1)
    * But when k is non-zero, the knight can be in the Chessboard or off the Chessboard after k moves
    * Next recursive call needs to subtract 1 from k
  * ![formula](../../img/kform.png)

### Step 4: Solution with code

* Use Recursion and while calling the next direction divide by 8(Because it is one of the 8 directions)

### Step 5: Double Check for Errors

### Step 6: Walk through the Test case

### Step 7: Time and Space Complexity

* Brute Force
  * Time Complexity: O(8^k)
    * Loop over 8 different directions to perform 8 different recursive calls 
    * Over k levels expanding 8 directions every time
  * Space Complexity: O(8^k)
    * Stack for 8^k recursive calls

### Step 8: Optimize Solution