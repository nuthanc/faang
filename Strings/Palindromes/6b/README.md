### Question

* Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

### Step 1: Verify the Constraints

* Does Case sensitivity matter
* Are we sure we get a non-empty string
* What if it already a palindrome
  * Return true

### Step 2: Write out some test cases

* "a", True
* "raceacar", True
* "abecddeba, True
* "abccdba", True
* "", True
* "ab", True

### Step 3: Solution without code

* Trick is generating 2 strings when there is a conflict(one by removing left pointer and the other by removing the right pointer)
* I used count of 0 and max of 2 to keep track of the two strings via the pointers
* Author's approach
```markdown
* We can't directly use Palindrome techniques as Palindrome here is as a **subproblem** and we still have to transform the solution
* Starting point: Since the string can be a palindrome, we can use one of the 3 techniques learnt
* But which would be appropriate
* Definitely the reversal of string technique wouldn't be appropriate cause we don't have where the conflict occurs data
* Centre then moving outward is a little bit complicated as we need to account for odd and even strings
* So starting at the ends is the most simple approach
* Generate 2 strings at the conflict(One by removing the left pointer's char and vice-versa)
* No need to compare whatever is before p1 and p2
* Used another function to check the 2 strings generated using pointers(Which is the main key difference from my solution)
* This approach of using another function is much cooler than my approach, since we are reusing a function and keeps the code readable and understandable

```

### Step 4: Solution with code 

### Step 5: Double check for errors

### Step 6: Walk through the code for the test cases

### Step 7: Time and Space Complexity
* Time Complexity: O(n)
  * O(2n) ignoring the constant
  * 2n when moving left pointers fail and moving right pointer too
* Space Complexity: O(1)
  * We are not using any scaling data structure