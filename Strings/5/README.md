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

* First try Brute Force
* For each i, check the maxlen without repeat

### Step 4: Solution with code

* Author's brute force, add quick optimization in the beginning for empty and string of 1 length

### Step 5: Double check for errors

### Step 6: Test our code with our test cases

### Step 7: Time and Space Complexity

* Author's brute force solution
* Time Complexity is O(n^2)
* Space Complexity is O(n)

### Step 8: Optimize the Solution

* New technique: **Sliding Window**
* Form a window over some *portion* of *sequential data*, then *move* that window throughout the data to capture different parts of it
* Can apply on Strings, Array and Linked List
* Consider string "abcdefg"
  * Window over "ab"
* Hints:
  * Use the sliding window to represent the current substring
  * The size of the window will change based on new characters, and characters we've already seen before
  * Our seen characters hashmap keeps track of what characters we've seen, and the index we saw them at
* Solution
  * Form a boundary using left and right pointer
  * Keep track of longest we've seen so far
  * Hashmap of characters we've already seen
  * Keep moving the right pointer
  * When there is a repeat character, move the left pointer to +1 location of already seen character's index
  * This is because left of already seen character's index cannot form a substring larger than what already was
  * Key is **updating the Hashmap** and **calculating maxlen at each iteration**
  * If the already seen character's index is less than left pointer, it doesn't matter
  * Just update the already seen character's index
* Time and Space Complexity
  * Only the for loop scales with the input
  * So time complexity is O(n)
  * We still have seenChars hashmap
  * So space complexity is O(n)
* Can use new Map() instead of {} to improve Space and Time Complexity on Leetcode