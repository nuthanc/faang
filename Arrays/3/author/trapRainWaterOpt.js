var trap = function (height) {
  let p1 = 0,
    p2 = height.length - 1,
    val = 0,
    maxLeft = 0,
    maxRight = 0;

  while (p1 < p2) {
    if (height[p1] <= height[p2]) {
      if (maxLeft <= height[p1]) {
        maxLeft = height[p1];
      } else {
        val += maxLeft - height[p1];
      }
      p1++;
    } else {
      if (maxRight <= height[p2]) {
        maxRight = height[p2];
      } else {
        val += maxRight - height[p2];
      }
      p2--;
    }
  }

  return val;
};

console.log(trap((height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])));
