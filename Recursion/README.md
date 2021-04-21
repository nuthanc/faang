### Recursion

* Base case
* Recursive case
* What to return

### Normal and Tail Recursion

* Normal Recursion's Space Complexity: O(n)
* Tail Recursion's Space Complexity: O(1)

![Normal](../img/nrs.png)
  * 4 calls
  * Here multiplication needs to wait

![Tail](../img/tail.png)
  * Multiplication doesn't need to wait
  * Nothing is waiting here
  * So since there is no dependency, the earlier calls can be popped off the stack
  * But the language's compiler should also support this