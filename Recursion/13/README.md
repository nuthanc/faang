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
  * 2 quickSort calls
  * 2nd call of quickSort was waiting for 1st call of quickSort to finish
  * Our function is still on the Call stack

### Step 8: Optimize the solution

* Using Hoarse's QuickSelect Algorithm
* This algorithm is used to **find the kth smallest in an unordered list**
* With 6 elements, the second largest is the fifth smallest
* QuickSelect's logic of partitioning is still the same 
* The only difference is checking the partitionIndex with indexToFind and based on that decision, we either find only left of partitionIndex or right of partitionIndex
* Time Complexity:
  * Partition function's Time Complexity is O(n) since it scans through the entire array
  * And based on the partition obtained, best case is O(n) and worst case is O(n^2)
    * Best case is the elements to scan gets divided into half in each iteration n + n/2 + n/4 ..=O(2n)~O(n)
    * Worst case is when it is in Descending order and you have to scan all the elements except the partition
* Space Complexity: O(1)
  * Optimal situation for Tail Recursion since it is returning and calling only quickSelect causing it to pop itself off the call stack after it is finished