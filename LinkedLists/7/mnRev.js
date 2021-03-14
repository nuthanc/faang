function print_ll(head)
{
  node = head
    while (node){
        console.log(node.val)
        node = node.next
    }
}

class ListNode{
  constructor(val=0, next=null){
    this.val = val
    this.next = next
  }
}

const nodes = [1,2,3]
let node = new ListNode(val=nodes.shift())
const head = node
for (const ele of nodes){
  node.next = new ListNode(val=ele)
  node = node.next
}


const left = 1
const right = 2


function reverseBetween(head, left, right){
  if (head.next == null || left == right)
        return head
    
    let cur = head
    let prev = null

    for (let i = 0; i < left -1; i++) {
      prev = cur
      cur = cur.next
    }

    if (prev === null){
        prev = new ListNode(null, cur)
    }

    for (let i=left;i<right;i++) {
      next = cur.next
      cur.next = next.next
      next.next = prev.next
      prev.next = next
    }

    if (left === 1)
        return prev.next
    else
        return head
}

ptr = reverseBetween(head, left, right)
print_ll(ptr)