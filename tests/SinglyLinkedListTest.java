import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for SinglyLinkedList implementation
 */
public class SinglyLinkedListTest {
    
    private SinglyLinkedList list;
    
    @BeforeEach
    void setUp() {
        list = new SinglyLinkedList();
    }
    
    @Test
    void testInsertAtBeginning() {
        assertTrue(list.isEmpty());
        assertEquals(0, list.size());
        
        list.insertAtBeginning(10);
        assertFalse(list.isEmpty());
        assertEquals(1, list.size());
        assertEquals(10, list.get(0));
        
        list.insertAtBeginning(20);
        assertEquals(2, list.size());
        assertEquals(20, list.get(0));
        assertEquals(10, list.get(1));
    }
    
    @Test
    void testInsertAtEnd() {
        list.insertAtEnd(10);
        assertEquals(1, list.size());
        assertEquals(10, list.get(0));
        
        list.insertAtEnd(20);
        assertEquals(2, list.size());
        assertEquals(10, list.get(0));
        assertEquals(20, list.get(1));
    }
    
    @Test
    void testInsertAtPosition() {
        // Insert at beginning
        list.insertAtPosition(10, 0);
        assertEquals(1, list.size());
        assertEquals(10, list.get(0));
        
        // Insert at end
        list.insertAtPosition(30, 1);
        assertEquals(2, list.size());
        assertEquals(30, list.get(1));
        
        // Insert in middle
        list.insertAtPosition(20, 1);
        assertEquals(3, list.size());
        assertEquals(10, list.get(0));
        assertEquals(20, list.get(1));
        assertEquals(30, list.get(2));
    }
    
    @Test
    void testDeleteFromBeginning() {
        // Test with empty list
        assertThrows(java.util.NoSuchElementException.class, () -> {
            list.deleteFromBeginning();
        });
        
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        
        int data = list.deleteFromBeginning();
        assertEquals(10, data);
        assertEquals(1, list.size());
        assertEquals(20, list.get(0));
        
        data = list.deleteFromBeginning();
        assertEquals(20, data);
        assertEquals(0, list.size());
        assertTrue(list.isEmpty());
    }
    
    @Test
    void testDeleteFromEnd() {
        // Test with empty list
        assertThrows(java.util.NoSuchElementException.class, () -> {
            list.deleteFromEnd();
        });
        
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);
        
        int data = list.deleteFromEnd();
        assertEquals(30, data);
        assertEquals(2, list.size());
        
        data = list.deleteFromEnd();
        assertEquals(20, data);
        assertEquals(1, list.size());
        assertEquals(10, list.get(0));
    }
    
    @Test
    void testSearch() {
        assertEquals(-1, list.search(10)); // Empty list
        
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);
        
        assertEquals(0, list.search(10));
        assertEquals(1, list.search(20));
        assertEquals(2, list.search(30));
        assertEquals(-1, list.search(100)); // Not found
    }
    
    @Test
    void testGet() {
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);
        
        assertEquals(10, list.get(0));
        assertEquals(20, list.get(1));
        assertEquals(30, list.get(2));
        
        // Test out of bounds
        assertThrows(IndexOutOfBoundsException.class, () -> {
            list.get(3);
        });
        
        assertThrows(IndexOutOfBoundsException.class, () -> {
            list.get(-1);
        });
    }
    
    @Test
    void testSizeAndIsEmpty() {
        assertTrue(list.isEmpty());
        assertEquals(0, list.size());
        
        list.insertAtEnd(10);
        assertFalse(list.isEmpty());
        assertEquals(1, list.size());
        
        list.deleteFromBeginning();
        assertTrue(list.isEmpty());
        assertEquals(0, list.size());
    }
}