### Question

* Given an array of integers, return the indices of the two numbers that add up to a given target

### Steps before solving

1.Verify the constraints
  * Are all the numbers positive or can there be negatives?
    * Only positives
  * Are there duplicate numbers in the array?
    * No duplicates
  * Will there always be a solution available(**Good Question**)?
    * No
    * 25 -> [1,3,7,9,2], [], [5]
    * The above are Edge cases
  * What do we return if there's no solution?
    * Return null
  * Can there be multiple pairs that add up to the target?
    * No, only 1 pair

2.Write out some test cases
  * Capture all of the edge cases discussed
  * 1st test case is our **best case**
    * [1,3,7,9,2] t=11
      * This satisfies all the above constraints
  * Next test case **no solution**
    * [1,2,3,4,5] t=25
    * [] t=5
    * [5] t=8
    * [5] t=5 (**Notice this should return null**)
    * [1,6] t=7 (**Guaranteed solution**)

3.Figure out a solution without code
  * Consider our best case example [1,3,7,9,2]
  * Add indices on top while writing down(As indices are the results)
  * Assign it to nums like nums = [1,3,7,9,2]
  * Two pointers p1 and p2
    * 1 fixed and other scan for all the numbers
  * Number to find = Target - nums[p1]

4.Write out our solution in code
  * First for the best case
  * Then later on add to constraints above like what if there is no solution
  * This also in paper

5.Double check for errors
  * Like missing braces, faulty condition, syntax error etc

6.Test our code with our test cases
  * Run with best case and empty array
  * Step through each line and see if it's working fine
  * To see this step through in code, you can console log them

7.Space & Time Complexity
  * Time Complexity:
    * When you see two for loops one within the other, it's atleast O(n*2)
    * But you see p2 doesn't cover all the elements(Like if p1 is in the middle)
    * But imagine 4 more elements were added(Now 1st for loop has 4 more iterations, so also for the 2nd for loop: He described this as exponential)
  * Space Complexity
    * numberToFind is the only thing we are storing in memory
    * Space complexity of O(1)

8.Optimize solution
  * The moment we see O(n*2) or worse than this, we know that there will be a better solution
  * We see that Space complexity for previous is O(1) which is the best
  * So, there is a way to increase our space complexity to decrease our time complexity
  * Culprit is 2 for loops, so how can we break it to only one for loop
  * So figure out what each for loop is doing
    * 1st for loop: Calculate numberToFind
    * 2nd for loop: Checks current number === numberToFind(Great time for HashMap)
    * Iterate only once and then use HashMap {10:0, 8:1, 4:2, 2:3}
  * New Time Complexity and Space Complexity for Optimized solution is O(n)


### Submit in Leetcode

* leetcode.com/problems/two-sum/
* Github account