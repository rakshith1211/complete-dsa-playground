/**
 * Singly Linked List Implementation in JavaScript
 * 
 * Time Complexities:
 * - Insert at beginning: O(1)
 * - Insert at end: O(n)
 * - Insert at position: O(n)
 * - Delete from beginning: O(1)
 * - Delete from end: O(n)
 * - Delete from position: O(n)
 * - Search: O(n)
 * - Access by index: O(n)
 * 
 * Space Complexity: O(n)
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // Insert a new node at the beginning of the list
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return data;
    }
    
    // Insert a new node at the end of the list
    insertAtEnd(data) {
        const newNode = new Node(data);
        
        // If list is empty, make new node the head
        if (this.head === null) {
            this.head = newNode;
        } else {
            // Traverse to the last node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return data;
    }
    
    // Insert a new node at a specific position
    insertAtPosition(data, position) {
        if (position < 0) {
            throw new Error("Position cannot be negative");
        }
        
        // Insert at beginning if position is 0
        if (position === 0) {
            return this.insertAtBeginning(data);
        }
        
        const newNode = new Node(data);
        
        // Traverse to the node just before the insertion point
        let current = this.head;
        for (let i = 0; i < position - 1 && current !== null; i++) {
            current = current.next;
        }
        
        // If position is beyond the list size, insert at the end
        if (current === null) {
            return this.insertAtEnd(data);
        }
        
        // Insert new node
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return data;
    }
    
    // Delete the first node and return its data
    deleteFromBeginning() {
        if (this.head === null) {
            throw new Error("List is empty");
        }
        
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }
    
    // Delete the last node and return its data
    deleteFromEnd() {
        if (this.head === null) {
            throw new Error("List is empty");
        }
        
        // If there's only one node
        if (this.head.next === null) {
            const data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }
        
        // Traverse to the second-to-last node
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        
        const data = current.next.data;
        current.next = null;
        this.size--;
        return data;
    }
    
    // Delete a node at a specific position and return its data
    deleteFromPosition(position) {
        if (this.head === null) {
            throw new Error("List is empty");
        }
        
        if (position < 0) {
            throw new Error("Position cannot be negative");
        }
        
        // Delete from beginning if position is 0
        if (position === 0) {
            return this.deleteFromBeginning();
        }
        
        // Traverse to the node just before the deletion point
        let current = this.head;
        for (let i = 0; i < position - 1 && current !== null; i++) {
            current = current.next;
        }
        
        // Check if position is valid
        if (current === null || current.next === null) {
            throw new Error("Position out of bounds");
        }
        
        const temp = current.next;
        const data = temp.data;
        current.next = temp.next;
        this.size--;
        return data;
    }
    
    // Search for an element in the list and return its position (-1 if not found)
    search(data) {
        let current = this.head;
        let position = 0;
        
        while (current !== null) {
            if (current.data === data) {
                return position;
            }
            current = current.next;
            position++;
        }
        
        return -1; // Element not found
    }
    
    // Get element at a specific index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.data;
    }
    
    // Display all elements in the list as an array
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }
    
    // Get the size of the list
    getSize() {
        return this.size;
    }
    
    // Check if the list is empty
    isEmpty() {
        return this.head === null;
    }
    
    // Clear the list
    clear() {
        this.head = null;
        this.size = 0;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SinglyLinkedList;
}