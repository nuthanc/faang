### Question

* Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
* https://leetcode.com/problems/reverse-linked-list-ii/

### Step 1: Verify the Constraints

* Empty linked lists, what do we return
* Will m and n always apply(i.e will m and n always be within the bounds of the linked list)
  * Yes, assume 1 <= m <=n <= length of linked list
* Positioning is 0 index or 1 index for m and n
* Will there be cycle 
* Are the values integers or characters
* Can we receive m and n values for the whole linked list(I didn't think of this)
  * Yes

### Step 2: Example Test Cases

* 1,2,3,4,5 m=2, n=4
  * 1,4,3,2,5
* 1,2,3,4,5 m=1, n=5
  * 5,4,3,2,1

### Step 3: Soln without code

### Step 4: Soln with code

### Step 5: Double check for errors

### Step 6: Walk through the test cases

### Step 7: Time and Space Complexity

### Step 8: Can we Optimize?