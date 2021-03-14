### Linked List

* Key between Contiguous like Arrays and Strings and NonContiguous like Graph and Trees
* Made up of List Nodes
  * Which is a class containing **value and next**
* Final List Node points to **null**
* Head List Node and Tail List Node
* A linked list may not have a Tail always(E.g: Cycle in Linked List)
* Return a Linked list, we are returning the **Head**

### Question

* Given a linked list, return it in reverse
* We get the Head of a Linked list as input

### Step 1: Verify the Constraints

* What do we return if we get null or a single node?
  * Just return null and the node back respectively
* Is there a cycle in the Linked list(Even author didn't think of this)

### Step 2: Write out some test cases

* 1,2,3,4,5 -> 5,4,3,2,1
* 3 -> 3
* null -> null

### Step 7: Time and Space Complexity

* Time Complexity: O(n)
  * In while loop, we are iterating over all of the elements and is the only thing that scales
  * Always advancing the current node
* Space Complexity: O(1)
  * We are just assigning pointers to existing objects in memory and changing the value
  * We are not creating new objects