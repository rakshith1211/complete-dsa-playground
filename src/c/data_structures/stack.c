#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

// Array Stack Implementation
ArrayStack* create_array_stack() {
    ArrayStack* stack = malloc(sizeof(ArrayStack));
    stack->top = -1;
    return stack;
}

void push_array(ArrayStack* stack, int data) {
    if (is_full_array(stack)) return;
    stack->data[++stack->top] = data;
}

int pop_array(ArrayStack* stack) {
    if (is_empty_array(stack)) return -1;
    return stack->data[stack->top--];
}

int peek_array(ArrayStack* stack) {
    if (is_empty_array(stack)) return -1;
    return stack->data[stack->top];
}

int is_empty_array(ArrayStack* stack) {
    return stack->top == -1;
}

int is_full_array(ArrayStack* stack) {
    return stack->top == MAX_SIZE - 1;
}

// Linked Stack Implementation
LinkedStack* create_linked_stack() {
    LinkedStack* stack = malloc(sizeof(LinkedStack));
    stack->top = NULL;
    stack->size = 0;
    return stack;
}

void push_linked(LinkedStack* stack, int data) {
    StackNode* new_node = malloc(sizeof(StackNode));
    new_node->data = data;
    new_node->next = stack->top;
    stack->top = new_node;
    stack->size++;
}

int pop_linked(LinkedStack* stack) {
    if (is_empty_linked(stack)) return -1;
    
    StackNode* temp = stack->top;
    int data = temp->data;
    stack->top = stack->top->next;
    free(temp);
    stack->size--;
    return data;
}

int peek_linked(LinkedStack* stack) {
    if (is_empty_linked(stack)) return -1;
    return stack->top->data;
}

int is_empty_linked(LinkedStack* stack) {
    return stack->top == NULL;
}

void free_linked_stack(LinkedStack* stack) {
    while (!is_empty_linked(stack)) {
        pop_linked(stack);
    }
    free(stack);
}