function print_ll(head) {
  let node = head;
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const nodes = [1, 2, 3];
let node = new ListNode((val = nodes.shift()));
const head = node;
for (const ele of nodes) {
  node.next = new ListNode((val = ele));
  node = node.next;
}

const left = 2;
const right = 3;

function reverseBetween(head, left, right) {
  if (head.next == null || left == right) return head;

  let cur = head;
  let pos = 1;
  
  while (pos < left - 1) {
    cur = cur.next;
    pos++;
  }
  let tail, start = null;
  if (left == 1) {
    tail = cur;
  }
  else {
    start = cur;
    cur = cur.next;
    pos++;
    tail = cur;
  }
  
  let listSoFar = null;

  while (pos <= right) {
    let next = cur.next;
    cur.next = listSoFar;
    listSoFar = cur;
    cur = next;
    pos++;
  }
  if (start)
    start.next = listSoFar;

  let rightPlusOne = cur;
  tail.next = rightPlusOne;

  if (left === 1) return listSoFar;
  else return head;
}

const ptr = reverseBetween(head, left, right);
print_ll(ptr);
