### Question

* Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
* https://leetcode.com/problems/implement-queue-using-stacks/

### Step 1: Verify the Constraints

* Do the queue methods we have to implement need to perform at the same complexity of a real queue?
  * No, but they should be as performant as possible

### Step 2: Write out some test cases

* Since we are having a class, no need for this

### Step 3: Solution without code

* Use 2 stacks
* Difference between my logic and author's logic is 
  * Insertion is O(1)
  * Removal is from stack2 and is O(1) when it is not empty and O(n) when it is empty

### Step 4: Solution with code

* Author used in and out instead of stack1 and stack2
* Also made check for equal to 0 in pop and peek
* In empty, used this.in.length === 0 && this.out.length === 0

### Step 5: Double check for errors

### Step 6: Walk through the test case

### Step 7: Space and Time complexity

* Time Complexity
  * Push: O(1)
  * Pop: O(n)
  * Peek: O(n)
  * Empty: O(1)
* Space Complexity: O(n)