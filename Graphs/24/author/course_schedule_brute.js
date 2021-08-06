/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const [child, parent] = prerequisites[i];
    adjList[parent].push(child);
  }

  for (let v = 0; v < numCourses; v++) {
    const q = [];
    const seen = new Set();
    for (let i = 0; i < adjList[v].length; i++) {
      q.push(adjList[v][i]);
    }
    while (q.length) {
      const current = q.shift();
      if (current === v) {
        return false;
      }
      seen.add(current);
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        if (!seen.has(adjacent[i])) {
          q.push(adjacent[i]);
        }
      }
    }
  }
  return true;
};
