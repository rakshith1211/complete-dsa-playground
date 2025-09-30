#include <stdio.h>
#include "data_structures/singly_linked_list.h"
#include "data_structures/doubly_linked_list.h"
#include "data_structures/stack.h"
#include "data_structures/queue.h"
#include "data_structures/bst.h"
#include "data_structures/graph.h"
#include "algorithms/merge_sort.h"
#include "algorithms/sorting.h"
#include "algorithms/searching.h"

int main() {
    printf("=== Complete Data Structures & Algorithms Demo ===\n\n");
    
    // Stack Demo
    printf("--- Array Stack Demo ---\n");
    ArrayStack* stack = create_array_stack();
    push_array(stack, 10);
    push_array(stack, 20);
    push_array(stack, 30);
    printf("Popped: %d\n", pop_array(stack));
    printf("Top: %d\n", peek_array(stack));
    
    // Queue Demo
    printf("\n--- Queue Demo ---\n");
    ArrayQueue* queue = create_array_queue();
    enqueue_array(queue, 5);
    enqueue_array(queue, 15);
    enqueue_array(queue, 25);
    printf("Dequeued: %d\n", dequeue_array(queue));
    printf("Front: %d\n", front_array(queue));
    
    // BST Demo
    printf("\n--- Binary Search Tree Demo ---\n");
    BST* bst = create_bst();
    insert_bst(bst, 50);
    insert_bst(bst, 30);
    insert_bst(bst, 70);
    insert_bst(bst, 20);
    insert_bst(bst, 40);
    printf("Inorder traversal: ");
    inorder_traversal(bst->root);
    printf("\n");
    
    // Sorting Demo
    printf("\n--- Sorting Algorithms Demo ---\n");
    int arr1[] = {64, 34, 25, 12, 22, 11, 90};
    int n1 = sizeof(arr1) / sizeof(arr1[0]);
    printf("Original: ");
    print_array(arr1, n1);
    
    quick_sort(arr1, 0, n1 - 1);
    printf("Quick sorted: ");
    print_array(arr1, n1);
    
    int arr2[] = {64, 34, 25, 12, 22, 11, 90};
    heap_sort(arr2, n1);
    printf("Heap sorted: ");
    print_array(arr2, n1);
    
    // Searching Demo
    printf("\n--- Searching Demo ---\n");
    int sorted_arr[] = {11, 12, 22, 25, 34, 64, 90};
    int target = 25;
    int result = binary_search(sorted_arr, 7, target);
    printf("Binary search for %d: %s at index %d\n", 
           target, result != -1 ? "Found" : "Not found", result);
    
    // Graph Demo
    printf("\n--- Graph Demo ---\n");
    Graph* graph = create_graph(4);
    add_edge(graph, 0, 1, 1);
    add_edge(graph, 0, 2, 1);
    add_edge(graph, 1, 2, 1);
    add_edge(graph, 2, 3, 1);
    
    bfs(graph, 0);
    dfs(graph, 0);
    
    printf("\nAll demos completed successfully!\n");
    return 0;
}