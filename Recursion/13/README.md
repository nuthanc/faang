### Question

* Given an integer array nums and an integer k, return the kth largest element in the array.
* Note that it is the kth largest element in the sorted order, not the kth distinct element.
* https://leetcode.com/problems/kth-largest-element-in-an-array/

### Step 1: Verify the Constraints

* Negative numbers?
* Empty array? What to return?

### Step 2: Test cases

* nums = [3,2,1,5,6,4], k = 2, Output: 5
* nums = [3,2,3,1,2,4,5,5,6], k = 4, Output: 4

### Step 3: Solution without code

* Sort the elements
* Return -k in python and length - k in js

### Step 4: Solution with code

### Step 5: Double check for errors

### Step 6: Walk through the Test cases

### Step 7: Space and Time Complexity

* Time Complexity: O(nlogn) 
  * Python sort method's Time Complexity is O(nlogn)
* Spacke Complexity: O(1)
  * Sort in place