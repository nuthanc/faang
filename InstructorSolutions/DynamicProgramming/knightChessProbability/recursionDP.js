/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 >= r < N, 0 >= c < N, k === 0
probability(r, c, k) = 1

0 >= r < N, 0 >= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0

 */

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

const recurse = (N, K, r, c, dp) => {
  if (r < 0 || c < 0 || r >= N || c >= N) {
    return 0;
  }

  if (K === 0) {
    return 1;
  }

  if (dp[K][r][c] !== undefined) return dp[K][r][c];

  let res = 0;
  for (let dir of DIRECTIONS) {
    res += recurse(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
  }

  dp[K][r][c] = res;

  return dp[K][r][c];
};

var knightProbability = function (N, K, r, c) {
  const dp = new Array(K + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));

  return recurse(N, K, r, c, dp);
};

console.log(knightProbability(6, 2, 2, 2));
