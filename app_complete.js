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

// Singly Linked List Implementation
class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    insertFront(data) {
        const newNode = new SinglyLinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return `Inserted ${data} at front`;
    }
    
    insertBack(data) {
        const newNode = new SinglyLinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
        this.size++;
        return `Inserted ${data} at back`;
    }
    
    deleteFront() {
        if (!this.head) return "List is empty";
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return `Deleted ${data} from front`;
    }
    
    search(data) {
        let current = this.head;
        let position = 0;
        while (current) {
            if (current.data === data) return `Found ${data} at position ${position}`;
            current = current.next;
            position++;
        }
        return `${data} not found`;
    }
    
    display() {
        if (!this.head) return "List is empty";
        const elements = [];
        let current = this.head;
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        return `List: ${elements.join(' -> ')} -> null`;
    }
}

// Doubly Linked List Implementation
class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    insertFront(data) {
        const newNode = new DoublyLinkedListNode(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
        return `Inserted ${data} at front`;
    }
    
    insertBack(data) {
        const newNode = new DoublyLinkedListNode(data);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return `Inserted ${data} at back`;
    }
    
    display() {
        if (!this.head) return "List is empty";
        const elements = [];
        let current = this.head;
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        return `List: null <- ${elements.join(' <-> ')} -> null`;
    }
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

// Queue Implementation
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element);
        return `Enqueued ${element}`;
    }
    
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return `Dequeued ${this.items.shift()}`;
    }
    
    front() {
        if (this.isEmpty()) return "Queue is empty";
        return `Front element: ${this.items[0]}`;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    display() {
        return this.isEmpty() ? "Queue is empty" : `Queue: [${this.items.join(', ')}]`;
    }
}

// Priority Queue Implementation
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        
        if (!added) this.items.push(queueElement);
        return `Enqueued ${element} with priority ${priority}`;
    }
    
    dequeue() {
        if (this.isEmpty()) return "Priority Queue is empty";
        const item = this.items.shift();
        return `Dequeued ${item.element} (priority: ${item.priority})`;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    display() {
        if (this.isEmpty()) return "Priority Queue is empty";
        const display = this.items.map(item => `${item.element}(${item.priority})`).join(', ');
        return `PriorityQueue: [${display}]`;
    }
}

// Deque Implementation
class Deque {
    constructor() {
        this.items = [];
    }
    
    addFront(element) {
        this.items.unshift(element);
        return `Added ${element} to front`;
    }
    
    addRear(element) {
        this.items.push(element);
        return `Added ${element} to rear`;
    }
    
    removeFront() {
        if (this.isEmpty()) return "Deque is empty";
        return `Removed ${this.items.shift()} from front`;
    }
    
    removeRear() {
        if (this.isEmpty()) return "Deque is empty";
        return `Removed ${this.items.pop()} from rear`;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    display() {
        return this.isEmpty() ? "Deque is empty" : `Deque: [${this.items.join(', ')}]`;
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
    
    delete(data) {
        this.root = this.deleteNode(this.root, data);
        return `Deleted ${data}`;
    }
    
    deleteNode(node, data) {
        if (node === null) return null;
        
        if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
        } else {
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            
            node.data = this.findMin(node.right).data;
            node.right = this.deleteNode(node.right, node.data);
        }
        return node;
    }
    
    findMin(node) {
        while (node.left !== null) node = node.left;
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

// AVL Tree Implementation
class AVLNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    
    getHeight(node) {
        return node ? node.height : 0;
    }
    
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    
    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        
        return x;
    }
    
    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        
        return y;
    }
    
    insert(data) {
        this.root = this.insertNode(this.root, data);
        return `Inserted ${data} (AVL balanced)`;
    }
    
    insertNode(node, data) {
        if (node === null) return new AVLNode(data);
        
        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        } else {
            return node;
        }
        
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        
        const balance = this.getBalance(node);
        
        if (balance > 1 && data < node.left.data) {
            return this.rotateRight(node);
        }
        
        if (balance < -1 && data > node.right.data) {
            return this.rotateLeft(node);
        }
        
        if (balance > 1 && data > node.left.data) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        
        if (balance < -1 && data < node.right.data) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        
        return node;
    }
    
    inorder() {
        const result = [];
        this.inorderTraversal(this.root, result);
        return `AVL Inorder: [${result.join(', ')}]`;
    }
    
    inorderTraversal(node, result) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
    }
}

// Heap Implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
        return `Inserted ${value} into heap`;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    extractMin() {
        if (this.heap.length === 0) return "Heap is empty";
        if (this.heap.length === 1) return `Extracted ${this.heap.pop()}`;
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return `Extracted ${min}`;
    }
    
    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            
            if (rightChildIndex < this.heap.length && 
                this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }
            
            if (this.heap[index] <= this.heap[smallerChildIndex]) break;
            
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
    
    peek() {
        return this.heap.length === 0 ? "Heap is empty" : `Min element: ${this.heap[0]}`;
    }
    
    display() {
        return this.heap.length === 0 ? "Heap is empty" : `Heap: [${this.heap.join(', ')}]`;
    }
}

// Graph Implementation
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
            return `Added vertex ${vertex}`;
        }
        return `Vertex ${vertex} already exists`;
    }
    
    addEdge(src, dest, weight = 1) {
        if (!this.adjacencyList.has(src)) this.addVertex(src);
        if (!this.adjacencyList.has(dest)) this.addVertex(dest);
        
        this.adjacencyList.get(src).push({ vertex: dest, weight });
        this.adjacencyList.get(dest).push({ vertex: src, weight });
        return `Added edge ${src} -> ${dest} (weight: ${weight})`;
    }
    
    bfs(start) {
        if (!this.adjacencyList.has(start)) return `Vertex ${start} not found`;
        
        const visited = new Set();
        const queue = [start];
        const result = [];
        
        visited.add(start);
        
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            
            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.push(neighbor.vertex);
                }
            }
        }
        
        return `BFS from ${start}: [${result.join(', ')}]`;
    }
    
    dfs(start) {
        if (!this.adjacencyList.has(start)) return `Vertex ${start} not found`;
        
        const visited = new Set();
        const result = [];
        
        this.dfsHelper(start, visited, result);
        return `DFS from ${start}: [${result.join(', ')}]`;
    }
    
    dfsHelper(vertex, visited, result) {
        visited.add(vertex);
        result.push(vertex);
        
        for (const neighbor of this.adjacencyList.get(vertex)) {
            if (!visited.has(neighbor.vertex)) {
                this.dfsHelper(neighbor.vertex, visited, result);
            }
        }
    }
    
    dijkstra(start, end) {
        const distances = new Map();
        const previous = new Map();
        const unvisited = new Set();
        
        for (const vertex of this.adjacencyList.keys()) {
            distances.set(vertex, vertex === start ? 0 : Infinity);
            previous.set(vertex, null);
            unvisited.add(vertex);
        }
        
        while (unvisited.size > 0) {
            let current = null;
            for (const vertex of unvisited) {
                if (current === null || distances.get(vertex) < distances.get(current)) {
                    current = vertex;
                }
            }
            
            unvisited.delete(current);
            
            if (current === end) break;
            
            for (const neighbor of this.adjacencyList.get(current)) {
                const alt = distances.get(current) + neighbor.weight;
                if (alt < distances.get(neighbor.vertex)) {
                    distances.set(neighbor.vertex, alt);
                    previous.set(neighbor.vertex, current);
                }
            }
        }
        
        const path = [];
        let current = end;
        while (current !== null) {
            path.unshift(current);
            current = previous.get(current);
        }
        
        return `Shortest path ${start} -> ${end}: [${path.join(' -> ')}] (distance: ${distances.get(end)})`;
    }
    
    display() {
        let result = "Graph:\n";
        for (const [vertex, edges] of this.adjacencyList) {
            const edgeStr = edges.map(e => `${e.vertex}(${e.weight})`).join(', ');
            result += `${vertex}: [${edgeStr}]\n`;
        }
        return result;
    }
    
    clear() {
        this.adjacencyList.clear();
        return "Graph cleared";
    }
}

// Hash Table Implementation
class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size);
        for (let i = 0; i < size; i++) {
            this.table[i] = [];
        }
    }
    
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return `Updated ${key} = ${value}`;
            }
        }
        
        bucket.push([key, value]);
        return `Set ${key} = ${value}`;
    }
    
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        for (const [k, v] of bucket) {
            if (k === key) return `${key} = ${v}`;
        }
        return `${key} not found`;
    }
    
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return `Removed ${key}`;
            }
        }
        return `${key} not found`;
    }
    
    display() {
        let result = "Hash Table:\n";
        for (let i = 0; i < this.size; i++) {
            if (this.table[i].length > 0) {
                const pairs = this.table[i].map(([k, v]) => `${k}:${v}`).join(', ');
                result += `[${i}]: ${pairs}\n`;
            }
        }
        return result || "Hash Table is empty";
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
    
    selectionSort: function(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
        return arr;
    },
    
    insertionSort: function(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
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
    },
    
    heapSort: function(arr) {
        const n = arr.length;
        
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(arr, n, i);
        }
        
        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            this.heapify(arr, i, 0);
        }
        
        return arr;
    },
    
    heapify: function(arr, n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        
        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, n, largest);
        }
    },
    
    radixSort: function(arr) {
        const max = Math.max(...arr);
        
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            this.countingSort(arr, exp);
        }
        
        return arr;
    },
    
    countingSort: function(arr, exp) {
        const n = arr.length;
        const output = new Array(n);
        const count = new Array(10).fill(0);
        
        for (let i = 0; i < n; i++) {
            count[Math.floor(arr[i] / exp) % 10]++;
        }
        
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        for (let i = n - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }
        
        for (let i = 0; i < n; i++) {
            arr[i] = output[i];
        }
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

// Global instances for cross-tab access
let globalInstances = {
    singlyLL: new SinglyLinkedList(),
    doublyLL: new DoublyLinkedList(),
    stack: new Stack(),
    queue: new Queue(),
    priorityQueue: new PriorityQueue(),
    deque: new Deque(),
    bst: new BinarySearchTree(),
    avl: new AVLTree(),
    heap: new MinHeap(),
    graph: new Graph(),
    hashTable: new HashTable()
};

// Initialize Data Structures
function initializeDataStructures() {
    // Singly Linked List Event Listeners
    const llValue = document.getElementById('ll-value');
    const llOutput = document.getElementById('ll-output');
    
    document.getElementById('ll-insert-beginning')?.addEventListener('click', () => {
        const value = parseInt(llValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.singlyLL.insertFront(value);
            updateOutput(llOutput, result);
            llValue.value = '';
        }
    });
    
    document.getElementById('ll-insert-end')?.addEventListener('click', () => {
        const value = parseInt(llValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.singlyLL.insertBack(value);
            updateOutput(llOutput, result);
            llValue.value = '';
        }
    });
    
    document.getElementById('ll-delete-beginning')?.addEventListener('click', () => {
        const result = globalInstances.singlyLL.deleteFront();
        updateOutput(llOutput, result);
    });
    
    document.getElementById('ll-search')?.addEventListener('click', () => {
        const value = parseInt(llValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.singlyLL.search(value);
            updateOutput(llOutput, result);
        }
    });
    
    document.getElementById('ll-display')?.addEventListener('click', () => {
        const result = globalInstances.singlyLL.display();
        updateOutput(llOutput, result);
    });
    
    // Stack Event Listeners
    const stackValue = document.getElementById('stack-value');
    const stackOutput = document.getElementById('stack-output');
    
    document.getElementById('stack-push')?.addEventListener('click', () => {
        const value = parseInt(stackValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.stack.push(value);
            updateOutput(stackOutput, result);
            stackValue.value = '';
        }
    });
    
    document.getElementById('stack-pop')?.addEventListener('click', () => {
        const result = globalInstances.stack.pop();
        updateOutput(stackOutput, result);
    });
    
    document.getElementById('stack-peek')?.addEventListener('click', () => {
        const result = globalInstances.stack.peek();
        updateOutput(stackOutput, result);
    });
    
    document.getElementById('stack-display')?.addEventListener('click', () => {
        const result = globalInstances.stack.display();
        updateOutput(stackOutput, result);
    });
    
    // BST Event Listeners
    const bstValue = document.getElementById('bst-value');
    const bstOutput = document.getElementById('bst-output');
    
    document.getElementById('bst-insert')?.addEventListener('click', () => {
        const value = parseInt(bstValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.bst.insert(value);
            updateOutput(bstOutput, result);
            bstValue.value = '';
        }
    });
    
    document.getElementById('bst-delete')?.addEventListener('click', () => {
        const value = parseInt(bstValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.bst.delete(value);
            updateOutput(bstOutput, result);
            bstValue.value = '';
        }
    });
    
    document.getElementById('bst-search')?.addEventListener('click', () => {
        const value = parseInt(bstValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.bst.search(value);
            updateOutput(bstOutput, result);
        }
    });
    
    document.getElementById('bst-inorder')?.addEventListener('click', () => {
        const result = globalInstances.bst.inorder();
        updateOutput(bstOutput, result);
    });
    
    document.getElementById('bst-preorder')?.addEventListener('click', () => {
        const result = globalInstances.bst.preorder();
        updateOutput(bstOutput, result);
    });
    
    document.getElementById('bst-postorder')?.addEventListener('click', () => {
        const result = globalInstances.bst.postorder();
        updateOutput(bstOutput, result);
    });
    
    // Graph Event Listeners
    const graphSrc = document.getElementById('graph-src');
    const graphDest = document.getElementById('graph-dest');
    const graphWeight = document.getElementById('graph-weight');
    const graphOutput = document.getElementById('graph-output');
    
    document.getElementById('graph-add-edge')?.addEventListener('click', () => {
        const src = parseInt(graphSrc.value);
        const dest = parseInt(graphDest.value);
        const weight = parseInt(graphWeight.value) || 1;
        
        if (!isNaN(src) && !isNaN(dest)) {
            const result = globalInstances.graph.addEdge(src, dest, weight);
            updateOutput(graphOutput, result);
            graphSrc.value = '';
            graphDest.value = '';
        }
    });
    
    document.getElementById('graph-display')?.addEventListener('click', () => {
        const result = globalInstances.graph.display();
        updateOutput(graphOutput, result);
    });
    
    document.getElementById('graph-clear')?.addEventListener('click', () => {
        const result = globalInstances.graph.clear();
        updateOutput(graphOutput, result);
    });
    
    // Additional Data Structure Event Listeners
    // Queue Event Listeners
    const queueValue = document.getElementById('queue-value');
    const queueOutput = document.getElementById('queue-output');
    
    document.getElementById('queue-enqueue')?.addEventListener('click', () => {
        const value = parseInt(queueValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.queue.enqueue(value);
            updateOutput(queueOutput, result);
            queueValue.value = '';
        }
    });
    
    document.getElementById('queue-dequeue')?.addEventListener('click', () => {
        const result = globalInstances.queue.dequeue();
        updateOutput(queueOutput, result);
    });
    
    document.getElementById('queue-front')?.addEventListener('click', () => {
        const result = globalInstances.queue.front();
        updateOutput(queueOutput, result);
    });
    
    document.getElementById('queue-display')?.addEventListener('click', () => {
        const result = globalInstances.queue.display();
        updateOutput(queueOutput, result);
    });
    
    // Priority Queue Event Listeners
    const pqValue = document.getElementById('pq-value');
    const pqPriority = document.getElementById('pq-priority');
    const pqOutput = document.getElementById('pq-output');
    
    document.getElementById('pq-enqueue')?.addEventListener('click', () => {
        const value = parseInt(pqValue.value);
        const priority = parseInt(pqPriority.value);
        if (!isNaN(value) && !isNaN(priority)) {
            const result = globalInstances.priorityQueue.enqueue(value, priority);
            updateOutput(pqOutput, result);
            pqValue.value = '';
            pqPriority.value = '';
        }
    });
    
    document.getElementById('pq-dequeue')?.addEventListener('click', () => {
        const result = globalInstances.priorityQueue.dequeue();
        updateOutput(pqOutput, result);
    });
    
    document.getElementById('pq-display')?.addEventListener('click', () => {
        const result = globalInstances.priorityQueue.display();
        updateOutput(pqOutput, result);
    });
    
    // Deque Event Listeners
    const dequeValue = document.getElementById('deque-value');
    const dequeOutput = document.getElementById('deque-output');
    
    document.getElementById('deque-add-front')?.addEventListener('click', () => {
        const value = parseInt(dequeValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.deque.addFront(value);
            updateOutput(dequeOutput, result);
            dequeValue.value = '';
        }
    });
    
    document.getElementById('deque-add-rear')?.addEventListener('click', () => {
        const value = parseInt(dequeValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.deque.addRear(value);
            updateOutput(dequeOutput, result);
            dequeValue.value = '';
        }
    });
    
    document.getElementById('deque-remove-front')?.addEventListener('click', () => {
        const result = globalInstances.deque.removeFront();
        updateOutput(dequeOutput, result);
    });
    
    document.getElementById('deque-remove-rear')?.addEventListener('click', () => {
        const result = globalInstances.deque.removeRear();
        updateOutput(dequeOutput, result);
    });
    
    document.getElementById('deque-display')?.addEventListener('click', () => {
        const result = globalInstances.deque.display();
        updateOutput(dequeOutput, result);
    });
    
    // Doubly Linked List Event Listeners
    const dllValue = document.getElementById('dll-value');
    const dllOutput = document.getElementById('dll-output');
    
    document.getElementById('dll-insert-front')?.addEventListener('click', () => {
        const value = parseInt(dllValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.doublyLL.insertFront(value);
            updateOutput(dllOutput, result);
            dllValue.value = '';
        }
    });
    
    document.getElementById('dll-insert-back')?.addEventListener('click', () => {
        const value = parseInt(dllValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.doublyLL.insertBack(value);
            updateOutput(dllOutput, result);
            dllValue.value = '';
        }
    });
    
    document.getElementById('dll-display')?.addEventListener('click', () => {
        const result = globalInstances.doublyLL.display();
        updateOutput(dllOutput, result);
    });
    
    // AVL Tree Event Listeners
    const avlValue = document.getElementById('avl-value');
    const avlOutput = document.getElementById('avl-output');
    
    document.getElementById('avl-insert')?.addEventListener('click', () => {
        const value = parseInt(avlValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.avl.insert(value);
            updateOutput(avlOutput, result);
            avlValue.value = '';
        }
    });
    
    document.getElementById('avl-inorder')?.addEventListener('click', () => {
        const result = globalInstances.avl.inorder();
        updateOutput(avlOutput, result);
    });
    
    // Heap Event Listeners
    const heapValue = document.getElementById('heap-value');
    const heapOutput = document.getElementById('heap-output');
    
    document.getElementById('heap-insert')?.addEventListener('click', () => {
        const value = parseInt(heapValue.value);
        if (!isNaN(value)) {
            const result = globalInstances.heap.insert(value);
            updateOutput(heapOutput, result);
            heapValue.value = '';
        }
    });
    
    document.getElementById('heap-extract')?.addEventListener('click', () => {
        const result = globalInstances.heap.extractMin();
        updateOutput(heapOutput, result);
    });
    
    document.getElementById('heap-peek')?.addEventListener('click', () => {
        const result = globalInstances.heap.peek();
        updateOutput(heapOutput, result);
    });
    
    document.getElementById('heap-display')?.addEventListener('click', () => {
        const result = globalInstances.heap.display();
        updateOutput(heapOutput, result);
    });
    
    // Hash Table Event Listeners
    const hashKey = document.getElementById('hash-key');
    const hashValue = document.getElementById('hash-value');
    const hashOutput = document.getElementById('hash-output');
    
    document.getElementById('hash-set')?.addEventListener('click', () => {
        const key = hashKey.value;
        const value = hashValue.value;
        if (key && value) {
            const result = globalInstances.hashTable.set(key, value);
            updateOutput(hashOutput, result);
            hashKey.value = '';
            hashValue.value = '';
        }
    });
    
    document.getElementById('hash-get')?.addEventListener('click', () => {
        const key = hashKey.value;
        if (key) {
            const result = globalInstances.hashTable.get(key);
            updateOutput(hashOutput, result);
        }
    });
    
    document.getElementById('hash-remove')?.addEventListener('click', () => {
        const key = hashKey.value;
        if (key) {
            const result = globalInstances.hashTable.remove(key);
            updateOutput(hashOutput, result);
            hashKey.value = '';
        }
    });
    
    document.getElementById('hash-display')?.addEventListener('click', () => {
        const result = globalInstances.hashTable.display();
        updateOutput(hashOutput, result);
    });
    
    // Graph Algorithm Event Listeners
    const bfsStart = document.getElementById('bfs-start');
    const bfsOutput = document.getElementById('bfs-output');
    
    document.getElementById('bfs-execute')?.addEventListener('click', () => {
        const start = parseInt(bfsStart.value);
        if (!isNaN(start)) {
            const result = globalInstances.graph.bfs(start);
            updateOutput(bfsOutput, result);
        }
    });
    
    const dfsStart = document.getElementById('dfs-start');
    const dfsOutput = document.getElementById('dfs-output');
    
    document.getElementById('dfs-execute')?.addEventListener('click', () => {
        const start = parseInt(dfsStart.value);
        if (!isNaN(start)) {
            const result = globalInstances.graph.dfs(start);
            updateOutput(dfsOutput, result);
        }
    });
    
    const dijkstraStart = document.getElementById('dijkstra-start');
    const dijkstraEnd = document.getElementById('dijkstra-end');
    const dijkstraOutput = document.getElementById('dijkstra-output');
    
    document.getElementById('dijkstra-execute')?.addEventListener('click', () => {
        const start = parseInt(dijkstraStart.value);
        const end = parseInt(dijkstraEnd.value);
        if (!isNaN(start) && !isNaN(end)) {
            const result = globalInstances.graph.dijkstra(start, end);
            updateOutput(dijkstraOutput, result);
        }
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
            
            // Get active sorting algorithm
            const activeTab = document.querySelector('#sorting .tab-btn.active');
            const algorithm = activeTab ? activeTab.dataset.tab : 'merge';
            
            let sorted;
            switch(algorithm) {
                case 'bubble': sorted = SortingAlgorithms.bubbleSort([...arr]); break;
                case 'selection': sorted = SortingAlgorithms.selectionSort([...arr]); break;
                case 'insertion': sorted = SortingAlgorithms.insertionSort([...arr]); break;
                case 'quick': sorted = SortingAlgorithms.quickSort([...arr]); break;
                case 'heap-sort': sorted = SortingAlgorithms.heapSort([...arr]); break;
                case 'radix': sorted = SortingAlgorithms.radixSort([...arr]); break;
                default: sorted = SortingAlgorithms.mergeSort([...arr]);
            }
            
            updateOutput(sortOutput, `Original: [${original.join(', ')}]`);
            updateOutput(sortOutput, `${algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort: [${sorted.join(', ')}]`);
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
            
            // Get active search algorithm
            const activeTab = document.querySelector('#searching .tab-btn.active');
            const algorithm = activeTab ? activeTab.dataset.tab : 'binary';
            
            let result;
            if (algorithm === 'linear') {
                result = SearchingAlgorithms.linearSearch(arr, target);
            } else {
                result = SearchingAlgorithms.binarySearch(arr, target);
            }
            
            updateOutput(searchOutput, `Array: [${arr.join(', ')}]`);
            updateOutput(searchOutput, `Target: ${target}`);
            updateOutput(searchOutput, `Binary Search: ${result !== -1 ? `Found at index ${result}` : 'Not found'}`);
        }
    });
    
    // Linear Search Event Listeners
    const searchArrayLinear = document.getElementById('search-array-linear');
    const searchTargetLinear = document.getElementById('search-target-linear');
    const searchOutputLinear = document.getElementById('search-output-linear');
    
    document.getElementById('search-execute-linear')?.addEventListener('click', () => {
        const arrayInput = searchArrayLinear.value;
        const target = parseInt(searchTargetLinear.value);
        
        if (arrayInput && !isNaN(target)) {
            const arr = arrayInput.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
            const result = SearchingAlgorithms.linearSearch(arr, target);
            
            updateOutput(searchOutputLinear, `Array: [${arr.join(', ')}]`);
            updateOutput(searchOutputLinear, `Target: ${target}`);
            updateOutput(searchOutputLinear, `Linear Search: ${result !== -1 ? `Found at index ${result}` : 'Not found'}`);
        }
    });
    
    // Additional sorting algorithm event listeners
    const sortAlgorithms = ['sel', 'ins', 'merge', 'quick', 'heap', 'radix'];
    
    sortAlgorithms.forEach(algo => {
        const input = document.getElementById(`sort-input-${algo}`);
        const output = document.getElementById(`sort-output-${algo}`);
        const button = document.getElementById(`sort-execute-${algo}`);
        
        button?.addEventListener('click', () => {
            const inputValue = input?.value;
            if (inputValue) {
                const arr = inputValue.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
                const original = [...arr];
                
                let sorted;
                switch(algo) {
                    case 'sel': sorted = SortingAlgorithms.selectionSort([...arr]); break;
                    case 'ins': sorted = SortingAlgorithms.insertionSort([...arr]); break;
                    case 'merge': sorted = SortingAlgorithms.mergeSort([...arr]); break;
                    case 'quick': sorted = SortingAlgorithms.quickSort([...arr]); break;
                    case 'heap': sorted = SortingAlgorithms.heapSort([...arr]); break;
                    case 'radix': sorted = SortingAlgorithms.radixSort([...arr]); break;
                    default: sorted = [...arr];
                }
                
                updateOutput(output, `Original: [${original.join(', ')}]`);
                updateOutput(output, `${algo.charAt(0).toUpperCase() + algo.slice(1)} Sort: [${sorted.join(', ')}]`);
            }
        });
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