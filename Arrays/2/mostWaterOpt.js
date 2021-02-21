const getMaxWaterContainer = (heights) => {
  let maxArea = 0;
  let p1 = 0;
  let p2 = heights.length - 1;
  while (p1 != p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(area, maxArea);
    if (heights[p1] > heights[p2]) {
      p2--;
    }
    else {
      p1++; 
    }
  }
  return maxArea;
};

console.log(getMaxWaterContainer((heights = [7, 1, 2, 3, 9])));
