def find_cycle(head):
    if not head:
        return None
    if head.next:
        fast = head.next.next
        slow = head.next
    else:
        return None

    while fast != slow and fast:
        slow = slow.next
        if fast.next:
            fast = fast.next.next
        else:
            fast = None
    if not fast:
        return None
    else:
        cur = head
        while cur != fast:
            cur = cur.next
            fast = fast.next
        return fast
