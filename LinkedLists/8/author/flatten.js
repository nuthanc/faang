/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let cur = head;

  while(cur) {
    const child = cur.child;
    if (child) {
      let tail = child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = cur.next;
      if (cur.next)
        cur.next.prev = tail;
      cur.next = child;
      child.prev = cur;
      cur.child = null;
    }
    cur = cur.next;
  }

  return head;
};
