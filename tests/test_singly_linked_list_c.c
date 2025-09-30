#include <stdio.h>
#include <assert.h>
#include "../src/c/singly_linked_list.h"

void test_create_and_destroy() {
    printf("Testing create and destroy...\n");
    LinkedList* list = create_list();
    assert(list != NULL);
    assert(list->head == NULL);
    assert(list->size == 0);
    destroy_list(list);
    printf("Create and destroy test passed!\n\n");
}

void test_insert_at_beginning() {
    printf("Testing insert at beginning...\n");
    LinkedList* list = create_list();
    
    insert_at_beginning(list, 10);
    assert(list->head != NULL);
    assert(list->head->data == 10);
    assert(list->size == 1);
    
    insert_at_beginning(list, 20);
    assert(list->head->data == 20);
    assert(list->head->next->data == 10);
    assert(list->size == 2);
    
    destroy_list(list);
    printf("Insert at beginning test passed!\n\n");
}

void test_insert_at_end() {
    printf("Testing insert at end...\n");
    LinkedList* list = create_list();
    
    insert_at_end(list, 10);
    assert(list->head != NULL);
    assert(list->head->data == 10);
    assert(list->head->next == NULL);
    assert(list->size == 1);
    
    insert_at_end(list, 20);
    assert(list->head->data == 10);
    assert(list->head->next->data == 20);
    assert(list->head->next->next == NULL);
    assert(list->size == 2);
    
    destroy_list(list);
    printf("Insert at end test passed!\n\n");
}

void test_delete_from_beginning() {
    printf("Testing delete from beginning...\n");
    LinkedList* list = create_list();
    
    // Test with empty list
    int result = delete_from_beginning(list);
    assert(result == -1); // Should return -1 for empty list
    
    insert_at_end(list, 10);
    insert_at_end(list, 20);
    
    int data = delete_from_beginning(list);
    assert(data == 10);
    assert(list->head->data == 20);
    assert(list->size == 1);
    
    data = delete_from_beginning(list);
    assert(data == 20);
    assert(list->head == NULL);
    assert(list->size == 0);
    
    destroy_list(list);
    printf("Delete from beginning test passed!\n\n");
}

void test_search() {
    printf("Testing search...\n");
    LinkedList* list = create_list();
    
    // Test with empty list
    int position = search(list, 10);
    assert(position == -1);
    
    insert_at_end(list, 10);
    insert_at_end(list, 20);
    insert_at_end(list, 30);
    
    position = search(list, 10);
    assert(position == 0);
    
    position = search(list, 20);
    assert(position == 1);
    
    position = search(list, 30);
    assert(position == 2);
    
    position = search(list, 100);
    assert(position == -1);
    
    destroy_list(list);
    printf("Search test passed!\n\n");
}

int main() {
    printf("Running Singly Linked List tests in C...\n\n");
    
    test_create_and_destroy();
    test_insert_at_beginning();
    test_insert_at_end();
    test_delete_from_beginning();
    test_search();
    
    printf("All C tests passed successfully!\n");
    return 0;
}