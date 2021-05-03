### Question

* Given an integer array nums and an integer k, return the kth largest element in the array.
* Note that it is the kth largest element in the sorted order, not the kth distinct element.
* https://leetcode.com/problems/kth-largest-element-in-an-array/

### Step 1: Verify the Constraints

* Negative numbers?
* Empty array? What to return?
* Author's below
* k larger than array length
  * No


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

* Time Complexity with Author's QuickSort implementation: O(nlogn)
  * How long to find the Partition: O(n)
    * scans across the whole array
  * How many times are we doing the Partition call: O(logn)
    * Splitting the array to 2

* Space Complexity: O(logn)
  * How many recursive calls we have(Height of the call stack): logn

### Step 8: Optimize the solution

* Using Hoarse's QuickSelect Algorithm
* This algorithm is used to **find the kth smallest in an unordered list**
* With 6 elements, the second largest is the fifth smallest
* QuickSelect's logic of partitioning is still the same 
* The only difference is checking the partitionIndex with indexToFind and based on that decision, we either find only left of partitionIndex or right of partitionIndex