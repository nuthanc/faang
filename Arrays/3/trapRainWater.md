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