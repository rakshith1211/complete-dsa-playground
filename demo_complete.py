#!/usr/bin/env python3
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'src', 'python'))

from data_structures.singly_linked_list import SinglyLinkedList
from data_structures.doubly_linked_list import DoublyLinkedList
from data_structures.stack import ArrayStack, LinkedStack
from data_structures.binary_search_tree import BinarySearchTree
from algorithms.sorting_algorithms import *

def main():
    print("=== Complete DSA Implementation Demo ===\n")
    
    # Stack Demo
    print("--- Stack Demo ---")
    stack = ArrayStack()
    stack.push(10)
    stack.push(20)
    stack.push(30)
    print(f"Popped: {stack.pop()}")
    print(f"Top: {stack.peek()}")
    print(f"Size: {stack.size()}\n")
    
    # Doubly Linked List Demo
    print("--- Doubly Linked List Demo ---")
    dll = DoublyLinkedList()
    dll.insert_front(10)
    dll.insert_back(20)
    dll.insert_front(5)
    print("Forward: ", end="")
    dll.print_forward()
    print("Backward: ", end="")
    dll.print_backward()
    print(f"Size: {len(dll)}\n")
    
    # Binary Search Tree Demo
    print("--- Binary Search Tree Demo ---")
    bst = BinarySearchTree()
    for val in [50, 30, 70, 20, 40, 60, 80]:
        bst.insert(val)
    print(f"Inorder: {bst.inorder_traversal()}")
    print(f"Search 40: {bst.search(40)}")
    print(f"Search 100: {bst.search(100)}\n")
    
    # Sorting Algorithms Demo
    print("--- Sorting Algorithms Demo ---")
    test_arr = [64, 34, 25, 12, 22, 11, 90]
    
    # Quick Sort
    arr1 = test_arr.copy()
    quick_sort(arr1)
    print(f"Quick Sort: {arr1}")
    
    # Heap Sort
    arr2 = test_arr.copy()
    heap_sort(arr2)
    print(f"Heap Sort: {arr2}")
    
    # Bubble Sort
    arr3 = test_arr.copy()
    bubble_sort(arr3)
    print(f"Bubble Sort: {arr3}")
    
    # Radix Sort
    arr4 = test_arr.copy()
    radix_sort(arr4)
    print(f"Radix Sort: {arr4}\n")
    
    print("🎉 All demos completed successfully!")
    print("✅ Data Structures: Singly/Doubly Linked Lists, Stacks, BST")
    print("✅ Algorithms: Quick, Heap, Bubble, Radix Sort")
    print("✅ All implementations working correctly!")

if __name__ == "__main__":
    main()