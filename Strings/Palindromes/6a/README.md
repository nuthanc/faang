### Subproblem

* A subproblem is a problem we have to solve along the way to solving the main problem
* For example in our previous String question,
  * Given a string, find the length of the longest substring without repeating characters
  * Main problem: **find the length of the longest unique substring**
  * Sub problem: **pattern matching - unique substring**

### Palindromes

* A Palindrome is a string that reads the same forwards and backwards
* E.g: "aba", "madam", "a", "race car"(ignore the space), ""  etc
* Even "A man, a plan, a canal: Panama" is a Palindrome when ignoring space, comma and colon
* To know whether it's a palindrome or not, one method is
  * Two pointer one at the beginning and the other at the end
  * Compare them if they are equal
* The second method is
  * Initialize the 2 pointers in the middle and expanding outwards
* The third method is 
  * 2 strings, 1 the original and the other reverse of the string and then comparing them

### Why 3 Solutions

* We are coding 3 solutions, because Palindrome appears as a subproblem question and 1 of the methods will be more efficient
* Example: **Almost a Palindrome**
  * Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter Consider only alphanumeric characters and ignore case sensitivity
  * "race a car" which upon parsing becomes "raceacar"
  * Upon removing letter "a" or "e", it becomes a Palindrome
* Another ex: "abccdba"
  * Using 2 pointers converging method
  * a's match, b's match, but c and d don't match
  * 2 strings: 
    * 1 with removal of d: "abccba"
    * 1 with removal of c: "abcdba"
* Another ex: "abcdefdba"
  * Same approach as above
  * Upon removal of d: "abcdefba"
  * Upon removal of c" "abdefdba"

# Question

* Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
* https://leetcode.com/problems/valid-palindrome/

### Step 1: Verify the Constraints

* Case sensitivity: Doesn't matter
* Empty string: Is a Palindrome
* Can there be negative numbers
* What should be returned

### Step 2: Some test cases

* "", true
* "race car", true
* "m a dam", true
* "aabaa", true (odd)
* "aabbaa"", true (even)
* "abc", false
* "A man, a plan, a canal: Panama", true

### Step 3: Solution without code

* First check if the string length is <=1, if yes return True
* Then parse the string to keep only alphanum characters and finally lowercase it
  * In python, use isalnum() and lower() string methods in List comprehension
  * In js, we regex and toLowerCase()
* Use 2 pointers, one in the beginning and the other at the end
* Compare them till p1 < p2

### Step 4: Solution with code

### Step 5: Double check for errors

### Step 6: Walk through the test case

### Step 7: Time and Space Complexity

* Time Complexity: O(2n)
  * I calculated this for my isPalin.js
  * Don't know whether this is correct or not
* Space Complexity: O(n)

### Step 8: Can we Optimize?