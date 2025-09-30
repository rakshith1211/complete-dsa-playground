"""
Singly Linked List Implementation

Time Complexities:
- Insert at beginning: O(1)
- Insert at end: O(n)
- Insert at position: O(n)
- Delete from beginning: O(1)
- Delete from end: O(n)
- Delete from position: O(n)
- Search: O(n)
- Access by index: O(n)

Space Complexity: O(n)
"""

class Node:
    """Node class for the linked list"""
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    """Singly Linked List implementation"""
    
    def __init__(self):
        self.head = None
        self.size = 0
    
    def insert_at_beginning(self, data):
        """Insert a new node at the beginning of the list"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    def insert_at_end(self, data):
        """Insert a new node at the end of the list"""
        new_node = Node(data)
        
        # If list is empty, make new node the head
        if self.head is None:
            self.head = new_node
        else:
            # Traverse to the last node
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = new_node
        self.size += 1
    
    def insert_at_position(self, data, position):
        """Insert a new node at a specific position"""
        if position < 0:
            raise ValueError("Position cannot be negative")
        
        # Insert at beginning if position is 0
        if position == 0:
            self.insert_at_beginning(data)
            return
        
        # Traverse to the node just before the insertion point
        current = self.head
        for i in range(position - 1):
            if current is None:
                raise IndexError("Position out of bounds")
            current = current.next
        
        # If position is beyond the list size, insert at the end
        if current is None:
            self.insert_at_end(data)
            return
        
        # Create and insert new node
        new_node = Node(data)
        new_node.next = current.next
        current.next = new_node
        self.size += 1
    
    def delete_from_beginning(self):
        """Delete the first node and return its data"""
        if self.head is None:
            raise IndexError("List is empty")
        
        data = self.head.data
        self.head = self.head.next
        self.size -= 1
        
        return data
    
    def delete_from_end(self):
        """Delete the last node and return its data"""
        if self.head is None:
            raise IndexError("List is empty")
        
        # If there's only one node
        if self.head.next is None:
            data = self.head.data
            self.head = None
            self.size -= 1
            return data
        
        # Traverse to the second-to-last node
        current = self.head
        while current.next.next is not None:
            current = current.next
        
        data = current.next.data
        current.next = None
        self.size -= 1
        
        return data
    
    def delete_from_position(self, position):
        """Delete a node at a specific position and return its data"""
        if self.head is None:
            raise IndexError("List is empty")
        
        if position < 0:
            raise ValueError("Position cannot be negative")
        
        # Delete from beginning if position is 0
        if position == 0:
            return self.delete_from_beginning()
        
        # Traverse to the node just before the deletion point
        current = self.head
        for i in range(position - 1):
            if current is None or current.next is None:
                raise IndexError("Position out of bounds")
            current = current.next
        
        # Check if position is valid
        if current.next is None:
            raise IndexError("Position out of bounds")
        
        temp = current.next
        data = temp.data
        current.next = temp.next
        self.size -= 1
        
        return data
    
    def search(self, data):
        """Search for an element in the list and return its position (-1 if not found)"""
        current = self.head
        position = 0
        
        while current is not None:
            if current.data == data:
                return position
            current = current.next
            position += 1
        
        return -1  # Element not found
    
    def get(self, index):
        """Get element at a specific index"""
        if index < 0 or index >= self.size:
            raise IndexError("Index out of bounds")
        
        current = self.head
        for i in range(index):
            current = current.next
        
        return current.data
    
    def display(self):
        """Display all elements in the list"""
        if self.head is None:
            print("List is empty")
            return
        
        print("List: ", end="")
        current = self.head
        while current is not None:
            print(current.data, end=" ")
            current = current.next
        print()
    
    def get_size(self):
        """Get the size of the list"""
        return self.size
    
    def is_empty(self):
        """Check if the list is empty"""
        return self.head is None

# Example usage and testing
if __name__ == "__main__":
    # Create a new linked list
    list = SinglyLinkedList()
    
    # Test insertions
    list.insert_at_end(10)
    list.insert_at_end(20)
    list.insert_at_end(30)
    list.display()  # Expected: 10 20 30
    
    list.insert_at_beginning(5)
    list.display()  # Expected: 5 10 20 30
    
    list.insert_at_position(15, 2)
    list.display()  # Expected: 5 10 15 20 30
    
    # Test search
    print(f"Position of 20: {list.search(20)}")  # Expected: 3
    print(f"Position of 100: {list.search(100)}")  # Expected: -1
    
    # Test deletions
    print(f"Deleted from beginning: {list.delete_from_beginning()}")  # Expected: 5
    list.display()  # Expected: 10 15 20 30
    
    print(f"Deleted from end: {list.delete_from_end()}")  # Expected: 30
    list.display()  # Expected: 10 15 20
    
    print(f"Deleted from position 1: {list.delete_from_position(1)}")  # Expected: 15
    list.display()  # Expected: 10 20
    
    print(f"Size: {list.get_size()}")  # Expected: 2
    print(f"Is empty: {list.is_empty()}")  # Expected: False