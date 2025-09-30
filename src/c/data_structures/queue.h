#ifndef QUEUE_H
#define QUEUE_H

#define MAX_SIZE 1000

// Array-based queue
typedef struct {
    int data[MAX_SIZE];
    int front, rear, size;
} ArrayQueue;

// Circular queue
typedef struct {
    int data[MAX_SIZE];
    int front, rear, size, capacity;
} CircularQueue;

// Priority queue (min-heap)
typedef struct {
    int data[MAX_SIZE];
    int size;
} PriorityQueue;

// Deque (double-ended queue)
typedef struct {
    int data[MAX_SIZE];
    int front, rear, size;
} Deque;

// Array Queue
ArrayQueue* create_array_queue();
void enqueue_array(ArrayQueue* queue, int data);
int dequeue_array(ArrayQueue* queue);
int front_array(ArrayQueue* queue);
int is_empty_array_queue(ArrayQueue* queue);

// Circular Queue
CircularQueue* create_circular_queue(int capacity);
void enqueue_circular(CircularQueue* queue, int data);
int dequeue_circular(CircularQueue* queue);
int is_full_circular(CircularQueue* queue);
int is_empty_circular(CircularQueue* queue);

// Priority Queue
PriorityQueue* create_priority_queue();
void enqueue_priority(PriorityQueue* pq, int data);
int dequeue_priority(PriorityQueue* pq);
void heapify_up(PriorityQueue* pq, int index);
void heapify_down(PriorityQueue* pq, int index);

// Deque
Deque* create_deque();
void push_front_deque(Deque* deque, int data);
void push_back_deque(Deque* deque, int data);
int pop_front_deque(Deque* deque);
int pop_back_deque(Deque* deque);

#endif