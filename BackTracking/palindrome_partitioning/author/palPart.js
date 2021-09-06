const isPalindrome = (start, end, str) => {
  while(start < end) {
    if(str[start] !== str[end]) return false;
    
    start++;
    end--;
  }
  
  return true;
}


const solve = (startingIdx, S, partialSplits, result) => {
  if(startingIdx === S.length) {
      result.push([...partialSplits]);
  } else {
    for(var i = startingIdx; i < S.length; i++) {
      if(isPalindrome(startingIdx, i, S)) {
        const palindromeSnippet = S.slice(startingIdx, i + 1);
        partialSplits.push(palindromeSnippet);
        console.log(partialSplits);
        solve(i + 1, S, partialSplits, result);
        partialSplits.pop();
        console.log('After pop:', partialSplits);
      }
    }        
  }
}

var partition = function(str) {
  const result = [];
  
  solve(0, str, [], result);
  
  return result;
};

const str = "aaba"

console.log(partition(str));