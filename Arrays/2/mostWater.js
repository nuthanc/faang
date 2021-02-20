const mostWater = (height) => {
  let maxArea = 0
  for(let p1=0;p1<height.length - 1;p1++) {
    for(let p2=p1+1;p2<height.length;p2++) {
      const calcArea = Math.min(height[p1], height[p2]) * (p2 - p1);
      if (calcArea > maxArea) {
        maxArea = calcArea;
      }
    }
  }
  return maxArea
};

console.log(mostWater(height = [7, 1, 2, 3, 9]));
