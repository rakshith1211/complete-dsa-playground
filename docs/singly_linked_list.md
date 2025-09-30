# Singly Linked List

## Overview

A singly linked list is a linear data structure where each element (node) points to the next element in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations.

## Structure

Each node in a singly linked list contains:
1. **Data**: The value stored in the node
2. **Next Pointer**: A reference to the next node in the sequence

```
[Data | Next] -> [Data | Next] -> [Data | Next] -> NULL
```

## Time Complexity

| Operation              | Time Complexity | Space Complexity |
|------------------------|-----------------|------------------|
| Insert at beginning    | O(1)            | O(1)             |
| Insert at end          | O(n)            | O(1)             |
| Insert at position     | O(n)            | O(1)             |
| Delete from beginning  | O(1)            | O(1)             |
| Delete from end        | O(n)            | O(1)             |
| Delete from position   | O(n)            | O(1)             |
| Search                 | O(n)            | O(1)             |
| Access by index        | O(n)            | O(1)             |

## Space Complexity

The space complexity of a singly linked list is O(n), where n is the number of elements in the list.

## Advantages

1. **Dynamic Size**: Can grow and shrink at runtime
2. **Efficient Insertions/Deletions**: At the beginning O(1)
3. **No Memory Wastage**: Allocates memory as needed

## Disadvantages

1. **No Random Access**: Elements cannot be accessed directly
2. **Extra Memory**: Requires extra memory for pointers
3. **Not Cache Friendly**: Non-contiguous memory locations

## Use Cases

1. **Implementation of Stacks and Queues**
2. **Music Playlist Applications**
3. **Browser History**
4. **Undo Functionality in Software**
5. **Hash Tables Chaining**

## Implementation Details

Our implementation provides the following operations:

### Core Operations

1. **insert_at_beginning(data)**: Adds an element at the beginning
2. **insert_at_end(data)**: Adds an element at the end
3. **insert_at_position(data, position)**: Adds an element at a specific position
4. **delete_from_beginning()**: Removes and returns the first element
5. **delete_from_end()**: Removes and returns the last element
6. **delete_from_position(position)**: Removes and returns an element at a specific position
7. **search(data)**: Finds the position of an element
8. **display()**: Prints all elements in the list

### Utility Functions

1. **get_size()**: Returns the number of elements
2. **is_empty()**: Checks if the list is empty
3. **get(index)**: Returns the element at a specific index (Java/Python only)

## Example Usage

### C Implementation
```c
#include "singly_linked_list.h"

int main() {
    LinkedList* list = create_list();
    
    insert_at_end(list, 10);
    insert_at_end(list, 20);
    insert_at_beginning(5);
    
    display(list); // Output: 5 10 20
    
    destroy_list(list);
    return 0;
}
```

### Java Implementation
```java
public class Main {
    public static void main(String[] args) {
        SinglyLinkedList list = new SinglyLinkedList();
        
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtBeginning(5);
        
        list.display(); // Output: 5 10 20
    }
}
```

### Python Implementation
```python
from singly_linked_list import SinglyLinkedList

list = SinglyLinkedList()
list.insert_at_end(10)
list.insert_at_end(20)
list.insert_at_beginning(5)

list.display()  # Output: 5 10 20
```