var numOfMinutes = function (n, headID, manager, informTime) {
  if (n <= 1) return 0;
  const subordinates = manager.map(() => []);
  for (let i = 0; i < manager.length; i++) {
    if (manager[i] > -1) {
      subordinates[manager[i]].push(i);
    }
  }

  return dfs(headID, subordinates, informTime, 0, 0);
};

var dfs = function (id, subordinates, informTime, minutes, max) {
  // console.log(id);
  // console.log(subordinates[id], subordinates)
  if (subordinates[id].length === 0) {
    return max;
  }

  minutes = informTime[id] + minutes;
  max = Math.max(max, minutes);

  for (let i = 0; i < subordinates[id].length; i++) {
    max = dfs(subordinates[id][i], subordinates, informTime, minutes, max);
  }
  return max;
};
