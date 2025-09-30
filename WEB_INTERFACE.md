# Web Interface for Data Structures & Algorithms

This web interface provides an interactive demonstration of fundamental data structures and algorithms directly in your browser.

## Features

- **Singly Linked List**: Interactive visualization of insertions, deletions, and searches
- **Merge Sort**: Step-by-step sorting visualization
- **Real-time Feedback**: Immediate results and performance metrics
- **Responsive Design**: Works on desktop and mobile devices

## How to Run

### Method 1: Using the Batch File (Windows)
1. Double-click on `start_server.bat` in the project directory
2. Open your browser and navigate to `http://localhost:8000`

### Method 2: Using Python Directly
1. Open a terminal/command prompt
2. Navigate to the project directory
3. Run: `python server.py`
4. Open your browser and navigate to `http://localhost:8000`

### Method 3: Using Node.js (if available)
1. Install `http-server` globally: `npm install -g http-server`
2. Navigate to the project directory
3. Run: `http-server`
4. Open your browser and navigate to the provided URL (typically `http://localhost:8080`)

## Using the Interface

### Singly Linked List Section

1. **Insert Operations**:
   - Enter a value and click "Insert at Beginning" or "Insert at End"
   - Enter a value and position, then click "Insert at Position"

2. **Delete Operations**:
   - Click "Delete from Beginning" or "Delete from End"
   - Enter a position and click "Delete from Position"

3. **Search Operations**:
   - Enter a value and click "Search" to find its position
   - Click "Display List" to see all elements

4. **Visualization**:
   - The linked list structure is visualized in real-time
   - Each node is represented as a box with its value
   - Arrows show the links between nodes

### Merge Sort Section

1. **Sort Custom Array**:
   - Enter numbers separated by commas in the input field
   - Click "Sort Array" to see the sorted result

2. **Run Demo**:
   - Click "Run Demo" to see a pre-defined example

3. **Visualization**:
   - Both original and sorted arrays are displayed
   - Performance time is shown in milliseconds

## Technical Details

### Implementation Languages
- **Frontend**: HTML, CSS, JavaScript
- **No Backend Required**: All processing happens in the browser

### Data Structures Implemented
- Singly Linked List with all standard operations

### Algorithms Implemented
- Merge Sort (divide-and-conquer approach)

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript to be enabled

## Educational Value

This interface helps students and developers:
1. **Visualize** how data structures work internally
2. **Understand** algorithm performance characteristics
3. **Experiment** with different inputs and operations
4. **Learn** through interactive exploration

## Troubleshooting

### Common Issues

1. **"Address already in use"**:
   - Another application is using port 8000
   - Edit `server.py` to change the PORT variable to a different number

2. **JavaScript Errors**:
   - Ensure JavaScript is enabled in your browser
   - Check the browser's developer console for specific errors

3. **Files Not Loading**:
   - Make sure all files are in the same directory
   - Check that your firewall isn't blocking the connection

### Browser Requirements
- JavaScript must be enabled
- Modern browser with ES6 support recommended

## Extending the Interface

To add new data structures or algorithms:
1. Create a new JavaScript file with the implementation
2. Add HTML elements for the new section
3. Update `app.js` with event listeners and visualization logic
4. Add CSS styles as needed

## Contributing

This project is designed as an educational tool. Contributions are welcome:
1. Bug fixes
2. Additional data structures
3. Enhanced visualizations
4. Performance improvements
5. Additional algorithms

## License

This project is for educational purposes. Feel free to use and modify it for learning and teaching data structures and algorithms.