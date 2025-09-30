class ArrayStack:
    def __init__(self, max_size=1000):
        self.data = [0] * max_size
        self.top = -1
        self.max_size = max_size
    
    def push(self, value):
        if self.is_full():
            raise Exception("Stack overflow")
        self.top += 1
        self.data[self.top] = value
    
    def pop(self):
        if self.is_empty():
            raise Exception("Stack underflow")
        value = self.data[self.top]
        self.top -= 1
        return value
    
    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.data[self.top]
    
    def is_empty(self):
        return self.top == -1
    
    def is_full(self):
        return self.top == self.max_size - 1
    
    def size(self):
        return self.top + 1

class LinkedStack:
    class StackNode:
        def __init__(self, data):
            self.data = data
            self.next = None
    
    def __init__(self):
        self.top = None
        self._size = 0
    
    def push(self, value):
        new_node = self.StackNode(value)
        new_node.next = self.top
        self.top = new_node
        self._size += 1
    
    def pop(self):
        if self.is_empty():
            raise Exception("Stack underflow")
        value = self.top.data
        self.top = self.top.next
        self._size -= 1
        return value
    
    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.top.data
    
    def is_empty(self):
        return self.top is None
    
    def size(self):
        return self._size