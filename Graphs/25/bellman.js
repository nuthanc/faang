/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);
  distances[k-1] = 0
  for (let i=0; i < n-1; i++) {
    let changed = false;
    for (const time of times) {
      const [u, v, w] = time;
      if (distances[u-1] + w < distances[v-1]) {
        distances[v - 1] = distances[u - 1] + w;
        changed = true;
      }
    }
    if (!changed) break;
  }
  const value = Math.max(...distances);
  return value === Infinity? -1 : value;
};

// Time Complexity: O(n*E)?