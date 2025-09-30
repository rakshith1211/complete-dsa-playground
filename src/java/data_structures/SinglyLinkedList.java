import java.util.NoSuchElementException;

/**
 * Singly Linked List Implementation
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
public class SinglyLinkedList {
    // Node class for the linked list
    private class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    
    private Node head;
    private int size;
    
    // Constructor
    public SinglyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    
    // Insert a new node at the beginning of the list
    public void insertAtBeginning(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        size++;
    }
    
    // Insert a new node at the end of the list
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        
        // If list is empty, make new node the head
        if (head == null) {
            head = newNode;
        } else {
            // Traverse to the last node
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }
    
    // Insert a new node at a specific position
    public void insertAtPosition(int data, int position) {
        if (position < 0) {
            throw new IllegalArgumentException("Position cannot be negative");
        }
        
        // Insert at beginning if position is 0
        if (position == 0) {
            insertAtBeginning(data);
            return;
        }
        
        // Traverse to the node just before the insertion point
        Node current = head;
        for (int i = 0; i < position - 1 && current != null; i++) {
            current = current.next;
        }
        
        // If position is beyond the list size, insert at the end
        if (current == null) {
            insertAtEnd(data);
            return;
        }
        
        // Create and insert new node
        Node newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode;
        size++;
    }
    
    // Delete the first node and return its data
    public int deleteFromBeginning() {
        if (head == null) {
            throw new NoSuchElementException("List is empty");
        }
        
        int data = head.data;
        head = head.next;
        size--;
        
        return data;
    }
    
    // Delete the last node and return its data
    public int deleteFromEnd() {
        if (head == null) {
            throw new NoSuchElementException("List is empty");
        }
        
        // If there's only one node
        if (head.next == null) {
            int data = head.data;
            head = null;
            size--;
            return data;
        }
        
        // Traverse to the second-to-last node
        Node current = head;
        while (current.next.next != null) {
            current = current.next;
        }
        
        int data = current.next.data;
        current.next = null;
        size--;
        
        return data;
    }
    
    // Delete a node at a specific position and return its data
    public int deleteFromPosition(int position) {
        if (head == null) {
            throw new NoSuchElementException("List is empty");
        }
        
        if (position < 0) {
            throw new IllegalArgumentException("Position cannot be negative");
        }
        
        // Delete from beginning if position is 0
        if (position == 0) {
            return deleteFromBeginning();
        }
        
        // Traverse to the node just before the deletion point
        Node current = head;
        for (int i = 0; i < position - 1 && current != null; i++) {
            current = current.next;
        }
        
        // Check if position is valid
        if (current == null || current.next == null) {
            throw new IndexOutOfBoundsException("Position out of bounds");
        }
        
        Node temp = current.next;
        int data = temp.data;
        current.next = temp.next;
        size--;
        
        return data;
    }
    
    // Search for an element in the list and return its position (-1 if not found)
    public int search(int data) {
        Node current = head;
        int position = 0;
        
        while (current != null) {
            if (current.data == data) {
                return position;
            }
            current = current.next;
            position++;
        }
        
        return -1; // Element not found
    }
    
    // Get element at a specific index
    public int get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        
        Node current = head;
        for (int i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.data;
    }
    
    // Display all elements in the list
    public void display() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        
        System.out.print("List: ");
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
    
    // Get the size of the list
    public int size() {
        return size;
    }
    
    // Check if the list is empty
    public boolean isEmpty() {
        return head == null;
    }
    
    // Main method for testing
    public static void main(String[] args) {
        SinglyLinkedList list = new SinglyLinkedList();
        
        // Test insertions
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);
        list.display(); // Expected: 10 20 30
        
        list.insertAtBeginning(5);
        list.display(); // Expected: 5 10 20 30
        
        list.insertAtPosition(15, 2);
        list.display(); // Expected: 5 10 15 20 30
        
        // Test search
        System.out.println("Position of 20: " + list.search(20)); // Expected: 3
        System.out.println("Position of 100: " + list.search(100)); // Expected: -1
        
        // Test deletions
        System.out.println("Deleted from beginning: " + list.deleteFromBeginning()); // Expected: 5
        list.display(); // Expected: 10 15 20 30
        
        System.out.println("Deleted from end: " + list.deleteFromEnd()); // Expected: 30
        list.display(); // Expected: 10 15 20
        
        System.out.println("Deleted from position 1: " + list.deleteFromPosition(1)); // Expected: 15
        list.display(); // Expected: 10 20
        
        System.out.println("Size: " + list.size()); // Expected: 2
        System.out.println("Is empty: " + list.isEmpty()); // Expected: false
    }
}