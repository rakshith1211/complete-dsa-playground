#ifndef STACK_H
#define STACK_H

#define MAX_SIZE 1000

// Array-based stack
typedef struct {
    int data[MAX_SIZE];
    int top;
} ArrayStack;

// Linked list-based stack
typedef struct StackNode {
    int data;
    struct StackNode* next;
} StackNode;

typedef struct {
    StackNode* top;
    int size;
} LinkedStack;

// Array stack operations
ArrayStack* create_array_stack();
void push_array(ArrayStack* stack, int data);
int pop_array(ArrayStack* stack);
int peek_array(ArrayStack* stack);
int is_empty_array(ArrayStack* stack);
int is_full_array(ArrayStack* stack);

// Linked stack operations
LinkedStack* create_linked_stack();
void push_linked(LinkedStack* stack, int data);
int pop_linked(LinkedStack* stack);
int peek_linked(LinkedStack* stack);
int is_empty_linked(LinkedStack* stack);
void free_linked_stack(LinkedStack* stack);

#endif