#ifndef SEARCHING_H
#define SEARCHING_H

// Linear Search - O(n)
int linear_search(int arr[], int n, int target);

// Binary Search - O(log n)
int binary_search(int arr[], int n, int target);
int binary_search_recursive(int arr[], int low, int high, int target);

// Hash Table for searching
#define HASH_SIZE 101

typedef struct HashNode {
    int key;
    int value;
    struct HashNode* next;
} HashNode;

typedef struct {
    HashNode* table[HASH_SIZE];
    int size;
} HashTable;

HashTable* create_hash_table();
int hash_function(int key);
void hash_insert(HashTable* ht, int key, int value);
int hash_search(HashTable* ht, int key);
void hash_delete(HashTable* ht, int key);
void free_hash_table(HashTable* ht);

#endif