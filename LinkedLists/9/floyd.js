var detectCycle = function (head) {
  if (!head) return null;
  let fast, slow;
  if (head.next) {
    fast = head.next.next;
    slow = head.next;
  }
  else {
    return null;
  }

  while (fast != slow && fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    }
    else {
      fast = null;
    }
  }

  if (!fast) return null;

  cur = head;
  while (cur !== fast) {
    cur = cur.next;
    fast = fast.next;
  }
  return fast;
};
