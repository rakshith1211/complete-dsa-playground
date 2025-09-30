import unittest
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src', 'python'))

from algorithms.sorting_algorithms import *

class TestSortingAlgorithms(unittest.TestCase):
    
    def setUp(self):
        self.test_arrays = [
            [64, 34, 25, 12, 22, 11, 90],
            [5, 2, 4, 6, 1, 3],
            [1],
            [],
            [3, 3, 3, 3]
        ]
        self.expected = [
            [11, 12, 22, 25, 34, 64, 90],
            [1, 2, 3, 4, 5, 6],
            [1],
            [],
            [3, 3, 3, 3]
        ]
    
    def test_bubble_sort(self):
        for i, arr in enumerate(self.test_arrays):
            test_arr = arr.copy()
            bubble_sort(test_arr)
            self.assertEqual(test_arr, self.expected[i])
    
    def test_selection_sort(self):
        for i, arr in enumerate(self.test_arrays):
            test_arr = arr.copy()
            selection_sort(test_arr)
            self.assertEqual(test_arr, self.expected[i])
    
    def test_insertion_sort(self):
        for i, arr in enumerate(self.test_arrays):
            test_arr = arr.copy()
            insertion_sort(test_arr)
            self.assertEqual(test_arr, self.expected[i])
    
    def test_quick_sort(self):
        for i, arr in enumerate(self.test_arrays):
            test_arr = arr.copy()
            if len(test_arr) > 0:
                quick_sort(test_arr)
            self.assertEqual(test_arr, self.expected[i])
    
    def test_heap_sort(self):
        for i, arr in enumerate(self.test_arrays):
            test_arr = arr.copy()
            heap_sort(test_arr)
            self.assertEqual(test_arr, self.expected[i])

if __name__ == '__main__':
    unittest.main()