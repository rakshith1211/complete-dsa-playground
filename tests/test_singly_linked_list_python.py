import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src', 'python', 'data_structures'))

import unittest
from singly_linked_list import SinglyLinkedList

class TestSinglyLinkedList(unittest.TestCase):
    
    def setUp(self):
        self.list = SinglyLinkedList()
    
    def test_insert_at_beginning(self):
        self.assertTrue(self.list.is_empty())
        self.assertEqual(self.list.get_size(), 0)
        
        self.list.insert_at_beginning(10)
        self.assertFalse(self.list.is_empty())
        self.assertEqual(self.list.get_size(), 1)
        self.assertEqual(self.list.get(0), 10)
        
        self.list.insert_at_beginning(20)
        self.assertEqual(self.list.get_size(), 2)
        self.assertEqual(self.list.get(0), 20)
        self.assertEqual(self.list.get(1), 10)
    
    def test_insert_at_end(self):
        self.list.insert_at_end(10)
        self.assertEqual(self.list.get_size(), 1)
        self.assertEqual(self.list.get(0), 10)
        
        self.list.insert_at_end(20)
        self.assertEqual(self.list.get_size(), 2)
        self.assertEqual(self.list.get(0), 10)
        self.assertEqual(self.list.get(1), 20)
    
    def test_insert_at_position(self):
        # Insert at beginning
        self.list.insert_at_position(10, 0)
        self.assertEqual(self.list.get_size(), 1)
        self.assertEqual(self.list.get(0), 10)
        
        # Insert at end
        self.list.insert_at_position(30, 1)
        self.assertEqual(self.list.get_size(), 2)
        self.assertEqual(self.list.get(1), 30)
        
        # Insert in middle
        self.list.insert_at_position(20, 1)
        self.assertEqual(self.list.get_size(), 3)
        self.assertEqual(self.list.get(0), 10)
        self.assertEqual(self.list.get(1), 20)
        self.assertEqual(self.list.get(2), 30)
    
    def test_delete_from_beginning(self):
        # Test with empty list
        with self.assertRaises(IndexError):
            self.list.delete_from_beginning()
        
        self.list.insert_at_end(10)
        self.list.insert_at_end(20)
        
        data = self.list.delete_from_beginning()
        self.assertEqual(data, 10)
        self.assertEqual(self.list.get_size(), 1)
        self.assertEqual(self.list.get(0), 20)
        
        data = self.list.delete_from_beginning()
        self.assertEqual(data, 20)
        self.assertEqual(self.list.get_size(), 0)
        self.assertTrue(self.list.is_empty())
    
    def test_delete_from_end(self):
        # Test with empty list
        with self.assertRaises(IndexError):
            self.list.delete_from_end()
        
        self.list.insert_at_end(10)
        self.list.insert_at_end(20)
        self.list.insert_at_end(30)
        
        data = self.list.delete_from_end()
        self.assertEqual(data, 30)
        self.assertEqual(self.list.get_size(), 2)
        
        data = self.list.delete_from_end()
        self.assertEqual(data, 20)
        self.assertEqual(self.list.get_size(), 1)
        self.assertEqual(self.list.get(0), 10)
    
    def test_search(self):
        self.assertEqual(self.list.search(10), -1)  # Empty list
        
        self.list.insert_at_end(10)
        self.list.insert_at_end(20)
        self.list.insert_at_end(30)
        
        self.assertEqual(self.list.search(10), 0)
        self.assertEqual(self.list.search(20), 1)
        self.assertEqual(self.list.search(30), 2)
        self.assertEqual(self.list.search(100), -1)  # Not found
    
    def test_get(self):
        self.list.insert_at_end(10)
        self.list.insert_at_end(20)
        self.list.insert_at_end(30)
        
        self.assertEqual(self.list.get(0), 10)
        self.assertEqual(self.list.get(1), 20)
        self.assertEqual(self.list.get(2), 30)
        
        # Test out of bounds
        with self.assertRaises(IndexError):
            self.list.get(3)
        
        with self.assertRaises(IndexError):
            self.list.get(-1)
    
    def test_size_and_is_empty(self):
        self.assertTrue(self.list.is_empty())
        self.assertEqual(self.list.get_size(), 0)
        
        self.list.insert_at_end(10)
        self.assertFalse(self.list.is_empty())
        self.assertEqual(self.list.get_size(), 1)
        
        self.list.delete_from_beginning()
        self.assertTrue(self.list.is_empty())
        self.assertEqual(self.list.get_size(), 0)

if __name__ == '__main__':
    unittest.main()