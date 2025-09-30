package data_structures;

public class Stack {
    private static final int MAX_SIZE = 1000;
    
    // Array-based stack
    public static class ArrayStack {
        private int[] data;
        private int top;
        
        public ArrayStack() {
            data = new int[MAX_SIZE];
            top = -1;
        }
        
        public void push(int value) {
            if (isFull()) throw new RuntimeException("Stack overflow");
            data[++top] = value;
        }
        
        public int pop() {
            if (isEmpty()) throw new RuntimeException("Stack underflow");
            return data[top--];
        }
        
        public int peek() {
            if (isEmpty()) throw new RuntimeException("Stack is empty");
            return data[top];
        }
        
        public boolean isEmpty() { return top == -1; }
        public boolean isFull() { return top == MAX_SIZE - 1; }
        public int size() { return top + 1; }
    }
    
    // Linked list-based stack
    public static class LinkedStack {
        private StackNode top;
        private int size;
        
        private class StackNode {
            int data;
            StackNode next;
            
            StackNode(int data) {
                this.data = data;
            }
        }
        
        public void push(int value) {
            StackNode newNode = new StackNode(value);
            newNode.next = top;
            top = newNode;
            size++;
        }
        
        public int pop() {
            if (isEmpty()) throw new RuntimeException("Stack underflow");
            int data = top.data;
            top = top.next;
            size--;
            return data;
        }
        
        public int peek() {
            if (isEmpty()) throw new RuntimeException("Stack is empty");
            return top.data;
        }
        
        public boolean isEmpty() { return top == null; }
        public int size() { return size; }
    }
}