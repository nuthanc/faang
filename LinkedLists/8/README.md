### Question

* You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.
* Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
* https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

### Step 1: Verify the Constraints

* Can the list be already flat
* Will there always be a child pointer
* Will the child pointer always point to the head node of the doubly linked list
* Empty list, what do we return
* Can every list node have multiple levels of children(Didn't think of this)
  * Yes
* What do we do to child property after flattening out(Didn't think of this)
  * Set it to null

### Step 2: Write out some test cases

* [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
  * [1,2,3,7,8,11,12,9,10,4,5,6]
* [1,2,null,3,4,null,5,6,null,9,null,10,null,null,7,8,null,null,11,12](More levels)
  * [1,3,9,4,10,11,12,2,5,6,7,8]
* [1,2,null,3]
  * [1,3,2]
* []
  * []
* [3]
  * [3]
* while coming up with test case, we care about
  * Order
* What are the factors that might affect the order
  * Multiple levels
  * Children of different nodes that are in the same level(This might throw us off, so include this in the test case)


### Step 3: Solution without code

* First, I need to parse the input or do I?
* Key components
  * Child
  * Next
  * Current
* I took Bottom up approach
* **Author's logic(Top Down)**
* Subproblem: Merging of children to parent
* Certain nodes are important
  * *Node with child* and *Next node*
  * *Child's first* and *last node*
* Top down approach: If the node has child merge it
  * It doesn't matter if the child again has child nodes
  * We can traverse them later after making the links

### Step 4: Solution with code

* First, he thought of head being null 
* Next is all turning the logic to code

### Step 5: Double check for errors

### Step 6: Run throught the test case

### Step 7: Time and Space Complexity

* Time Complexity: O(n)
  * O(2n) dropping the constant
  * Worst case each node is touched twice, once by tail and once by current node
* Space Complexity: O(1)
  * With recursive, space complexity will be O(n)
  * The iterative is almost always better than recursive