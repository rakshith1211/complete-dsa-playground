/**
 * Main class to demonstrate the usage of data structures and algorithms
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("Data Structures & Algorithms Implementation Demo");
        System.out.println("================================================");
        System.out.println();
        
        // Demonstrate Singly Linked List
        System.out.println("1. Singly Linked List Demo:");
        SinglyLinkedList list = new SinglyLinkedList();
        
        System.out.println("Inserting elements: 30, 10, 20, 5, 15");
        list.insertAtEnd(30);
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtBeginning(5);
        list.insertAtPosition(15, 2);
        
        System.out.print("Current list: ");
        list.display();
        
        System.out.println("Deleting from beginning: " + list.deleteFromBeginning());
        System.out.println("Deleting from end: " + list.deleteFromEnd());
        
        System.out.print("Final list: ");
        list.display();
        
        System.out.println("Size of list: " + list.size());
        System.out.println("Position of 20: " + list.search(20));
        System.out.println("Position of 100: " + list.search(100));
        System.out.println();
        
        // Demonstrate Merge Sort
        System.out.println("2. Merge Sort Demo:");
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.print("Original array: ");
        MergeSort.printArray(arr);
        
        MergeSort.sort(arr);
        
        System.out.print("Sorted array: ");
        MergeSort.printArray(arr);
        System.out.println();
        
        System.out.println("Demo completed successfully!");
    }
}