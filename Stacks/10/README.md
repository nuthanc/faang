### Question

* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
* An input string is valid if:
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* https://leetcode.com/problems/valid-parentheses/

### Step 1: Verify the Constraints

* Empty string, what should we return

### Step 2: Test Cases

* "", true
* "()", true
* "{([])}", true
* "}{()", false
* "{([]", false
* "{}()", true

### Step 3: Solution without Code

* If empty string, return true
* If Opening parenthesis, push to stack
* If Closing parenthesis, pop and check if it's a opening parenthesis of the same type

### Step 4: Solution with Code

* My approach was using multiple if conditions
* Author's approach of **using dictionary or object** is cool and efficient
* One thing to take note:
  * In js, stack.pop() of empty stack and get of key not in dict or object returns **undefined**, whereas in python it throws an error

### Step 5: Double check for Errors

* I made mistake in getting key in python, where it threw an Exception
* Also, I didn't check for empty stack when popping
* Also, I didn't check for the case where only Left brackets are provided in which case, I didn't check for the stack being empty at the end

### Step 6: Walk through the Test cases

### Step 7: Time and Space Complexity
* Time Complexity: O(n)
* Space Complexity: O(n)