/**
 * Merge Sort Implementation in JavaScript
 * 
 * Time Complexity: O(n log n) for all cases (best, average, and worst)
 * Space Complexity: O(n)
 * 
 * Merge Sort is a stable, divide-and-conquer sorting algorithm.
 * It works by recursively dividing the array into two halves,
 * sorting each half, and then merging them back together.
 */

/**
 * Main function that sorts an array using merge sort
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - A new sorted array
 */
function mergeSort(arr) {
    // Base case: arrays with 0 or 1 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Conquer: recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    
    // Combine: merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

/**
 * Merges two sorted arrays into one sorted array
 * @param {number[]} left - First sorted array
 * @param {number[]} right - Second sorted array
 * @returns {number[]} - A new sorted array containing all elements from both arrays
 */
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements from left array, if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    // Add remaining elements from right array, if any
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

/**
 * Utility function to print an array
 * @param {number[]} arr - The array to print
 * @returns {string} - String representation of the array
 */
function printArray(arr) {
    return arr.join(' ');
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mergeSort,
        merge,
        printArray
    };
}