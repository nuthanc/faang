const findCycle = function (head) {
  let cur = head;
  const seen = new Set();
  while (!seen.has(cur)) {
    if(cur.next === null) {
      return false;
    }
    seen.add(cur);
    cur = cur.next;
  }
  return cur;
};
