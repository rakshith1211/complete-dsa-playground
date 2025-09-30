#include <stdio.h>
#include <stdlib.h>
#include "searching.h"

// Linear Search - O(n)
int linear_search(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// Binary Search - O(log n)
int binary_search(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int binary_search_recursive(int arr[], int low, int high, int target) {
    if (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) return binary_search_recursive(arr, low, mid - 1, target);
        return binary_search_recursive(arr, mid + 1, high, target);
    }
    return -1;
}

// Hash Table Implementation
HashTable* create_hash_table() {
    HashTable* ht = malloc(sizeof(HashTable));
    for (int i = 0; i < HASH_SIZE; i++) {
        ht->table[i] = NULL;
    }
    ht->size = 0;
    return ht;
}

int hash_function(int key) {
    return abs(key) % HASH_SIZE;
}

void hash_insert(HashTable* ht, int key, int value) {
    int index = hash_function(key);
    HashNode* new_node = malloc(sizeof(HashNode));
    new_node->key = key;
    new_node->value = value;
    new_node->next = ht->table[index];
    ht->table[index] = new_node;
    ht->size++;
}

int hash_search(HashTable* ht, int key) {
    int index = hash_function(key);
    HashNode* current = ht->table[index];
    
    while (current != NULL) {
        if (current->key == key) {
            return current->value;
        }
        current = current->next;
    }
    return -1; // Not found
}

void hash_delete(HashTable* ht, int key) {
    int index = hash_function(key);
    HashNode* current = ht->table[index];
    HashNode* prev = NULL;
    
    while (current != NULL && current->key != key) {
        prev = current;
        current = current->next;
    }
    
    if (current == NULL) return; // Key not found
    
    if (prev == NULL) {
        ht->table[index] = current->next;
    } else {
        prev->next = current->next;
    }
    
    free(current);
    ht->size--;
}

void free_hash_table(HashTable* ht) {
    for (int i = 0; i < HASH_SIZE; i++) {
        HashNode* current = ht->table[i];
        while (current != NULL) {
            HashNode* temp = current;
            current = current->next;
            free(temp);
        }
    }
    free(ht);
}