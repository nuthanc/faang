const findCycle = function(head) {
  let cur = head;
  const seen = new Set();
  while (cur) {
    if (seen.has(cur)) { 
      return cur
    }
    else {
      seen.add(cur); // I had made mistake of adding only cur.val
      //  this is wrong as there can be another node with the same val
      // by adding cur, we have both val and pointer to next object
      cur = cur.next;
    }
  }
  return null;
}

class Node{
  constructor(val,next = null) {
    this.val = val;
    this.next = next;
  }
}

function print_ll(cur){
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
}

let nodes = [1,2,3,4,5,6,7,8,3]
const head = new Node(nodes.shift())
let cur = head
for( val of nodes) {
  cur.next = new Node(val);
  cur = cur.next
}

print_ll(head);
console.log(findCycle(head));