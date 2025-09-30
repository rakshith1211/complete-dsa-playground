import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'data_structures'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'algorithms'))

from singly_linked_list import SinglyLinkedList
from merge_sort import merge_sort, print_array

def main():
    print("Data Structures & Algorithms Implementation Demo")
    print("================================================")
    print()
    
    # Demonstrate Singly Linked List
    print("1. Singly Linked List Demo:")
    list = SinglyLinkedList()
    
    print("Inserting elements: 30, 10, 20, 5, 15")
    list.insert_at_end(30)
    list.insert_at_end(10)
    list.insert_at_end(20)
    list.insert_at_beginning(5)
    list.insert_at_position(15, 2)
    
    print("Current list: ", end="")
    list.display()
    
    print("Deleting from beginning: {}".format(list.delete_from_beginning()))
    print("Deleting from end: {}".format(list.delete_from_end()))
    
    print("Final list: ", end="")
    list.display()
    
    print("Size of list: {}".format(list.get_size()))
    print("Position of 20: {}".format(list.search(20)))
    print("Position of 100: {}".format(list.search(100)))
    print()
    
    # Demonstrate Merge Sort
    print("2. Merge Sort Demo:")
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    print("Original array: ", end="")
    print_array(arr)
    
    merge_sort(arr)
    
    print("Sorted array: ", end="")
    print_array(arr)
    print()
    
    print("Demo completed successfully!")

if __name__ == "__main__":
    main()