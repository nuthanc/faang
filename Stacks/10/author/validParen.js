var isValid = function (s) {
  if (s.length === 0) return true;

  const parens = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const stack = [];

  for (let ch of s) {
    if (parens[ch]) {
      stack.push(ch);
    } else {
      leftParen = stack.pop();
      if (parens[leftParen] !== ch) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const ch = ']';
console.log(isValid(ch));
