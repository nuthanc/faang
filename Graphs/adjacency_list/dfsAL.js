const dfs = function (adjacency_list, start_node, values, seen) {
  seen.add(start_node);
  values.push(start_node);
  for(const ele of adjacency_list[start_node]) {
    if (!seen.has(ele)) {
      dfs(adjacency_list, ele, values, seen)
    }
  }
};

const adjacency_list = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];
const seen = new Set();
const values = [];
dfs(adjacency_list, 0, values, seen);
console.log(values)
