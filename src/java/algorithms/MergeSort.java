/**
 * Merge Sort Implementation
 * 
 * Time Complexity: O(n log n) for all cases (best, average, and worst)
 * Space Complexity: O(n)
 * 
 * Merge Sort is a stable, divide-and-conquer sorting algorithm.
 * It works by recursively dividing the array into two halves,
 * sorting each half, and then merging them back together.
 */
public class MergeSort {
    
    /**
     * Main function that sorts an array using merge sort
     * @param arr The array to be sorted
     */
    public static void sort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        mergeSort(arr, 0, arr.length - 1);
    }
    
    /**
     * Recursively divides the array and sorts the subarrays
     * @param arr The array to be sorted
     * @param left The starting index of the subarray
     * @param right The ending index of the subarray
     */
    private static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            // Find the middle point
            int mid = left + (right - left) / 2;
            
            // Sort first and second halves
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }
    
    /**
     * Merges two subarrays of arr[]
     * First subarray is arr[left..mid]
     * Second subarray is arr[mid+1..right]
     * @param arr The array containing the subarrays to merge
     * @param left The starting index of the first subarray
     * @param mid The ending index of the first subarray
     * @param right The ending index of the second subarray
     */
    private static void merge(int[] arr, int left, int mid, int right) {
        // Find sizes of two subarrays to be merged
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        // Create temporary arrays
        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];
        
        // Copy data to temporary arrays
        for (int i = 0; i < n1; ++i)
            leftArr[i] = arr[left + i];
        for (int j = 0; j < n2; ++j)
            rightArr[j] = arr[mid + 1 + j];
        
        // Merge the temporary arrays
        // Initial indexes of first and second subarrays
        int i = 0, j = 0;
        
        // Initial index of merged subarray
        int k = left;
        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }
        
        // Copy remaining elements of leftArr[] if any
        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }
        
        // Copy remaining elements of rightArr[] if any
        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }
    
    /**
     * Utility function to print an array
     * @param arr The array to print
     */
    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
    
    // Example usage
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};
        
        System.out.println("Given Array:");
        printArray(arr);
        
        sort(arr);
        
        System.out.println("\nSorted Array:");
        printArray(arr);
    }
}