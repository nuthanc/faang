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

### Step 3: Solution without code 

* Since the array is sorted, we can use Binary search
* One way of getting the first and last range of target is using binary search and getting the index and have 2 pointers left(mid-1) and right(mid+1) iterate until value is not equal to target
* But this approach takes O(n) in the Worst case when all the elements are same(e.g [4,4,4,4,4,4,4,])
* Optimal approach is to use Subproblem of binary search again after finding the target for range low to mid-1 and mid+1 to high
  * Use 2 temp, tempL and tempR with initial values of Initial mid
  * And keep on updating those till -1 is returned