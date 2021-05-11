### Question

* Given an array of integers sorted in ascending order, return the starting and ending index of a given target value in an array, i.e. [x,y]
* Your solution should run in O(logn) time
* https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

### Step 1: Verify the Constraints

* What to return when target is not found
  * -1
* Inclusive and Exclusive nature of the target value
* Are there repeated numbers?

### Step 2: Write out some test cases

* nums = [5,7,7,8,8,10], target = 8, Output = [3,4]
* nums = [1,2,3,4], target = 2, Output = [1,1]
* nums = [1,2,3,4], target = 5, Output = [-1,-1]
* nums = [], target = 1, Output = [-1,-1]