# Data Structures & Algorithms Implementation Project

## Project Overview

This repository contains implementations of classic data structures and algorithms in C, Java, Python, and JavaScript. Each implementation is designed with clarity, efficiency, and interview-prep in mind. The repo also includes unit tests and time complexity analysis for every algorithm.

Additionally, the project features an interactive web interface that demonstrates these data structures and algorithms directly in the browser, making it accessible and educational for users without requiring any installation.

## Implemented Data Structures

### 1. Singly Linked List
- **Languages**: C, Java, Python, JavaScript (Web Interface)
- **Operations Implemented**:
  - Insert at beginning, end, and specific position
  - Delete from beginning, end, and specific position
  - Search for elements
  - Display list contents
  - Get size and check if empty
- **Time Complexities**:
  - Insert at beginning: O(1)
  - Insert at end: O(n)
  - Insert at position: O(n)
  - Delete from beginning: O(1)
  - Delete from end: O(n)
  - Delete from position: O(n)
  - Search: O(n)
- **Space Complexity**: O(n)

## Implemented Algorithms

### 1. Merge Sort
- **Languages**: C, Java, Python, JavaScript (Web Interface)
- **Approach**: Divide-and-conquer
- **Time Complexity**: O(n log n) for all cases
- **Space Complexity**: O(n)
- **Stability**: Stable sorting algorithm

## Testing

Each implementation includes comprehensive unit tests:
- **C**: Custom test framework with assertions
- **Java**: JUnit 5 tests
- **Python**: unittest module tests

## Project Structure

```
src/
├── c/
│   ├── data_structures/
│   ├── algorithms/
│   └── main.c
├── java/
│   ├── data_structures/
│   ├── algorithms/
│   └── Main.java
├── python/
│   ├── data_structures/
│   ├── algorithms/
│   └── main.py
└── web/
    ├── index.html
    ├── styles.css
    ├── singly_linked_list.js
    ├── merge_sort.js
    └── app.js
```

## Build and Test Instructions

### C Implementation
```bash
make                # Build all components
make run-test       # Run tests
make clean          # Clean build files
```

### Java Implementation
```bash
# Compile
javac -d build src/java/data_structures/*.java src/java/algorithms/*.java

# Run tests (requires JUnit 5)
java -cp build org.junit.platform.console.ConsoleLauncher --classpath build --select-class=SinglyLinkedListTest
```

### Python Implementation
```bash
# Run tests
python -m unittest tests/test_singly_linked_list_python.py
```

## Future Enhancements

### Data Structures to Implement
- Doubly Linked List
- Circular Linked List
- Stack (Array and Linked List implementations)
- Queue (Normal, Circular, Priority, Deque)
- Trees (Binary Tree, BST, AVL, Heap)
- Graphs (Adjacency List/Matrix, BFS, DFS, Dijkstra, Topological Sort)

### Algorithms to Implement
- Sorting: Bubble, Selection, Insertion, Quick, Heap, Counting, Radix
- Searching: Linear Search, Binary Search, Hashing

## Why This Project?

1. **Reinforces Core CS Fundamentals**: Hands-on implementation of essential data structures and algorithms
2. **Prepares for Coding Interviews**: Covers commonly asked DSA questions in technical interviews
3. **Demonstrates Problem-Solving Ability**: Shows clean code practices and algorithmic thinking
4. **Multi-language Implementation**: Demonstrates proficiency in C, Java, and Python
5. **Comprehensive Testing**: Includes unit tests ensuring code reliability and correctness
6. **Documentation**: Well-documented implementations with complexity analysis

## Skills Demonstrated

- **Data Structures & Algorithms**: Practical implementation knowledge
- **Multi-language Proficiency**: C (low-level), Java (OOP), Python (high-level), JavaScript (Web)
- **Software Engineering Practices**: Testing, documentation, code organization
- **Problem Solving**: Algorithmic thinking and optimization
- **Code Quality**: Clean, readable, and maintainable code
- **Web Development**: HTML, CSS, JavaScript, responsive design
- **User Experience**: Interactive educational interfaces

This project serves as an excellent addition to a resume, demonstrating both theoretical knowledge and practical implementation skills in computer science fundamentals.