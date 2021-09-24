### Cycle in Linked List

* Where a node is touched twice

### Question

* Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
* There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.
* https://leetcode.com/problems/linked-list-cycle-ii/

### Naive approach's Time and Space Complexity

* Time Complexity: O(n)
  * Every node is touched once
  * has and add methods of Set are extremely optimized(Assume O(1) performance)
* Space Complexity: O(n)
  * Set is a scaling data structure

### Floyd's Tortoise and Hare algorithm

* **One slow pointer**: Tortoise(1 step) and **another fast pointer**: Hare(2 steps)
* When both point to the same node and Hare's next pointer or Hare's pointer is not null, then we have a cycle and that point is the Meeting point
* To get the Node where the cycle start, initialize 2 pointers 1 at start and the other at the meeting point
* https://www.codingninjas.com/blog/2020/09/09/floyds-cycle-detection-algorithm/
* Then traverse each pointer with 1 step
* The point where they meet is the Node where the cycle starts

### Step 1: Verify the Constraints

* Singly linked list
* What to return for no cycle
* Empty linked list?

### Step 2: Sample test cases

* []
  * null
* 1,2,3,4,5
  * null
* 1,2,3,4,5,3
  * 3
* 1,2,3,4,5,6,4
  * 4

### Step 3: Solution without code

* Use Floyd's Tortoise and Hare algorithm

### Step 4: Solution with code

* 

### Step 5: Double check for errors

### Step 6: Run through test cases

### Step 7: Time and Space Complexity

* Time Complexity: O(n)
  * Even though we traverse the same node multiple times with the hare pointer, it is still within one while loop
* Space Complexity: O(1)
  * Even though there are 4 pointers, they point to the same value in memory