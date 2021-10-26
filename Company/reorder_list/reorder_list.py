# Definition for singly-linked list.
# class ListNode:
#	def __init__(self, x):
#		self.val = x
#		self.next = None

class Solution:
	# @param A : head node of linked list
	# @return the head node in the linked list
	def reorderList(self, A):
		cur = A
		nodes = list()
		while cur:
			nodes.append(cur)
			cur = cur.next

		front, back = 0, len(nodes)-1
		count = 0
		ll = A
		for i in range(len(nodes)-1):
			if count % 2 == 0:
				ll.next = nodes[back]
				front += 1
				ll = ll.next
			else:
				ll.next = nodes[front]
				back -= 1
				ll = ll.next
			count += 1
		ll.next = None
		return A
