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
* Author: Yihua Zhang

#### 3 keys to Technical Interview

* Technical Knowledge
* Critical and Abstract Problem Solving
* Communication

### Key Insight

* Don't memorize the solution
* **Critical thinking process of breaking apart the question to identify subproblems and how you can solve it and put it all together** 
  * Check Question 21(Rotting oranges README) for this
  * Use **Reverse Psychology**, check longestCommonSubsequence in DP

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

### Recursion

* For Bubbling up of values, if recursive calls alone doesn't satisfy, use conditions to return
```js
if (node.left) {
    if (!dfs(node.left, min, node.val)) { // We can't return dfs(...) because we haven't even done dfs(node.right...) for this particular node, so if condition is added to the recursive call instead of return the recursive call itself
      return false;
    }
}

// Backtracking example, solveBacktrack is recursive function
// This condition decides to do rest of the computation or that's it for this call stack
if (solveBacktrack(board, boxes, rows, cols, nextRow, nextCol)) {
  return true;
}
```

### 2d Arrays

* Be careful with row and col variables, don't reassign it if you are iterating with the same variable names

### Topological Sort

* Indegree
* Detection of cycles

### Dijkstra's Algorithm

* Greedy
* Priority Queue

### Bellman Ford's Algorithm

* Dynamic
* n-1 iteration over Edges and store minimum path cost

### Backtracking

* Addition
* Decision
* Removal

### Dynamic Programming

* While Memoizing, during recursive call store current calculation in that call itself and don't pass to arguments
  * Else, this would mess up during storage(Memoize)
```py
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        lcs = self.longest_common_subsequence(word1, word2, 0, 0, 0)
        return len(word1) + len(word2) - 2 * lcs

    def longest_common_subsequence(self, word1, word2, i, j, lcs):
        if i == len(word1) or j == len(word2):
            return lcs
        if word1[i] == word2[j]:
            return self.longest_common_subsequence(word1, word2, i+1, j+1, lcs + 1) # Here lcs is incremented in the argument
        else:
            return max(self.longest_common_subsequence(word1, word2, i+1, j, lcs), self.longest_common_subsequence(word1, word2, i, j+1, lcs))
# The above approach of passing lcs messes up during Memoizing

# So use the below approach
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        lcs = self.longest_common_subsequence(word1, word2, 0, 0)
        return len(word1) + len(word2) - 2 * lcs

    def longest_common_subsequence(self, word1, word2, i, j):
        if i == len(word1) or j == len(word2):
            return 0
        if word1[i] == word2[j]:
            return 1 + self.longest_common_subsequence(word1, word2, i+1, j+1)
        else:
            return max(self.longest_common_subsequence(word1, word2, i+1, j), self.longest_common_subsequence(word1, word2, i, j+1))
```
