### Question

* https://leetcode.com/problems/implement-trie-prefix-tree/
```txt
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
```

### Step 1: Verify the Constraints

* Can we implement helper classes/objects?
  * Yes

### Step 2: Test Cases

*  ![Trie](../../../img/trie.png)

### Step 3: Solution without code

* n-ary Tree
* Author's insert is gonna be dfs

### Step 7: Time and Space Complexity

* Space Complexity: O(n)
  * Storing all characters
* Time Complexity: O(n), where n is length of word
  * Author's is O(n) for storing and O(l) for the recursive stack