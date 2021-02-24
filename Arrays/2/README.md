### Question

* Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water
* https://leetcode.com/problems/container-with-most-water/

### Step 1: Verify the constraints

* Does the thickness of the lines affect the area?
  * No, assume they take up no space
* Do the left and right sides of the graph count as walls?
  * No, the sides cannot be used to form a container
* Does a higher line inside our container affect our area?
  * No, lines inside a container don't affect the area
![img](../../img/middle.png)

### Step 2: Write out some test cases

* What is the best test case
  * [7, 1, 2, 3, 9] = 28
    * We know for certain 7 and 9
    * Greatest and farthest apart
* Empty array and 1 Array
  * [] = 0
  * [7] = 0
* Not obvious what the correct answer is
  * [6, 9, 3, 4, 5, 8]
    * 6 and 8 or 9 and 8
    * 6 * 5 = 30, 8 * 4 = 32

### Step 3: Figure out a solution without code

* Here in this question the **Greates** instead of just giving the indices as soon as we found it in the previous question
* Let's take our 1st test case: [7, 1, 2, 3, 9]
* Area = l * w, where l = min(a,b) and w = (bi-ai)
* maxArea = 0
* 2 pointers, 1 at 7, and the other from 1 to 9 
* Next at 1, then from 2 to 9
* Similarly till 3

### Step 4: Code the solution

### Step 5: Double Check for Errors

### Step 6: Test our code with our test cases

### Step 7: Time and Space Complexity

* Time Complexity: O(n^2)
* Space Complexity: O(1)

### Step 8: Can we optimize our solution?

* Nothing can be done with Space Complexity in this question to decrease Time Complexity
* New Technique: **Shifting pointers**
* New ex: [4,8,1,2,3,9], a(1st pointer) at index 0 and b(2nd pointer) at index 5
* Not the case when a and b are greater distance apart, our area goes up
  * For 4 and 9, we have area of 20
  * For 8 and 9, we have area of 32
* **Technique**:
  * How is area calculated: min(a,b) * (bi - ai)
  * Width(bi-ai): Area impacted
    * How can width be maximum: when they are further apart
  * min(a,b): Area impacted
    * When smaller value becomes bigger, area increases
    * When bigger values becomes even bigger, no impact on area
    * When bigger value becomes smaller, area decreases
    * So what to move, move the pointer whose value is smaller
  * How to start:
    * 2 pointers, 1 at the beginning and the other at the end
    * This ensures we get the maximum width and there is no way Outskirts get more value since we are starting from the ends
    * Calculate area and replace maxArea
    * Move the pointer whose value is smaller