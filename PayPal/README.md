### Question

* Barry works as a chemist in a science lab. Barry is working on a new experiment. In this experiment, Barry prepares a list of chemical elements, each element having its own chemical reacton power
* Barry needs to select two elements and reacting the two elements together, the result of this reaction is the subtraction of the chemical power of the second element from the first element. Barry wants the result to be as close as possible to a value Barry had select before the experiment.
* The problem here is that Barry needs to repeat the reaction many times for different pairs of elements to get the closest pair to the desired result
* Each reaction costs time and materials, so Barryneeds to select the right elements before the reaction
* If there are **many options**, Barry selects the one that **the summation of the chemical reaction powers** of them is **minimized**
* Given the desired result and the list of elements chemical reaction power, help Barry to determine the summation of the chemical reaction power of the two elements Barry should select

### Example 

* Let's sassume the desired_result = 4, the size of the elements chemical reaction power list n = 5 and the list of elements chemical reaction power [2,1,0,7,2]. The 2 selected powers are [7,2]. Their subtraction= 5, the difference between subtraction and desired result is 1 and their sum is 9