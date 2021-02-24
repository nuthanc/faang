const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const getTrappedRainwater = function (heights) {
  let totalWater = 0;

  for(let p=0; p < heights.length; p++) {
    let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

    while(leftP >= 0) {
      Math.max(heights[leftP], maxLeft);
      leftP--;
    }

    while(right < heights.length) {
      Math.max(heights[rightP], maxRight);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
}

console.log(getTrappedRainwater(elevationArray));

