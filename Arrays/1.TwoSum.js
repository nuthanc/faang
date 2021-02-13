/* 
Array: [1, 3, 7, 9, 2], target = 11
*/

const findTwoSum = (arr, target) => {
  for (let p1=0; p1<arr.length-1; p1++) {
    const des = target - arr[p1]
    for (let p2=p1+1; p2<arr.length; p2++) {
      if (arr[p2] === des) {
        return [p1, p2];
      }
    }
  }
  return null; 
}

console.log(findTwoSum(arr=[1,3,7,9,2], target=11))