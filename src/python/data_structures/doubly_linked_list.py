class DoublyNode:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
    
    def insert_front(self, data):
        new_node = DoublyNode(data)
        new_node.next = self.head
        
        if self.head:
            self.head.prev = new_node
        else:
            self.tail = new_node
        
        self.head = new_node
        self.size += 1
    
    def insert_back(self, data):
        new_node = DoublyNode(data)
        new_node.prev = self.tail
        
        if self.tail:
            self.tail.next = new_node
        else:
            self.head = new_node
        
        self.tail = new_node
        self.size += 1
    
    def delete(self, data):
        current = self.head
        while current and current.data != data:
            current = current.next
        
        if not current:
            return False
        
        if current.prev:
            current.prev.next = current.next
        else:
            self.head = current.next
        
        if current.next:
            current.next.prev = current.prev
        else:
            self.tail = current.prev
        
        self.size -= 1
        return True
    
    def print_forward(self):
        current = self.head
        while current:
            print(current.data, end=" ")
            current = current.next
        print()
    
    def print_backward(self):
        current = self.tail
        while current:
            print(current.data, end=" ")
            current = current.prev
        print()
    
    def __len__(self):
        return self.size
    
    def is_empty(self):
        return self.size == 0