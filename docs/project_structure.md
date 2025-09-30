# Project Structure

This document describes the organization of the Data Structures & Algorithms (DSA) Implementation project.

## Directory Structure

```
Data Structures & Algorithms (DSA)/
├── src/
│   ├── c/
│   │   ├── data_structures/
│   │   │   ├── singly_linked_list.h
│   │   │   └── singly_linked_list.c
│   │   ├── algorithms/
│   │   │   ├── merge_sort.h
│   │   │   └── merge_sort.c
│   │   └── main.c
│   ├── java/
│   │   ├── data_structures/
│   │   │   └── SinglyLinkedList.java
│   │   ├── algorithms/
│   │   │   └── MergeSort.java
│   │   └── Main.java (to be created)
│   └── python/
│       ├── data_structures/
│       │   └── singly_linked_list.py
│       ├── algorithms/
│       │   └── merge_sort.py
│       └── main.py (to be created)
├── tests/
│   ├── test_singly_linked_list_c.c
│   ├── SinglyLinkedListTest.java
│   └── test_singly_linked_list_python.py
├── docs/
│   ├── singly_linked_list.md
│   ├── merge_sort.md
│   └── project_structure.md
├── build/ (created during build process)
├── Makefile
├── run_tests.sh
├── run_tests.bat
├── requirements.txt
└── README.md
```

## Component Descriptions

### Source Code (src/)

Contains implementations of data structures and algorithms in three programming languages:

1. **C**: Low-level implementations with explicit memory management
2. **Java**: Object-oriented implementations with built-in memory management
3. **Python**: High-level implementations with dynamic typing

Each language follows the same directory structure:
- `data_structures/`: Contains implementations of various data structures
- `algorithms/`: Contains implementations of various algorithms

### Tests (tests/)

Contains unit tests for each implementation:
- C tests use a custom testing framework
- Java tests use JUnit 5
- Python tests use the built-in unittest framework

### Documentation (docs/)

Contains detailed documentation for each data structure and algorithm:
- Implementation details
- Time and space complexity analysis
- Use cases and examples
- Advantages and disadvantages

### Build System

- **Makefile**: For building and testing C implementations
- **run_tests.sh**: Shell script to run all tests (Linux/macOS)
- **run_tests.bat**: Batch script to run all tests (Windows)
- **requirements.txt**: Python dependencies (currently empty as no external dependencies)

## Build and Test Instructions

### C Implementation

```bash
# Build all components
make

# Run tests
make run-test

# Clean build files
make clean

# Get help
make help
```

### Java Implementation

```bash
# Compile Java files
javac -d build src/java/data_structures/*.java src/java/algorithms/*.java

# Run tests (requires JUnit 5)
java -cp build org.junit.platform.console.ConsoleLauncher --classpath build --select-package=data_structures
```

### Python Implementation

```bash
# Run tests
python -m unittest tests/test_singly_linked_list_python.py

# Or run all Python tests
python -m unittest discover tests/
```

## Adding New Implementations

To add a new data structure or algorithm:

1. Create a new file in the appropriate language and category directory
2. Follow the naming conventions of existing implementations
3. Include comprehensive documentation as comments in the code
4. Add unit tests in the tests/ directory
5. Update the documentation in the docs/ directory
6. Update the build system if necessary

## Code Quality Standards

All implementations follow these standards:

1. **Clarity**: Code is written to be easily understood
2. **Efficiency**: Algorithms use optimal time and space complexity
3. **Documentation**: Each implementation includes complexity analysis and usage examples
4. **Testing**: Comprehensive unit tests cover normal cases, edge cases, and error conditions
5. **Consistency**: Similar operations have consistent interfaces across languages