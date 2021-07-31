const bfs = function(graph) {
  const q = [0];
  const seen = new Set();
  const values = [];
  while(q.length > 0) {
    const index = q.shift();
    values.push(index);
    seen.add(index);
    for(let i=0;i<graph[index].length;i++) {
      const connection = graph[index][i];
      if (connection === 1 && !seen.has(i)) {
        q.push(i);
      }
    }
  }
  console.log(values);
}

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

bfs(graph);