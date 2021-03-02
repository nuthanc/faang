### Question

* Given a string s, find the length of the longest substring without repeating characters.
* https://leetcode.com/problems/longest-substring-without-repeating-characters/

### Step 1: Verify the Constraints

* For empty string, what should we return
* Is the substring contiguous(Make sure)
  * Yes, look for a substring not a subsequence
  * Imagine "abcbbd"
  * substring: Contiguous(sequential) like abc
  * subsequence: Can be Noncontiguous like abcd
* Does case sensitivity matter?
  * No, assume all characters in the string are lowercase

### Step 2: Write out some test cases

* s = "abcabcbb", 3
* s = "", 0
* s = "bbbb", 1
* s = "abcbda", 4(Overlaps of abc and cbda, author thought of this)

### Step 3: Solution without code

### Step 4: Solution with code

### Step 5: Double check for errors