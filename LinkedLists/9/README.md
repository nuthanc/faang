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

