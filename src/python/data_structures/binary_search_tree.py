class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None
        self.size = 0
    
    def insert(self, data):
        self.root = self._insert_recursive(self.root, data)
        self.size += 1
    
    def _insert_recursive(self, root, data):
        if root is None:
            return TreeNode(data)
        
        if data < root.data:
            root.left = self._insert_recursive(root.left, data)
        elif data > root.data:
            root.right = self._insert_recursive(root.right, data)
        
        return root
    
    def search(self, data):
        return self._search_recursive(self.root, data) is not None
    
    def _search_recursive(self, root, data):
        if root is None or root.data == data:
            return root
        
        if data < root.data:
            return self._search_recursive(root.left, data)
        return self._search_recursive(root.right, data)
    
    def delete(self, data):
        self.root = self._delete_recursive(self.root, data)
        self.size -= 1
    
    def _delete_recursive(self, root, data):
        if root is None:
            return root
        
        if data < root.data:
            root.left = self._delete_recursive(root.left, data)
        elif data > root.data:
            root.right = self._delete_recursive(root.right, data)
        else:
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            
            temp = self._find_min(root.right)
            root.data = temp.data
            root.right = self._delete_recursive(root.right, temp.data)
        
        return root
    
    def _find_min(self, root):
        while root.left is not None:
            root = root.left
        return root
    
    def inorder_traversal(self):
        result = []
        self._inorder_recursive(self.root, result)
        return result
    
    def _inorder_recursive(self, root, result):
        if root is not None:
            self._inorder_recursive(root.left, result)
            result.append(root.data)
            self._inorder_recursive(root.right, result)
    
    def preorder_traversal(self):
        result = []
        self._preorder_recursive(self.root, result)
        return result
    
    def _preorder_recursive(self, root, result):
        if root is not None:
            result.append(root.data)
            self._preorder_recursive(root.left, result)
            self._preorder_recursive(root.right, result)
    
    def postorder_traversal(self):
        result = []
        self._postorder_recursive(self.root, result)
        return result
    
    def _postorder_recursive(self, root, result):
        if root is not None:
            self._postorder_recursive(root.left, result)
            self._postorder_recursive(root.right, result)
            result.append(root.data)
    
    def __len__(self):
        return self.size
    
    def is_empty(self):
        return self.size == 0