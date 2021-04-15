### Question

* Given a string s of '(' , ')' and lowercase English characters. 
* Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string
* Formally, a parentheses string is valid if and only if:
  * It is the empty string, contains only lowercase characters, or
  * It can be written as AB (A concatenated with B), where A and B are valid strings, or
  * It can be written as (A), where A is a valid string.
* https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

### Step 1: Verify the Constraints

* Empty string
* What do we return if there is no valid string
* Only parentheses
* Only lowercase letters valid
  * Yes
* **Author's below**
* What to return from algorithm?
  * Return a valid string with fewest brackets removed
* Will there be spaces in the string?
  * No

### Step 2: Test Cases

* "", ""
* "ab", "ab"
* "(ab()", "(ab)" or "ab()"
* "))((", ""
* "(())", "(())"
* "lee(t(c)o)de)", "lee(t(c)o)de" or "lee(t(co)de)" or "lee(t(c)ode)"
* "a)b(c)d", "ab(c)d"

### Step 3: Solution without code

* Order in which we want to access data and retrieve data is important here
* So Stack perfectly fits for questions with valid brackets
* We need to question ourselves here
* **What and when** do you add and remove to stack 
  * What to add and remove: '('
  * When to remove '(':  When there is ')'

### Step 4: Solution with code

* Use stack
* Use split and join to make it work easier

### Step 5: Double check for errors

### Step 6: Walk through test case

### Step 7: Space and Time Complexity

* Space Complexity: O(3n) => O(n)
  * Split creates a new array with n elements
  * Stack may contain all of the elements
  * Join creates a new String from n array elements
* Time Complexity: O(4n) => O(n)
  * Split is O(n)
  * For loop is O(n)
  * while loop is O(n)
  * Join in O(n)