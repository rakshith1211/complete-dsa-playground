#!/bin/bash

# Script to build and run the C demo

echo "Building and running C demo..."
echo "================================"

# Create build directory if it doesn't exist
mkdir -p build

# Build the demo
make main

# Run the demo
./build/dsa_main

echo "Demo completed!"