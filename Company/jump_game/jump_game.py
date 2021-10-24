'''
https://leetcode.com/problems/jump-game/
Better Answer: https://leetcode.com/problems/jump-game/discuss/1523365/O(N)-Time-and-O(1)-space-or-100-efficient-or-Interview-Style-Code-walk-through

https://leetcode.com/problems/jump-game/discuss/1294482/Linear-Dp-Solutioin-recurrsive-approach-C%2B%2B

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

1. Verify the Constraints

* Will there be negative elements and how to consider the jump for these(Reverse direction)?
    * Whole numbers
* What if the first index is the last index as well but the jump is out of bounds?
* Empty array
    * No, min len is 1

2. Write some test cases

* [2,3,1,1,4]: true
* [3,2,1,0,4]: false
* [1]: true
* [2,1]: false
* [2,1,0]: true
* [2,1,0,3]: false
* [2,2,0,3]: true

3. Solution without code

* I misunderstood the problem and only considered max jumps from each index
* Whereas you could do any jumps from 0 upto maximum
* If len of nums is 1, return true
* I think BackTracking could work here
    * Add, Decide and Remove
* backTrack would take currentIndex and nums as Argument
* Add is the Jump taken by the currentIndex
* Decide is to check whether the index is non-zero or if it is zero, then the last element. If this satisfies, then it is true and we can recurse further else decrease(Remove) maxJump of currentIndex

4. Solution with code

* 

5. Double check for Errors

6. Walk through the Test Case

7. Time and Space Complexity
* Space Complexity: O(n)
    * dp: O(n)
    * Recursive stack: O(n)
* Time Complexity: O(n)
    * All numbers visited once in worst case and stored in dp
'''


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        self.jumpBool = [None] * len(nums)
        return self.backtrack(0, nums)

    def decide(self, index, nums):
        if index < len(nums)-1 and nums[index] == 0:
            return False
        return True

    def backtrack(self, currentIndex, nums):
        if currentIndex >= len(nums) - 1:
            return True
        if self.jumpBool[currentIndex] is not None:
            print(f"Hurray, memoizing for index {currentIndex}")
            return self.jumpBool[currentIndex]
        for jump_len in range(nums[currentIndex], 0, -1):
            jump = currentIndex + jump_len
            if self.decide(jump, nums):
                # Need to check from here
                if self.backtrack(jump, nums) is True:
                    return True
        print(f"Memoizing for {currentIndex}")
        self.jumpBool[currentIndex] = False
        return False
