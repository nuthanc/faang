'''
Question: https://www.geeksforgeeks.org/find-pythagorean-triplet-in-an-unsorted-array/
Given an array of integers, write a function that returns true if there is a triplet(a,b,c) that satisfies a^2+b^2 = c^2

1. Verify the Constraints
* What to return when there is no solution? false
* Can there be repeats? Yes
* Can be there negative integers? Yes

2. Write down some test cases
* [3,1,4,6,5] => {3,4,5} => True
* [10,4,6,12,5] => False
* [] => False
* [1,2] => False

3. Solution without code
* If len(arr) < 3, return False
* Brute force of 3 loops
    * [3,1,4,6,5] c=0, a=0, b=0 run these loops upto n
    * Run if c != a != b, arr[c]**2 = arr[a]**2 + arr[b]**2 return True and break
    * Else keep on iterating
    * Finally return False
* Loop twice and add a^2 + b^2 in a set and separately loop for c^2 in set
    set = (10, 25, 45, 34, 17, 37, 26, 52, 41, 61)
    * Time complexity: O(n^2)
    * Space compleixty: O(n^2)
* Using sorting
    * Sort the array after squaring it
    * Use 3 pointers, c at the end, a at the beginning and b at c-1
    * If a^2 + b^2 < c^2, increment a, if it is less decrement b, if equal return True
    * Time Complexity: O(n^2)
    * Space Complexity: O(1)
'''
def naive_sol(arr):
    if len(arr) < 3:
        return False
    n = len(arr)
    for c in range(n):
        for a in range(n-1):
            if a == c:
                continue
            for b in range(a+1, n):
                if b == c:
                    continue
                if arr[c]**2 == arr[a]**2 + arr[b]**2:
                    return True
    return False

def sol_sort(arr):
    if len(arr) < 3:
        return False
    n = len(arr)
    for i in range(n):
        arr[i] = arr[i] * arr[i]
    arr.sort()

    for c in range(n-1, 1, -1):
        a, b = 0, c-1
        while a < b:
            hypo_square = arr[c]
            base_square = arr[a]
            alti_square = arr[b]
            if hypo_square == base_square + alti_square:
                return True
            elif hypo_square < base_square + alti_square:
                b -= 1
            else:
                a += 1
    return False


arr = [3,1,4,6,5]
# arr = [10, 4, 6, 12, 5]
# arr = [15, 8, 17]
print(naive_sol(arr))
print(sol_sort(arr))
