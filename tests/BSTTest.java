import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.*;
import data_structures.BinarySearchTree;

public class BSTTest {
    private BinarySearchTree bst;
    
    @BeforeEach
    void setUp() {
        bst = new BinarySearchTree();
    }
    
    @Test
    void testInsertAndSearch() {
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        
        assertTrue(bst.search(50));
        assertTrue(bst.search(30));
        assertTrue(bst.search(70));
        assertFalse(bst.search(100));
        assertEquals(5, bst.size());
    }
    
    @Test
    void testDelete() {
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        
        bst.delete(30);
        assertFalse(bst.search(30));
        assertEquals(2, bst.size());
    }
    
    @Test
    void testEmptyTree() {
        assertTrue(bst.isEmpty());
        assertFalse(bst.search(10));
        assertEquals(0, bst.size());
    }
}