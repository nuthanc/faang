### Question

* https://leetcode.com/problems/delete-operation-for-two-strings/solution/
```txt
Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

Input: word1 = "leetcode", word2 = "etco"
Output: 4
```

### Step 1: Verify the Constraints

* Does casing matter?
  * Yes, but you are given only lowercase English letters
* Empty strings equal?
  * Yes
* If the strings are already equal?
  * Return 0

### Step 2: Some test cases

* sea and eat, 2
* same and same, 0
* steak and sea, 2

### Step 3: Solution without code

* Minimum number of steps(Hint that **this might be a DP problem**)
* Think of the Big problem or Final state: 2 strings to be equal
* Use **Reverse Psychology**
  * Problem: Delete characters which are unnecessary
  * Or: Get count of characters which are necessary(equal)
* Another hint that **this is a DP problem**: Need to generate all possible combinations when characters are not equal(i.e whether to take next character of 1st string or next character of 2nd string, so these are the possible options at each step)
* Get the Longest Common Subsequence(**Subproblem** to the main problem)
* Then, m + n - lcs, where m is length of 1st string, n is length of 2nd string, lcs is longest common subsequence
* 2 Pointers, one at each string(Can start from 1st character or from last character, I'm starting from 1st character)
```txt
lcs(s1, s2, i, j) = max(lcs(s1, s2, i+1, j), lcs(s1, s2, i, j+1)) when s1[i] != s2[j]

lcs(s1, s2, i, j) = 1 + lcs(s1, s2, i+1, j+1) when s1[i] == s2[j]
```

### Step 4: Solution with code

* Use the above Recurrence relation to derive a initial Recursive solution

### Step 5: Double check for errors

### Step 6: Walk through the test cases

### Step 7: Time and Space Complexity

* Time Complexity: O(2^max(m,n)). Here, m and n refer to the lengths of s1 and s2 respectively
* Space Complexity: O(2^max(m,n)) # this is according to what I was taught
  * Stack size (2^max(m,n) values on the Call stack waiting to be resolved)
  * From Leetcode, O(max(m,n)). The depth of the recursion tree will go upto max(m,n).
* With Memoization
  * Time Complexity: O(m*n)
    * Because we are visiting all the elements in 2d DP once
  * Space Complexity: O(m*n)
    * From Leetcode, O(m*n) from store array and depth of recursion tree will go upto max(m,n)

### Optimize using Bottom Up

* Think in reverse of Top Down
  * i.e in Top Down for i=0, j=0, you were thinking of the entire string of s1 and s2 starting from 0
  * But in Bottom Up for i=0, j=0, think only 1 character of s1 and s2
* So, fill this row by row in the 2D array
  * When the characters are equal for i,j, add 1 to value of i-1 and j-1
  * When the characters are not equal, take max of value of i-1,j and i,j-1
* Iterative
  * Time Complexity: O(m*n)
  * Space Complexity: O(m*n)
* Iterative Optimized
  * Time Complexity: O(m*n)
  * Space Complexity: O(2m) ~O(m)