#include "merge_sort.h"
#include <stdio.h>
#include <stdlib.h>

// Merge two subarrays of arr[]
// First subarray is arr[left..mid]
// Second subarray is arr[mid+1..right]
void merge(int arr[], int left, int mid, int right) {
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    int* left_arr = (int*)malloc(n1 * sizeof(int));
    int* right_arr = (int*)malloc(n2 * sizeof(int));
    
    // Check if memory allocation was successful
    if (left_arr == NULL || right_arr == NULL) {
        printf("Memory allocation failed\n");
        free(left_arr);
        free(right_arr);
        return;
    }
    
    // Copy data to temporary arrays
    for (i = 0; i < n1; i++)
        left_arr[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        right_arr[j] = arr[mid + 1 + j];
    
    // Merge the temporary arrays back into arr[left..right]
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = left; // Initial index of merged subarray
    
    while (i < n1 && j < n2) {
        if (left_arr[i] <= right_arr[j]) {
            arr[k] = left_arr[i];
            i++;
        } else {
            arr[k] = right_arr[j];
            j++;
        }
        k++;
    }
    
    // Copy the remaining elements of left_arr[], if there are any
    while (i < n1) {
        arr[k] = left_arr[i];
        i++;
        k++;
    }
    
    // Copy the remaining elements of right_arr[], if there are any
    while (j < n2) {
        arr[k] = right_arr[j];
        j++;
        k++;
    }
    
    // Free the temporary arrays
    free(left_arr);
    free(right_arr);
}

// Main function that sorts arr[left..right] using merge()
void merge_sort(int arr[], int left, int right) {
    if (left < right) {
        // Same as (left+right)/2, but avoids overflow for large left and right
        int mid = left + (right - left) / 2;
        
        // Sort first and second halves
        merge_sort(arr, left, mid);
        merge_sort(arr, mid + 1, right);
        
        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}