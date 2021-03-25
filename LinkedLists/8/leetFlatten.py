"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""


class Solution:
    def flatten(self, head: 'Node') -> 'Node':
        cur = head
        self.make_links(cur, None)
        return head

    def make_links(self, cur, pnext):
        if cur:
            child = cur.child
            next = cur.next
            if child:
                cnext = next or pnext
                cur.next = child
                child.prev = cur
                cur.child = None
                self.make_links(child, cnext)
            self.make_links(next, pnext)
            if cur.next == None:
                cur.next = pnext
                if pnext:
                    pnext.prev = cur
