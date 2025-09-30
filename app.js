// Complete DSA Playground JavaScript

// Navigation System
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDataStructures();
    initializeAlgorithms();
});

function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.dsa-section');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            
            // Update active nav button
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Tab system for subsections
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentSection = btn.closest('.dsa-section');
            const targetTab = btn.dataset.tab;
            
            // Update active tab button
            parentSection.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show target tab content
            parentSection.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Stack Implementation
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
        return `Pushed ${element}`;
    }
    
    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return `Popped ${this.items.pop()}`;
    }
    
    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return `Top element: ${this.items[this.items.length - 1]}`;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    display() {
        return this.isEmpty() ? "Stack is empty" : `Stack: [${this.items.join(', ')}]`;
    }
}

// Binary Search Tree Implementation
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        this.root = this.insertNode(this.root, data);
        return `Inserted ${data}`;
    }
    
    insertNode(node, data) {
        if (node === null) return new BSTNode(data);
        
        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        }
        return node;
    }
    
    search(data) {
        return this.searchNode(this.root, data) ? `Found ${data}` : `${data} not found`;
    }
    
    searchNode(node, data) {
        if (node === null) return false;
        if (data === node.data) return true;
        
        return data < node.data ? 
            this.searchNode(node.left, data) : 
            this.searchNode(node.right, data);
    }
    
    inorder() {
        const result = [];
        this.inorderTraversal(this.root, result);
        return `Inorder: [${result.join(', ')}]`;
    }
    
    inorderTraversal(node, result) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
    }
    
    preorder() {
        const result = [];
        this.preorderTraversal(this.root, result);
        return `Preorder: [${result.join(', ')}]`;
    }
    
    preorderTraversal(node, result) {
        if (node !== null) {
            result.push(node.data);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
    }
    
    postorder() {
        const result = [];
        this.postorderTraversal(this.root, result);
        return `Postorder: [${result.join(', ')}]`;
    }
    
    postorderTraversal(node, result) {
        if (node !== null) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.data);
        }
    }
}

// Sorting Algorithms
const SortingAlgorithms = {
    bubbleSort: function(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    },
    
    quickSort: function(arr) {
        if (arr.length <= 1) return arr;
        
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(x => x < pivot);
        const middle = arr.filter(x => x === pivot);
        const right = arr.filter(x => x > pivot);
        
        return [...this.quickSort(left), ...middle, ...this.quickSort(right)];
    },
    
    mergeSort: function(arr) {
        if (arr.length <= 1) return arr;
        
        const mid = Math.floor(arr.length / 2);
        const left = this.mergeSort(arr.slice(0, mid));
        const right = this.mergeSort(arr.slice(mid));
        
        return this.merge(left, right);
    },
    
    merge: function(left, right) {
        const result = [];
        let i = 0, j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
};

// Searching Algorithms
const SearchingAlgorithms = {
    binarySearch: function(arr, target) {
        let left = 0, right = arr.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    },
    
    linearSearch: function(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) return i;
        }
        return -1;
    }
};

// Initialize Data Structures
function initializeDataStructures() {
    const stack = new Stack();
    const bst = new BinarySearchTree();
    
    // Stack Event Listeners
    const stackValue = document.getElementById('stack-value');
    const stackOutput = document.getElementById('stack-output');
    
    document.getElementById('stack-push')?.addEventListener('click', () => {
        const value = parseInt(stackValue.value);
        if (!isNaN(value)) {
            const result = stack.push(value);
            updateOutput(stackOutput, result);
            stackValue.value = '';
        }
    });
    
    document.getElementById('stack-pop')?.addEventListener('click', () => {
        const result = stack.pop();
        updateOutput(stackOutput, result);
    });
    
    document.getElementById('stack-peek')?.addEventListener('click', () => {
        const result = stack.peek();
        updateOutput(stackOutput, result);
    });
    
    document.getElementById('stack-display')?.addEventListener('click', () => {
        const result = stack.display();
        updateOutput(stackOutput, result);
    });
    
    // BST Event Listeners
    const bstValue = document.getElementById('bst-value');
    const bstOutput = document.getElementById('bst-output');
    
    document.getElementById('bst-insert')?.addEventListener('click', () => {
        const value = parseInt(bstValue.value);
        if (!isNaN(value)) {
            const result = bst.insert(value);
            updateOutput(bstOutput, result);
            bstValue.value = '';
        }
    });
    
    document.getElementById('bst-search')?.addEventListener('click', () => {
        const value = parseInt(bstValue.value);
        if (!isNaN(value)) {
            const result = bst.search(value);
            updateOutput(bstOutput, result);
        }
    });
    
    document.getElementById('bst-inorder')?.addEventListener('click', () => {
        const result = bst.inorder();
        updateOutput(bstOutput, result);
    });
    
    document.getElementById('bst-preorder')?.addEventListener('click', () => {
        const result = bst.preorder();
        updateOutput(bstOutput, result);
    });
    
    document.getElementById('bst-postorder')?.addEventListener('click', () => {
        const result = bst.postorder();
        updateOutput(bstOutput, result);
    });
}

// Initialize Algorithms
function initializeAlgorithms() {
    // Sorting Event Listeners
    const sortInput = document.getElementById('sort-input');
    const sortOutput = document.getElementById('sort-output');
    
    document.getElementById('sort-execute')?.addEventListener('click', () => {
        const input = sortInput.value;
        if (input) {
            const arr = input.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
            const original = [...arr];
            const sorted = SortingAlgorithms.mergeSort([...arr]);
            
            updateOutput(sortOutput, `Original: [${original.join(', ')}]`);
            updateOutput(sortOutput, `Sorted: [${sorted.join(', ')}]`);
        }
    });
    
    // Searching Event Listeners
    const searchArray = document.getElementById('search-array');
    const searchTarget = document.getElementById('search-target');
    const searchOutput = document.getElementById('search-output');
    
    document.getElementById('search-execute')?.addEventListener('click', () => {
        const arrayInput = searchArray.value;
        const target = parseInt(searchTarget.value);
        
        if (arrayInput && !isNaN(target)) {
            const arr = arrayInput.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
            const result = SearchingAlgorithms.binarySearch(arr, target);
            
            updateOutput(searchOutput, `Array: [${arr.join(', ')}]`);
            updateOutput(searchOutput, `Target: ${target}`);
            updateOutput(searchOutput, result !== -1 ? `Found at index ${result}` : 'Not found');
        }
    });
}

// Utility function to update output
function updateOutput(outputElement, message) {
    if (outputElement) {
        const timestamp = new Date().toLocaleTimeString();
        outputElement.innerHTML += `<div>[${timestamp}] ${message}</div>`;
        outputElement.scrollTop = outputElement.scrollHeight;
    }
}