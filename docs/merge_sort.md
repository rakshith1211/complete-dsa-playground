# Merge Sort

## Overview

Merge Sort is a divide-and-conquer algorithm that works by recursively dividing an array into two halves, sorting each half, and then merging them back together. It is one of the most efficient sorting algorithms and is widely used in practice.

## How It Works

1. **Divide**: Divide the unsorted array into two halves
2. **Conquer**: Recursively sort the two halves
3. **Combine**: Merge the two sorted halves to produce a sorted array

## Algorithm Steps

1. If the array has only one element, it is already sorted
2. Otherwise, divide the array into two halves
3. Recursively sort the left half
4. Recursively sort the right half
5. Merge the two sorted halves

## Time Complexity

| Case      | Time Complexity |
|-----------|-----------------|
| Best      | O(n log n)      |
| Average   | O(n log n)      |
| Worst     | O(n log n)      |

Merge Sort has a consistent O(n log n) time complexity in all cases because it always divides the array into two halves and takes linear time to merge them.

## Space Complexity

O(n) - Merge Sort requires additional space to store the temporary arrays during the merging process.

## Stability

Merge Sort is a stable sorting algorithm, meaning that the relative order of equal elements is preserved.

## Advantages

1. **Consistent Performance**: O(n log n) time complexity in all cases
2. **Stable**: Maintains the relative order of equal elements
3. **Predictable**: Performance is not affected by the initial order of elements
4. **Parallelizable**: Can be easily parallelized

## Disadvantages

1. **Space Complexity**: Requires O(n) additional space
2. **Not In-Place**: Not suitable for memory-constrained environments
3. **Performance**: Can be slower than Quick Sort in practice due to the overhead of copying arrays

## Use Cases

1. **External Sorting**: When data is too large to fit in memory
2. **Stable Sorting Required**: When the relative order of equal elements must be preserved
3. **Predictable Performance**: When consistent performance is more important than average-case performance
4. **Linked Lists**: Particularly efficient for sorting linked lists

## Implementation Details

### C Implementation
The C implementation uses in-place sorting with temporary arrays allocated during the merge step.

### Java Implementation
The Java implementation uses a recursive approach with separate methods for dividing and merging.

### Python Implementation
The Python implementation creates new arrays during the merge process, which is more natural in Python but uses more memory.

## Example Usage

### C Implementation
```c
#include "merge_sort.h"

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int arr_size = sizeof(arr) / sizeof(arr[0]);
    
    merge_sort(arr, 0, arr_size - 1);
    
    // Print sorted array
    for (int i = 0; i < arr_size; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```

### Java Implementation
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        
        MergeSort.sort(arr);
        
        // Print sorted array
        MergeSort.printArray(arr);
    }
}
```

### Python Implementation
```python
from merge_sort import merge_sort, print_array

arr = [12, 11, 13, 5, 6, 7]

merge_sort(arr)

# Print sorted array
print_array(arr)
```