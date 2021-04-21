class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.stack1 = []
        self.stack2 = []

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        while(len(self.stack2)):
            ele = self.stack2.pop()
            self.stack1.append(ele)
        self.stack1.append(x)
        while(len(self.stack1)):
            ele = self.stack1.pop()
            self.stack2.append(ele)

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        return self.stack2.pop()

    def peek(self) -> int:
        """
        Get the front element.
        """
        return self.stack2[len(self.stack2) - 1]

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return False if len(self.stack2) else True
