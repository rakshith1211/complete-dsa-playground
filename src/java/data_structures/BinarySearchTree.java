package data_structures;

public class BinarySearchTree {
    private TreeNode root;
    private int size;
    
    private class TreeNode {
        int data;
        TreeNode left, right;
        
        TreeNode(int data) {
            this.data = data;
        }
    }
    
    public void insert(int data) {
        root = insertRecursive(root, data);
        size++;
    }
    
    private TreeNode insertRecursive(TreeNode root, int data) {
        if (root == null) return new TreeNode(data);
        
        if (data < root.data) {
            root.left = insertRecursive(root.left, data);
        } else if (data > root.data) {
            root.right = insertRecursive(root.right, data);
        }
        return root;
    }
    
    public boolean search(int data) {
        return searchRecursive(root, data) != null;
    }
    
    private TreeNode searchRecursive(TreeNode root, int data) {
        if (root == null || root.data == data) return root;
        
        if (data < root.data) return searchRecursive(root.left, data);
        return searchRecursive(root.right, data);
    }
    
    public void delete(int data) {
        root = deleteRecursive(root, data);
        size--;
    }
    
    private TreeNode deleteRecursive(TreeNode root, int data) {
        if (root == null) return root;
        
        if (data < root.data) {
            root.left = deleteRecursive(root.left, data);
        } else if (data > root.data) {
            root.right = deleteRecursive(root.right, data);
        } else {
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            
            TreeNode temp = findMin(root.right);
            root.data = temp.data;
            root.right = deleteRecursive(root.right, temp.data);
        }
        return root;
    }
    
    private TreeNode findMin(TreeNode root) {
        while (root.left != null) root = root.left;
        return root;
    }
    
    public void inorderTraversal() {
        inorderRecursive(root);
        System.out.println();
    }
    
    private void inorderRecursive(TreeNode root) {
        if (root != null) {
            inorderRecursive(root.left);
            System.out.print(root.data + " ");
            inorderRecursive(root.right);
        }
    }
    
    public void preorderTraversal() {
        preorderRecursive(root);
        System.out.println();
    }
    
    private void preorderRecursive(TreeNode root) {
        if (root != null) {
            System.out.print(root.data + " ");
            preorderRecursive(root.left);
            preorderRecursive(root.right);
        }
    }
    
    public void postorderTraversal() {
        postorderRecursive(root);
        System.out.println();
    }
    
    private void postorderRecursive(TreeNode root) {
        if (root != null) {
            postorderRecursive(root.left);
            postorderRecursive(root.right);
            System.out.print(root.data + " ");
        }
    }
    
    public int size() { return size; }
    public boolean isEmpty() { return size == 0; }
}