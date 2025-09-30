#include <stdio.h>
#include <stdlib.h>
#include "bst.h"

BST* create_bst() {
    BST* bst = malloc(sizeof(BST));
    bst->root = NULL;
    bst->size = 0;
    return bst;
}

BSTNode* create_bst_node(int data) {
    BSTNode* node = malloc(sizeof(BSTNode));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void insert_bst(BST* bst, int data) {
    bst->root = insert_bst_recursive(bst->root, data);
    bst->size++;
}

BSTNode* insert_bst_recursive(BSTNode* root, int data) {
    if (root == NULL) return create_bst_node(data);
    
    if (data < root->data) {
        root->left = insert_bst_recursive(root->left, data);
    } else if (data > root->data) {
        root->right = insert_bst_recursive(root->right, data);
    }
    return root;
}

BSTNode* search_bst(BSTNode* root, int data) {
    if (root == NULL || root->data == data) return root;
    
    if (data < root->data) return search_bst(root->left, data);
    return search_bst(root->right, data);
}

BSTNode* delete_bst(BSTNode* root, int data) {
    if (root == NULL) return root;
    
    if (data < root->data) {
        root->left = delete_bst(root->left, data);
    } else if (data > root->data) {
        root->right = delete_bst(root->right, data);
    } else {
        if (root->left == NULL) {
            BSTNode* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            BSTNode* temp = root->left;
            free(root);
            return temp;
        }
        
        BSTNode* temp = find_min(root->right);
        root->data = temp->data;
        root->right = delete_bst(root->right, temp->data);
    }
    return root;
}

BSTNode* find_min(BSTNode* root) {
    while (root->left != NULL) root = root->left;
    return root;
}

void inorder_traversal(BSTNode* root) {
    if (root != NULL) {
        inorder_traversal(root->left);
        printf("%d ", root->data);
        inorder_traversal(root->right);
    }
}

void preorder_traversal(BSTNode* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder_traversal(root->left);
        preorder_traversal(root->right);
    }
}

void postorder_traversal(BSTNode* root) {
    if (root != NULL) {
        postorder_traversal(root->left);
        postorder_traversal(root->right);
        printf("%d ", root->data);
    }
}

void free_bst(BSTNode* root) {
    if (root != NULL) {
        free_bst(root->left);
        free_bst(root->right);
        free(root);
    }
}