const dfs = function (graph, start_node, values, seen) {
  seen.add(start_node);
  values.push(start_node);
  for (let i=0;i < graph[start_node].length;i++) {
    value = graph[start_node][i];
    if (value > 0 && !seen.has(i)) {
      dfs(graph, i, values, seen);
    }
  }
};

const graph = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
];
const seen = new Set();
const values = [];
dfs(graph, 0, values, seen);
console.log(values);
