# Big O Asymptotic Analysis

### What is Good Code
* Readable
* Scalable

### Run time
* How long does it take to run
* He used performance.now() before start of our code and performance.now() after the end of the code
* Took the difference to get time in ms
* How to measure good and bad code without relying on the machine's power is Big O
* As **input** increases, how many **operations** do we need to do
```js
const arr = ['nemo'];

const large = new Array(10000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i=0; i<array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  let t1 = performance.now();
  console.log(`Call to find Nemo took ${t1-t0} milliseconds`);
}

findNemo(large);
```
* Here large array is the input
* As its size increases, the longer it takes to run
* Big O: How many steps or operations

