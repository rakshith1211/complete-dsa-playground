#include <stdio.h>
#include "data_structures/singly_linked_list.h"
#include "algorithms/merge_sort.h"

int main() {
    printf("Data Structures & Algorithms Implementation Demo\n");
    printf("================================================\n\n");
    
    // Demonstrate Singly Linked List
    printf("1. Singly Linked List Demo:\n");
    LinkedList* list = create_list();
    
    printf("Inserting elements: 30, 10, 20, 5, 15\n");
    insert_at_end(list, 30);
    insert_at_end(list, 10);
    insert_at_end(list, 20);
    insert_at_beginning(list, 5);
    insert_at_position(list, 15, 2);
    
    printf("Current list: ");
    display(list);
    
    printf("Deleting from beginning: %d\n", delete_from_beginning(list));
    printf("Deleting from end: %d\n", delete_from_end(list));
    
    printf("Final list: ");
    display(list);
    
    printf("Size of list: %d\n", get_size(list));
    printf("Position of 20: %d\n", search(list, 20));
    printf("Position of 100: %d\n", search(list, 100));
    
    destroy_list(list);
    printf("\n");
    
    // Demonstrate Merge Sort
    printf("2. Merge Sort Demo:\n");
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int arr_size = sizeof(arr) / sizeof(arr[0]);
    
    printf("Original array: ");
    for (int i = 0; i < arr_size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    
    merge_sort(arr, 0, arr_size - 1);
    
    printf("Sorted array: ");
    for (int i = 0; i < arr_size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n\n");
    
    printf("Demo completed successfully!\n");
    return 0;
}