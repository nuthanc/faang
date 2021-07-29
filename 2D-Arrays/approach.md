### Approach

* Values
  * Limited: For eg, One of 3 values
    * **Is there a relationship between the values?**
    * **Is there a subproblem we can solve, so we can apply it to other subproblems and get the overall solution**
  * Unlimited: Values can be anything a-z, A-Z, -Inf...Inf
* Do I need to traverse? If yes
  * BFS or DFS
  * But mostly it will be in sequential order
* What do we do with the values traversed
  * Store in a queue or array?
  * Count values?
  * Or when some value is encountered, perform some operations(subproblem)