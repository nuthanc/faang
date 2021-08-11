### Dynamic Programming

* Check **Graph's README** for Greedy and Dynamic Topics

### How to Recognize it's a Dynamic Programming Problem

* Most of the times, Optimization questions(MinMax) are DP problems and also Questions that require Memoization(Storage for future reference)
  * Among all possible solutions, you picking the best one
* Not all problems that have DP as a potential solution require DP as a solution
* With Optimization questions,
  * we need to generate all of the possible paths that we can take
  * Pick the one with the minimum value(w.r.t 26th question)
* DP has many stages and at every stage you are writing a viable solution
* Every subsequent stage becomes more optimized in terms of Space and Time Complexity

### Dynamic Programming Solution

* Dynamic Programming has its basis in **Recursion**(Starting point for 1st solution)
* Template for Recursion
  * basecases
  * Recursive function call with arguments
* The template is based on **Recurrence Relation**
  * Recurrence Relation is the Formula for the basis of a recursive solution