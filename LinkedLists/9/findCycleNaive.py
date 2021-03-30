
def find_cycle(head):
    cur = head
    seen = set()
    while(cur):
        if cur in seen:
            return cur.val
        else:
            seen.add(cur)
    #         // I had made mistake of adding only cur.val
    #   //  this is wrong as there can be another node with the same val
    #   // by adding cur, we have both val and pointer to next object
            cur = cur.next


class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

def print_ll(cur):
    while(cur):
        print(cur.val, end=" ")
        cur = cur.next

nodes = [1,2,3,4,5,6,7,8]
head = Node(nodes.pop(0))
cur = head

for val in nodes:
    cur.next = Node(val)
    cur = cur.next

cur.next = head.next.next;



# print_ll(head)
# print()
print(find_cycle(head))
