class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

printList(linkedList);

var reverseBetween = function (head, m, n) {
  let pos = 1, cur = head, start = head;

  while (pos < m) {
    start = cur;
    cur = cur.next;
    pos++;
  }

  let newList = null, tail = cur;

  while (pos <= n) {
    const next = cur.next;
    cur.next = newList;
    newList = cur;
    cur = next;
    pos++;
  }

  start.next = newList;
  tail.next = cur;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};
