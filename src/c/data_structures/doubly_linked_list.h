#ifndef DOUBLY_LINKED_LIST_H
#define DOUBLY_LINKED_LIST_H

typedef struct DoublyNode {
    int data;
    struct DoublyNode* next;
    struct DoublyNode* prev;
} DoublyNode;

typedef struct {
    DoublyNode* head;
    DoublyNode* tail;
    int size;
} DoublyLinkedList;

DoublyLinkedList* create_doubly_list();
void insert_front_doubly(DoublyLinkedList* list, int data);
void insert_back_doubly(DoublyLinkedList* list, int data);
void delete_doubly(DoublyLinkedList* list, int data);
void print_doubly_forward(DoublyLinkedList* list);
void print_doubly_backward(DoublyLinkedList* list);
void free_doubly_list(DoublyLinkedList* list);

#endif