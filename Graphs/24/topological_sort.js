/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map(() => []);
  const indegree = new Array(numCourses).fill(0);
  for (const item of prerequisites) {
    const [child, parent] = item;
    adjList[parent].push(child);
    indegree[child]++;
  }
  let num = 0;
  const stack = [];

  for (let v = 0; v < numCourses; v++) {
    if (indegree[v] === 0) {
      stack.push(v);
    }
  }

  while (stack.length) {
    const v = stack.pop();
    num++;
    for (const node of adjList[v]) {
      indegree[node]--;
      if (indegree[node] === 0) {
        stack.push(node);
      }
    }
  }

  return num === numCourses ? true : false;
};
