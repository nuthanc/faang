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
  make_links(cur, null)
  return head;
};

var make_links = function (cur, pnext) {
  if (cur) {
    const child = cur.child;
    const next = cur.next;
    if (child) {
      const cnext = next || pnext;
      cur.next = child;
      child.prev = cur;
      cur.child = null;
      make_links(child, cnext);
    }
    make_links(next, pnext);
    if (cur.next === null) {
      cur.next = pnext;
      if (pnext) {
        pnext.prev = cur;
      }
    }
  }
}