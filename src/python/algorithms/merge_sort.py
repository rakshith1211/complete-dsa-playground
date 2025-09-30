"""
Merge Sort Implementation

Time Complexity: O(n log n) for all cases (best, average, and worst)
Space Complexity: O(n)

Merge Sort is a stable, divide-and-conquer sorting algorithm.
It works by recursively dividing the array into two halves,
sorting each half, and then merging them back together.
"""

def merge_sort(arr):
    """
    Main function that sorts an array using merge sort
    
    Args:
        arr: List of comparable elements to be sorted
    
    Returns:
        None (sorts the array in-place for efficiency)
    """
    if arr is None or len(arr) <= 1:
        return
    
    # Create a copy of the array to avoid modifying the original
    result = merge_sort_helper(arr)
    
    # Copy the sorted result back to the original array
    for i in range(len(arr)):
        arr[i] = result[i]

def merge_sort_helper(arr):
    """
    Recursively divides the array and sorts the subarrays
    
    Args:
        arr: List of comparable elements to be sorted
    
    Returns:
        List: A new sorted list
    """
    if len(arr) <= 1:
        return arr
    
    # Find the middle point and divide the array into two halves
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]
    
    # Sort the two halves
    left = merge_sort_helper(left)
    right = merge_sort_helper(right)
    
    # Merge the sorted halves
    return merge(left, right)

def merge(left, right):
    """
    Merges two sorted subarrays into one sorted array
    
    Args:
        left: First sorted subarray
        right: Second sorted subarray
    
    Returns:
        List: A new sorted array containing all elements from both subarrays
    """
    result = []
    i = j = 0
    
    # Compare elements from both subarrays and merge them in sorted order
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements from left subarray, if any
    while i < len(left):
        result.append(left[i])
        i += 1
    
    # Add remaining elements from right subarray, if any
    while j < len(right):
        result.append(right[j])
        j += 1
    
    return result

def print_array(arr):
    """
    Utility function to print an array
    
    Args:
        arr: List to be printed
    """
    for element in arr:
        print(element, end=" ")
    print()

# Example usage
if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6, 7]
    
    print("Given Array:")
    print_array(arr)
    
    merge_sort(arr)
    
    print("\nSorted Array:")
    print_array(arr)