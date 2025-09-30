#ifndef SORTING_H
#define SORTING_H

// Basic sorting algorithms
void bubble_sort(int arr[], int n);
void selection_sort(int arr[], int n);
void insertion_sort(int arr[], int n);

// Advanced sorting algorithms
void quick_sort(int arr[], int low, int high);
int partition(int arr[], int low, int high);
void heap_sort(int arr[], int n);
void heapify(int arr[], int n, int i);

// Linear time sorting
void counting_sort(int arr[], int n, int max_val);
void radix_sort(int arr[], int n);
int get_max(int arr[], int n);
void count_sort_for_radix(int arr[], int n, int exp);

// Utility functions
void swap(int* a, int* b);
void print_array(int arr[], int n);

#endif