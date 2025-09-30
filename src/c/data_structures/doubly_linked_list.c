#include <stdio.h>
#include <stdlib.h>
#include "doubly_linked_list.h"

DoublyLinkedList* create_doubly_list() {
    DoublyLinkedList* list = malloc(sizeof(DoublyLinkedList));
    list->head = NULL;
    list->tail = NULL;
    list->size = 0;
    return list;
}

void insert_front_doubly(DoublyLinkedList* list, int data) {
    DoublyNode* new_node = malloc(sizeof(DoublyNode));
    new_node->data = data;
    new_node->next = list->head;
    new_node->prev = NULL;
    
    if (list->head) list->head->prev = new_node;
    else list->tail = new_node;
    
    list->head = new_node;
    list->size++;
}

void insert_back_doubly(DoublyLinkedList* list, int data) {
    DoublyNode* new_node = malloc(sizeof(DoublyNode));
    new_node->data = data;
    new_node->next = NULL;
    new_node->prev = list->tail;
    
    if (list->tail) list->tail->next = new_node;
    else list->head = new_node;
    
    list->tail = new_node;
    list->size++;
}

void delete_doubly(DoublyLinkedList* list, int data) {
    DoublyNode* current = list->head;
    while (current && current->data != data) {
        current = current->next;
    }
    
    if (!current) return;
    
    if (current->prev) current->prev->next = current->next;
    else list->head = current->next;
    
    if (current->next) current->next->prev = current->prev;
    else list->tail = current->prev;
    
    free(current);
    list->size--;
}

void print_doubly_forward(DoublyLinkedList* list) {
    DoublyNode* current = list->head;
    while (current) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

void print_doubly_backward(DoublyLinkedList* list) {
    DoublyNode* current = list->tail;
    while (current) {
        printf("%d ", current->data);
        current = current->prev;
    }
    printf("\n");
}

void free_doubly_list(DoublyLinkedList* list) {
    DoublyNode* current = list->head;
    while (current) {
        DoublyNode* next = current->next;
        free(current);
        current = next;
    }
    free(list);
}