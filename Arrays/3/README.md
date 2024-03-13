### Question

* Given an array of integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
* https://leetcode.com/problems/trapping-rain-water/

### Step 1: Verify the constraints

* Do the left and right sides of the graph count as walls?
  * No
* Will there be negative integers?
  * No

### Step 2: Write out test cases

* height = [0,1,0,2,1,0,1,3,2,1,2,1], sol = 6
* [], sol = 0
* [3, 4, 3], sol = 0

### Step 3: Solution without code

* This question requires to utilize the entire array to generate a solution unlike the previous question
* Smaller height out of the 2(Similar to previous question)
* Formula: currentWater = min(maxLeft, maxRight) - currentHeight

### Step 4: Solution with code

* Add author's brute force solution

### Step 5: Double check for errors

* Ensure everything is correct

### Step 6: Test our code with our test cases

* Test for the test cases in Step 2

### Step 7: Space and Time Complexity

* Time Complexity is O(n^2)
  * 1st for loop across the entire array
  * The 2 while loops across the entire array
* Space Complexity is O(1)
  * Even though we have multiple variables, they don't grow with the input
  * They store only 1 value that change
* Let's think of increasing Space complexity to decrease Time Complexity
  * Nothing Cause that's the only logic we can thing about
* Next is 2 Shifting Pointers at the ends
  * Think of **pointers moving inwards** instead of outwards
  * We can use this solution with modifications
* In brute force, we were working with one pointer, the other 2 were derived from it
* To use 2 Shifting Pointers technique,
  * Conditionally move pointers
  * Two pointers for keeping track of **maximum values they have seen so far** (This solves min(maxLeft, maxRight) part of the equation)
  * We need to make one of the 2 pointers as currentPointer as well as moving pointer
  * The container will be maxLeft, p1 and p2 when v[p1] <= v[p2] (This ensures left boundary is smaller than right boundary and value can be calculated with leftBoundary and currentHeight alone)
    * We keep moving p1 when it is less than p2, so all elements left of p1(left boundary) will be smaller than v[p2], so no need to calculate min(maxLeft, maxRight) as it will be maxLeft always
  * Else it will be p1, p2 and maxRight when v[p1] > v[p2]
    * The condition to move p2 comes only when value of p2 is less than p1
    * We keep moving p2 when it is less than p1, so all elements right of p2 will be smaller than v[p1], so no need to calculate min(maxLeft, maxRight) as it will be maxRight always
* After Optimizaton, Time Complexity is O(n) and Space Complexity is O(1)
  * Touching every element once and no additional operations by touching other elements in the array(focus on current element)
  * No additional space, static values that don't scale