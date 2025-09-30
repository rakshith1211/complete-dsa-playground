package data_structures;

public class DoublyLinkedList {
    private DoublyNode head;
    private DoublyNode tail;
    private int size;
    
    private class DoublyNode {
        int data;
        DoublyNode next;
        DoublyNode prev;
        
        DoublyNode(int data) {
            this.data = data;
        }
    }
    
    public void insertFront(int data) {
        DoublyNode newNode = new DoublyNode(data);
        newNode.next = head;
        
        if (head != null) head.prev = newNode;
        else tail = newNode;
        
        head = newNode;
        size++;
    }
    
    public void insertBack(int data) {
        DoublyNode newNode = new DoublyNode(data);
        newNode.prev = tail;
        
        if (tail != null) tail.next = newNode;
        else head = newNode;
        
        tail = newNode;
        size++;
    }
    
    public boolean delete(int data) {
        DoublyNode current = head;
        while (current != null && current.data != data) {
            current = current.next;
        }
        
        if (current == null) return false;
        
        if (current.prev != null) current.prev.next = current.next;
        else head = current.next;
        
        if (current.next != null) current.next.prev = current.prev;
        else tail = current.prev;
        
        size--;
        return true;
    }
    
    public void printForward() {
        DoublyNode current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
    
    public void printBackward() {
        DoublyNode current = tail;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.prev;
        }
        System.out.println();
    }
    
    public int size() { return size; }
    public boolean isEmpty() { return size == 0; }
}