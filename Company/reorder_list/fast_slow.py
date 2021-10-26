# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        #1 find the middle node using fast-slow pointer
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # Slow pointer will now point to first half last element

        # reverse the links direction in second half
        second = slow.next
        # First half last element pointing to None (in case of Odd Nodes)
        slow.next = None
        prev = None
        while second:
            second.next, prev, second = prev, second, second.next

        # At the end or reversal seconnd will point to Null/None

        # Merge First & Second Half in alternating Way
        first, second = head, prev
        while second:  # as #second-half is = or < the first half
            temp1, temp2 = first.next, second.next
            first.next, second.next = second, first.next
            first, second = temp1, temp2
