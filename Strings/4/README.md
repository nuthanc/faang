### Question

* Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
* Note that after backspacing an empty text, the text will continue empty.
* https://leetcode.com/problems/backspace-string-compare/

### Step 1: Constraints

* Are empty strings equal
  * Yes
* Two Hash appear beside each other(I missed out this and the following)
* What happens to # when there is no character to remove
  * It deletes nothing
  * "a###b" becomes "b"
* Does case sensitivity matter
  * Yes a does not equal to A
### Step 2: Write out some test cases

* "abc#" , "ab": True
* "ab##", "": True
* "ab#", "ab": False
* "", "#": True
* "", "": True
* "a#b#c#", "": True

#### Author's test cases

* "ab#z", "az#z": True
* "abc#d", "acc#c": False
* "x#y#z#", "a#": True
* "a###b", "b": True
* "Ab#z", "ab#z": False

### Step 3: Solution without code

* Convert each of the strings to final form and compare them

### Step 4: Solution with code

### Step 5: Double check for errors

### Step 6: Test our code with our test case

### Step 7: Space and Time Complexity

* Considering solArray.js
* Let's assume S's input size is 'a' and T's 'b'
* Time Complexity will O(2a + b) or O(a +2b) which upon removing constant is O(a + b)
  * buildString is O(a) for S and O(b) for T
  * Next for loop is either O(a) or O(b) whichever is larger
* Space complexity is also O(a + b)
  * This is for building strings S and T, additional memory(array) is required and it scales with S and T

### Step 8: Can we optimize our solution?

* See if we can bring down the Space Complexity O(a + b), Time complexity is good enough
* 3 Hints
  * Utilize the original strings
  * Use the 2 pointer technique
  * Start from the end of the strings
* Question itself doesn't require us to create finalS and finalT(refer Instructor's solution), but only True or False
* So, to bring down the Space complexity, figure other way to find the solution without using extra memory
* Now think of 2 Pointer solution, 1 in first string and the other in the second string
* If we go from left to right, it will be problematic
  * Because backspace delete backwards, so the compared characters will be useless
* So, start from the right instead of the left
* When we do this, there will be no characters right of the string since we are at the end of the string
* If the character is not '#', it will end up in the final string
* If the character is '#', then we need to keep count of the skip
  * Note: We can't directly skip 2 characters because the previous character may be '#' and by skipping we are making a mistake
* After you write the code, double check for mistakes
  * In this case(Instructor's Optimal), since there are many if and else conditions, check for errors in braces, wrong placement of condition or statements etc
* Calculate the Space and Time complexity for the Optimized code
  * Time Complexity: O(a+b)
    * Both the pointers move in every iteration of the while loop(either in # block or else block)
    * We touch every single element
  * Space Complexity: O(1)
    * Not storing any scaling data structure