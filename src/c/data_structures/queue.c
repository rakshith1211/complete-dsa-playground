#include <stdio.h>
#include <stdlib.h>
#include "queue.h"

// Array Queue Implementation
ArrayQueue* create_array_queue() {
    ArrayQueue* queue = malloc(sizeof(ArrayQueue));
    queue->front = 0;
    queue->rear = -1;
    queue->size = 0;
    return queue;
}

void enqueue_array(ArrayQueue* queue, int data) {
    if (queue->size >= MAX_SIZE) return;
    queue->rear = (queue->rear + 1) % MAX_SIZE;
    queue->data[queue->rear] = data;
    queue->size++;
}

int dequeue_array(ArrayQueue* queue) {
    if (is_empty_array_queue(queue)) return -1;
    int data = queue->data[queue->front];
    queue->front = (queue->front + 1) % MAX_SIZE;
    queue->size--;
    return data;
}

int front_array(ArrayQueue* queue) {
    if (is_empty_array_queue(queue)) return -1;
    return queue->data[queue->front];
}

int is_empty_array_queue(ArrayQueue* queue) {
    return queue->size == 0;
}

// Circular Queue Implementation
CircularQueue* create_circular_queue(int capacity) {
    CircularQueue* queue = malloc(sizeof(CircularQueue));
    queue->front = 0;
    queue->rear = -1;
    queue->size = 0;
    queue->capacity = capacity > MAX_SIZE ? MAX_SIZE : capacity;
    return queue;
}

void enqueue_circular(CircularQueue* queue, int data) {
    if (is_full_circular(queue)) return;
    queue->rear = (queue->rear + 1) % queue->capacity;
    queue->data[queue->rear] = data;
    queue->size++;
}

int dequeue_circular(CircularQueue* queue) {
    if (is_empty_circular(queue)) return -1;
    int data = queue->data[queue->front];
    queue->front = (queue->front + 1) % queue->capacity;
    queue->size--;
    return data;
}

int is_full_circular(CircularQueue* queue) {
    return queue->size == queue->capacity;
}

int is_empty_circular(CircularQueue* queue) {
    return queue->size == 0;
}

// Priority Queue Implementation (Min-Heap)
PriorityQueue* create_priority_queue() {
    PriorityQueue* pq = malloc(sizeof(PriorityQueue));
    pq->size = 0;
    return pq;
}

void enqueue_priority(PriorityQueue* pq, int data) {
    if (pq->size >= MAX_SIZE) return;
    pq->data[pq->size] = data;
    heapify_up(pq, pq->size);
    pq->size++;
}

int dequeue_priority(PriorityQueue* pq) {
    if (pq->size == 0) return -1;
    int min = pq->data[0];
    pq->data[0] = pq->data[--pq->size];
    heapify_down(pq, 0);
    return min;
}

void heapify_up(PriorityQueue* pq, int index) {
    while (index > 0) {
        int parent = (index - 1) / 2;
        if (pq->data[index] >= pq->data[parent]) break;
        
        int temp = pq->data[index];
        pq->data[index] = pq->data[parent];
        pq->data[parent] = temp;
        index = parent;
    }
}

void heapify_down(PriorityQueue* pq, int index) {
    while (2 * index + 1 < pq->size) {
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        int smallest = index;
        
        if (pq->data[left] < pq->data[smallest]) smallest = left;
        if (right < pq->size && pq->data[right] < pq->data[smallest]) smallest = right;
        
        if (smallest == index) break;
        
        int temp = pq->data[index];
        pq->data[index] = pq->data[smallest];
        pq->data[smallest] = temp;
        index = smallest;
    }
}

// Deque Implementation
Deque* create_deque() {
    Deque* deque = malloc(sizeof(Deque));
    deque->front = MAX_SIZE / 2;
    deque->rear = MAX_SIZE / 2 - 1;
    deque->size = 0;
    return deque;
}

void push_front_deque(Deque* deque, int data) {
    if (deque->size >= MAX_SIZE) return;
    deque->front = (deque->front - 1 + MAX_SIZE) % MAX_SIZE;
    deque->data[deque->front] = data;
    deque->size++;
}

void push_back_deque(Deque* deque, int data) {
    if (deque->size >= MAX_SIZE) return;
    deque->rear = (deque->rear + 1) % MAX_SIZE;
    deque->data[deque->rear] = data;
    deque->size++;
}

int pop_front_deque(Deque* deque) {
    if (deque->size == 0) return -1;
    int data = deque->data[deque->front];
    deque->front = (deque->front + 1) % MAX_SIZE;
    deque->size--;
    return data;
}

int pop_back_deque(Deque* deque) {
    if (deque->size == 0) return -1;
    int data = deque->data[deque->rear];
    deque->rear = (deque->rear - 1 + MAX_SIZE) % MAX_SIZE;
    deque->size--;
    return data;
}