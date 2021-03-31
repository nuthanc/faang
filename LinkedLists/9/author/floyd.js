var detectCycle = function (head) {
  if (!head) return null;
  let hare = head, tortoise = head;
  while(true) {
    hare = hare.next;
    tortoise = tortoise.next;

    if (hare === null || hare.next === null) return null;
    else hare = hare.next;

    if (hare === tortoise) break;
  }

  let p1=head, p2 = hare;
  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
