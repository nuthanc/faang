var minRemoveToMakeValid = function (s) {
  const res = s.split('');
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop(i);
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    index = stack.pop();
    res[index] = '';
  }
  return res.join('');
};
