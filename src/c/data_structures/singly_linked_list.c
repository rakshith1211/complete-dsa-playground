#include "singly_linked_list.h"

// Create a new empty linked list
LinkedList* create_list() {
    LinkedList* list = (LinkedList*)malloc(sizeof(LinkedList));
    if (list == NULL) {
        printf("Memory allocation failed\n");
        return NULL;
    }
    list->head = NULL;
    list->size = 0;
    return list;
}

// Destroy the linked list and free all memory
void destroy_list(LinkedList* list) {
    if (list == NULL) return;
    
    Node* current = list->head;
    while (current != NULL) {
        Node* temp = current;
        current = current->next;
        free(temp);
    }
    free(list);
}

// Insert a new node at the beginning of the list
void insert_at_beginning(LinkedList* list, int data) {
    if (list == NULL) return;
    
    Node* new_node = (Node*)malloc(sizeof(Node));
    if (new_node == NULL) {
        printf("Memory allocation failed\n");
        return;
    }
    
    new_node->data = data;
    new_node->next = list->head;
    list->head = new_node;
    list->size++;
}

// Insert a new node at the end of the list
void insert_at_end(LinkedList* list, int data) {
    if (list == NULL) return;
    
    Node* new_node = (Node*)malloc(sizeof(Node));
    if (new_node == NULL) {
        printf("Memory allocation failed\n");
        return;
    }
    
    new_node->data = data;
    new_node->next = NULL;
    
    // If list is empty, make new node the head
    if (list->head == NULL) {
        list->head = new_node;
    } else {
        // Traverse to the last node
        Node* current = list->head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = new_node;
    }
    list->size++;
}

// Insert a new node at a specific position
void insert_at_position(LinkedList* list, int data, int position) {
    if (list == NULL || position < 0) return;
    
    // Insert at beginning if position is 0
    if (position == 0) {
        insert_at_beginning(list, data);
        return;
    }
    
    // Traverse to the node just before the insertion point
    Node* current = list->head;
    for (int i = 0; i < position - 1 && current != NULL; i++) {
        current = current->next;
    }
    
    // If position is beyond the list size, insert at the end
    if (current == NULL) {
        insert_at_end(list, data);
        return;
    }
    
    // Create and insert new node
    Node* new_node = (Node*)malloc(sizeof(Node));
    if (new_node == NULL) {
        printf("Memory allocation failed\n");
        return;
    }
    
    new_node->data = data;
    new_node->next = current->next;
    current->next = new_node;
    list->size++;
}

// Delete the first node and return its data
int delete_from_beginning(LinkedList* list) {
    if (list == NULL || list->head == NULL) {
        printf("List is empty\n");
        return -1; // Return -1 to indicate error
    }
    
    Node* temp = list->head;
    int data = temp->data;
    list->head = list->head->next;
    free(temp);
    list->size--;
    
    return data;
}

// Delete the last node and return its data
int delete_from_end(LinkedList* list) {
    if (list == NULL || list->head == NULL) {
        printf("List is empty\n");
        return -1; // Return -1 to indicate error
    }
    
    // If there's only one node
    if (list->head->next == NULL) {
        int data = list->head->data;
        free(list->head);
        list->head = NULL;
        list->size--;
        return data;
    }
    
    // Traverse to the second-to-last node
    Node* current = list->head;
    while (current->next->next != NULL) {
        current = current->next;
    }
    
    int data = current->next->data;
    free(current->next);
    current->next = NULL;
    list->size--;
    
    return data;
}

// Delete a node at a specific position and return its data
int delete_from_position(LinkedList* list, int position) {
    if (list == NULL || list->head == NULL || position < 0) {
        printf("Invalid position or empty list\n");
        return -1; // Return -1 to indicate error
    }
    
    // Delete from beginning if position is 0
    if (position == 0) {
        return delete_from_beginning(list);
    }
    
    // Traverse to the node just before the deletion point
    Node* current = list->head;
    for (int i = 0; i < position - 1 && current != NULL; i++) {
        current = current->next;
    }
    
    // Check if position is valid
    if (current == NULL || current->next == NULL) {
        printf("Position out of bounds\n");
        return -1; // Return -1 to indicate error
    }
    
    Node* temp = current->next;
    int data = temp->data;
    current->next = temp->next;
    free(temp);
    list->size--;
    
    return data;
}

// Search for an element in the list and return its position (-1 if not found)
int search(LinkedList* list, int data) {
    if (list == NULL || list->head == NULL) return -1;
    
    Node* current = list->head;
    int position = 0;
    
    while (current != NULL) {
        if (current->data == data) {
            return position;
        }
        current = current->next;
        position++;
    }
    
    return -1; // Element not found
}

// Display all elements in the list
void display(LinkedList* list) {
    if (list == NULL || list->head == NULL) {
        printf("List is empty\n");
        return;
    }
    
    Node* current = list->head;
    printf("List: ");
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

// Get the size of the list
int get_size(LinkedList* list) {
    if (list == NULL) return 0;
    return list->size;
}

// Check if the list is empty
int is_empty(LinkedList* list) {
    if (list == NULL) return 1; // Consider NULL list as empty
    return list->head == NULL;
}