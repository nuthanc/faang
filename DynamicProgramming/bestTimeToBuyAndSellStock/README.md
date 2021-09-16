### Question

* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
```txt
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
Example 2:

Input: prices = [1]
Output: 0
```

### Step 1: Verify the Constraints

* Can prices be negative?
  * No, it's a non-negative integer
* Can there be no transactions in a day?
* Cannot buy stock on next day, after you buy or sell

### Step 2: Test Cases

* [], 0
* [1], 0
* [2, 1], 0
* [1,2,3,0,2], 3
* [2,1,8,5,0,100,6,5,84,7], 186

### Step 3: Solution without code

* prices[i], i - day
* buy, sell and rest
* buy: Cannot do 2 buys one after the other
* sell: cannot sell on day 1 as you don't have any stocks
* sell has cooldown of 1 day, next day you can't buy
* buy -> buy n
* buy -> sell y
* sell -> sell n
```txt
J is the first loop (Sell)
I is the second loop (Buy)
When i >=j, fill from previous seen max value
Else profit[j][i] = max(price[j]-price[i] + profit[i-2] if i-2 exists, profit[j-1][i] if j-1 exists, profit[j][i-1] if i-1 exists

### Further optimized the above to 
i < j:
profit_selling_current = prices[j] - prices[i]
if i-2 >= 0:
    profit_selling_current += dp[i-2]
profit_selling_previous = dp[j-1]
dp[j] = max(
    profit_selling_current, profit_selling_previous, dp[j])
```

#### Author's approach

```txt
When you buy the ith item the prev day has to be a rest day
When you sell the ith item you have to buy previously
When you take rest you can choose bw the max of prev rest and prev sell
```

* The problem with my logic is I am only considering selling the best at each iteration
* I should have considered also resting the best and buying the best

### Step 4: Solution with code

### Step 5: Double check for Errors

### Step 6: Walk through the Test Case

### Step 7: Time and Space Complexity

* Time Complexity: O(n^2)
* Space Complexity: O(n)