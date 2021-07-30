
const bfs = function(adjList, startNode) {
  const q = [startNode];
  const values = [];
  const seen = new Set();
  while(q.length) {
    const node = q.shift();
    values.push(node);
    seen.add(node);
    for(const ele of adjList[node]) {
      if(!seen.has(ele)) {
        q.push(ele);
      }
    }
  }
  console.log(values);
}

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
bfs(adjacency_list, 0);