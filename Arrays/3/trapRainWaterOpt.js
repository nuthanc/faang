var trap = function (height) {
  let p1 = 0, p2 = (height.length>0)? height.length - 1: 0, val = 0, maxLeft = 0, maxRight = 0;

  while(p1 != p2) { // Instead of not equal to use less than just like the author did. This will ensure for all values lesser than p1 and p2 can be just height.lenght - 1
    if (height[p1] <= height[p2]) {
      if (maxLeft > height[p1]) {
        val += maxLeft - height[p1];
      }
      maxLeft = Math.max(maxLeft, height[p1]);
      p1++;
    }
    else {
      if (maxRight > height[p2]) {
        val += maxRight - height[p2];
      }
      maxRight = Math.max(maxRight, height[p2]);
      p2--;
    }
  }
  
  return val;
};

console.log(trap((height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])));
