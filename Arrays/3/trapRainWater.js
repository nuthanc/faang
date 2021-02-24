var trap = function (height) {
  let l= (height.length !== 0)? height[0] : 0;
  let r = 0, rp = 0, val = 0;
  for (let p=1; p < height.length-1; p++) {
    l = Math.max(height[p - 1], l);
    if (l > height[p]){
      if (rp <= p){
          r = 0
          for (let i=p+1; i<height.length; i++){
            if( height[i] > r){
                r = height[i]
                rp = i
              }
            if (r >= l) break;
          }
      }
      if (r > height[p]) val += Math.min(l, r) - height[p];
    }
  }
  return val
};

console.log(trap((height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])));