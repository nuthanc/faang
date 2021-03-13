def print_ll(head):
    node = head
    while node:
        print(node.val)
        node = node.next

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return str(self.val)

nodes = [1,2,3]
node = ListNode(val=nodes.pop(0))
head = node
for ele in nodes:
    node.next = ListNode(val=ele)
    node = node.next


# print_ll(head)
left = 1
right = 2


def reverseBetween(head, left, right):
    if head.next == None or left == right:
        return head
    
    cur = head
    prev = None

    for i in range(left-1):
        prev = cur
        cur = cur.next

    if prev is None:
        prev = ListNode(None, cur)

    for i in range(left, right):
        next = cur.next
        cur.next = next.next
        next.next = prev.next
        prev.next = next

    if left == 1:
        return prev.next
    else:
        return head

ptr = reverseBetween(head, left, right)
print_ll(ptr)