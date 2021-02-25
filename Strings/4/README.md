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