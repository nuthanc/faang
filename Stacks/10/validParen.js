var isValid = function (s) {
  if (s === '') return true;

  const stack = []
  for (let ch of s) {
    switch(ch) {
      case '(': stack.push(ch); break;
      case '{': stack.push(ch);break;
      case '[': stack.push(ch);break;
      case ')': 
        if (stack.length){
          popped = stack.pop();
          if (popped === '(') break;
          else return false;
        } else return false;
      case '}': 
        if (stack.length){
          popped = stack.pop();
          if (popped === '{') break;
          else return false;
        } else return false;
      case ']':
        if (stack.length){
          popped = stack.pop();
          if (popped === '[') break;
          else return false;
        } else return false;
      default:
        return false;
    }
  }
  if (stack.length) return false;
  else return true;
};


const ch = '';
console.log(isValid(ch));