#ifndef BST_H
#define BST_H

typedef struct BSTNode {
    int data;
    struct BSTNode* left;
    struct BSTNode* right;
} BSTNode;

typedef struct {
    BSTNode* root;
    int size;
} BST;

BST* create_bst();
BSTNode* create_bst_node(int data);
void insert_bst(BST* bst, int data);
BSTNode* insert_bst_recursive(BSTNode* root, int data);
BSTNode* search_bst(BSTNode* root, int data);
BSTNode* delete_bst(BSTNode* root, int data);
BSTNode* find_min(BSTNode* root);
void inorder_traversal(BSTNode* root);
void preorder_traversal(BSTNode* root);
void postorder_traversal(BSTNode* root);
void free_bst(BSTNode* root);

#endif