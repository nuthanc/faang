# Interview Preparation for FAANG(Facebook, Apple, Amazon, Netflix and Google)

* Software first tech company
* First Gut check Interview(15-30 minutes) 
  * Work history
  * Why do u want in this company?
  * How long do u code? Ans: As long as I can
  * Deep passion 
* Second is Technical Phone Screen Interview for a technical problem(1 hour)
  * 1 to 2 technical problems
* 5 interview, 1 hour each
  * 4 technical
  * 1 cultural/personality fit

#### 3 keys to Technical Interview

* Technical Knowledge
* Critical and Abstract Problem Solving
* Communication

### Constraints in General

* Will there always be a solution

#### For Strings

* Case sensitivity
* Empty strings equal?
* Repeated characters

#### For numbers

* +ve and -ve
* Repeated numbers

#### General

* Think of edge cases, when the variables become None
* Don't try to change prominent variables value within another block(Use another variable)

### In Recursion

* Be mindful of returning the value when the recursive function is called

### In conditions

* Especially in case of numbers, add full condition
```py
if lastSeenValue:
# Instead of above
if lastSeenValue is not None:
# This is better
# Because in first case if lastSeenValue is 0, then it results in False which is not you expect to do
# See validate_bs.py in 19 folder
```