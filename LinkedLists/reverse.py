class Node:
    def __init__(self,data):
        self.data = data
        self.next = None


def print_ll(ll):
    while ll != None:
        print(ll.data, end=" ")
        ll = ll.next

def reverse(cur):
    next = prev = None
    while cur != None:
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    return prev


ll = Node(1)
ll.next = Node(2)
ll.next.next = Node(3)
ll.next.next.next = Node(4)
ll.next.next.next.next = Node(5)

print_ll(ll)
head = reverse(ll)
print("Head is ", head.data)
print("Reverse is:")
print_ll(head)
