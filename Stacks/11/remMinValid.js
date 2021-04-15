var minRemoveToMakeValid = function (s) {
  let i = 0;
  const l = s.length;
  if (l === 0) return s;
  const stack = [];
  const invalid = new Set();
  let valid = '';

  while (i < l) {
    let ch = s[i];

    if (ch === '(') {
      stack.push(i);
    } else if (ch === ')') {
      if (stack.length > 0) stack.pop();
      else invalid.add(i);
    }
    i++;
  }

  while (stack.length > 0) {
    invalid.add(stack.pop());
  }

  i = 0;
  while (i < l) {
    if (!invalid.has(i)) valid += s[i];
    i++;
  }

  return valid;
};
