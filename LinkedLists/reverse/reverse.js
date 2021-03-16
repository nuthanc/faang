class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


function print_ll(node){
  let ll = node;
  while (ll != null){
    console.log(ll.data)
    ll = ll.next
  }
}
function reverse(head) {
  let cur = head
  let next = prev = null
  while (cur !== null){
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next}
  return prev
}


const ll = new Node(1)
ll.next = new Node(2)
ll.next.next = new Node(3)
ll.next.next.next = new Node(4)
ll.next.next.next.next = new Node(5)

print_ll(ll)
head = reverse(ll)
console.log("Reverse is:")
print_ll(head)
