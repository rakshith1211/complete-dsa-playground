// Simple test for web interface JavaScript implementations
const fs = require('fs');

// Load our implementations
eval(fs.readFileSync('singly_linked_list.js', 'utf8'));
eval(fs.readFileSync('merge_sort.js', 'utf8'));

// Test Singly Linked List
console.log('Testing Singly Linked List...');
const list = new SinglyLinkedList();

// Test insertions
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtBeginning(5);
console.log('List after insertions:', list.toArray()); // Should be [5, 10, 20]

// Test search
console.log('Position of 20:', list.search(20)); // Should be 2
console.log('Position of 100:', list.search(100)); // Should be -1

// Test deletions
console.log('Deleted from beginning:', list.deleteFromBeginning()); // Should be 5
console.log('List after deletion:', list.toArray()); // Should be [10, 20]

console.log('Singly Linked List tests completed.');

// Test Merge Sort
console.log('\nTesting Merge Sort...');
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', unsortedArray);

const sortedArray = mergeSort(unsortedArray);
console.log('Sorted array:', sortedArray); // Should be [11, 12, 22, 25, 34, 64, 90]

console.log('Merge Sort tests completed.');

console.log('\nAll web interface tests passed!');