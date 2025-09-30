#ifndef SINGLY_LINKED_LIST_H
#define SINGLY_LINKED_LIST_H

#include <stdio.h>
#include <stdlib.h>

// Node structure for the singly linked list
typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Singly Linked List structure
typedef struct LinkedList {
    Node* head;
    int size;
} LinkedList;

// Function prototypes
LinkedList* create_list();
void destroy_list(LinkedList* list);
void insert_at_beginning(LinkedList* list, int data);
void insert_at_end(LinkedList* list, int data);
void insert_at_position(LinkedList* list, int data, int position);
int delete_from_beginning(LinkedList* list);
int delete_from_end(LinkedList* list);
int delete_from_position(LinkedList* list, int position);
int search(LinkedList* list, int data);
void display(LinkedList* list);
int get_size(LinkedList* list);
int is_empty(LinkedList* list);

#endif // SINGLY_LINKED_LIST_H