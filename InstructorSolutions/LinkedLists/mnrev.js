/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

var reverseBetween = function (head, m, n) {
  let currentPos = 1,
    currentNode = head;
  let start = head;

  while (currentPos < m) { // Use for loop
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let prev = null,
    tail = currentNode;

  while (currentPos >= m && currentPos <= n) { // Can use left and right and for loop
    const next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = prev; // This was not required at all for Bijay, he did it in 2nd while loop itself
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return prev;
  }
};

printList(linkedList);
console.log('after reverse');
printList(reverseBetween(linkedList, 2, 4));
