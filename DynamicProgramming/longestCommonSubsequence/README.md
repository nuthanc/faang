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

* Minimum number of steps(Hint that this might be a DP problem)
* Think of the Big problem or Final state: 2 strings to be equal
* Use **Reverse Psychology**
  * Problem: Delete characters which are unnecessary
  * Or: Get count of characters which are necessary(equal)
* Get the Longest Common Subsequence(**Subproblem** to the main problem)
* Then, m + n - lcs, where m is length of 1st string, n is length of 2nd string, lcs is longest common subsequence
* 2 Pointers one at each string(start from 1st character or from last character)