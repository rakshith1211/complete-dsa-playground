#!/bin/bash

# Script to run all tests for Data Structures & Algorithms Implementation

echo "========================================="
echo "Running All Tests"
echo "========================================="

# Create build directory if it doesn't exist
mkdir -p build

echo
echo "-----------------------------------------"
echo "Running C Tests"
echo "-----------------------------------------"
make run-test

echo
echo "-----------------------------------------"
echo "Running Java Tests"
echo "-----------------------------------------"
# Compile Java files
javac -d build src/java/data_structures/SinglyLinkedList.java tests/SinglyLinkedListTest.java

# Run Java tests
java -cp build org.junit.platform.console.ConsoleLauncher --classpath build --select-class=SinglyLinkedListTest

echo
echo "-----------------------------------------"
echo "Running Python Tests"
echo "-----------------------------------------"
python tests/test_singly_linked_list_python.py

echo
echo "========================================="
echo "All Tests Completed"
echo "========================================="