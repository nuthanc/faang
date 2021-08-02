var numOfMinutes = function (n, headID, manager, informTime) {
  if (n <= 1) return 0;
  const subordinates = manager.map(() => []);
  for (let i = 0; i < manager.length; i++) {
    if (manager[i] > -1) {
      subordinates[manager[i]].push(i);
    }
  }

  return dfs(headID, subordinates, informTime);
};

var dfs = function (id, subordinates, informTime) {
  if (subordinates[id].length === 0) return 0;

  let max = 0;
  for (let i = 0; i < subordinates[id].length; i++) {
    max = Math.max(max, dfs(subordinates[id][i], subordinates, informTime));
  }
  return max + informTime[id];
};
