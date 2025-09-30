# Makefile for Data Structures & Algorithms Implementation

# Compiler and flags
CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -g

# Directories
SRC_DIR = src/c
data_structures_DIR = $(SRC_DIR)/data_structures
algorithms_DIR = $(SRC_DIR)/algorithms
TEST_DIR = tests
BUILD_DIR = build

# Source files
DATA_STRUCTURES_SOURCES = $(data_structures_DIR)/singly_linked_list.c
ALGORITHMS_SOURCES = $(algorithms_DIR)/merge_sort.c
MAIN_SOURCE = $(SRC_DIR)/main.c
SOURCES = $(DATA_STRUCTURES_SOURCES) $(ALGORITHMS_SOURCES) $(MAIN_SOURCE)
TEST_SOURCES = $(TEST_DIR)/test_singly_linked_list_c.c

# Object files
OBJECTS = $(SOURCES:.c=.o)
TEST_OBJECTS = $(TEST_SOURCES:.c=.o)

# Executables
MAIN_EXEC = $(BUILD_DIR)/dsa_main
TEST_EXEC = $(BUILD_DIR)/test_singly_linked_list

# Default target
.PHONY: all
all: directories main test

# Create build directories
.PHONY: directories
directories:
	mkdir -p $(BUILD_DIR)

# Compile main program
# Compile main program
$(BUILD_DIR)/main.o: $(MAIN_SOURCE)
	$(CC) $(CFLAGS) -c $< -o $@

# Compile data structures
$(BUILD_DIR)/singly_linked_list.o: $(data_structures_DIR)/singly_linked_list.c $(data_structures_DIR)/singly_linked_list.h
	$(CC) $(CFLAGS) -c $< -o $@

# Compile algorithms
$(BUILD_DIR)/merge_sort.o: $(algorithms_DIR)/merge_sort.c $(algorithms_DIR)/merge_sort.h
	$(CC) $(CFLAGS) -c $< -o $@

# Compile test program
$(BUILD_DIR)/test_singly_linked_list.o: $(TEST_DIR)/test_singly_linked_list_c.c $(SRC_DIR)/singly_linked_list.h
	$(CC) $(CFLAGS) -c $< -o $@

# Link main program
.PHONY: main
main: $(BUILD_DIR)/main.o $(BUILD_DIR)/singly_linked_list.o $(BUILD_DIR)/merge_sort.o
	$(CC) $(CFLAGS) $^ -o $(MAIN_EXEC)

# Link test program
.PHONY: test
test: $(BUILD_DIR)/test_singly_linked_list.o $(BUILD_DIR)/singly_linked_list.o
	$(CC) $(CFLAGS) $^ -o $(TEST_EXEC)

# Run tests
.PHONY: run-test
run-test: test
	./$(TEST_EXEC)

# Clean build files
.PHONY: clean
clean:
	rm -rf $(BUILD_DIR)

# Install dependencies (if any)
.PHONY: install
install:
	@echo "No dependencies to install for C implementation"

# Help
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  all         - Build everything (default)"
	@echo "  main        - Build main program"
	@echo "  test        - Build test program"
	@echo "  run-test    - Run tests"
	@echo "  clean       - Clean build files"
	@echo "  install     - Install dependencies"
	@echo "  help        - Show this help message"