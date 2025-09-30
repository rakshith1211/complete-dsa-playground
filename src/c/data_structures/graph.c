#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include "graph.h"

// Adjacency List Implementation
Graph* create_graph(int vertices) {
    Graph* graph = malloc(sizeof(Graph));
    graph->vertices = vertices;
    graph->array = malloc(vertices * sizeof(AdjList));
    
    for (int i = 0; i < vertices; i++) {
        graph->array[i].head = NULL;
    }
    return graph;
}

void add_edge(Graph* graph, int src, int dest, int weight) {
    AdjListNode* new_node = malloc(sizeof(AdjListNode));
    new_node->dest = dest;
    new_node->weight = weight;
    new_node->next = graph->array[src].head;
    graph->array[src].head = new_node;
}

void print_graph(Graph* graph) {
    for (int v = 0; v < graph->vertices; v++) {
        AdjListNode* current = graph->array[v].head;
        printf("Vertex %d: ", v);
        while (current) {
            printf("-> %d(%d) ", current->dest, current->weight);
            current = current->next;
        }
        printf("\n");
    }
}

// BFS Implementation
void bfs(Graph* graph, int start) {
    int visited[MAX_VERTICES] = {0};
    int queue[MAX_VERTICES];
    int front = 0, rear = 0;
    
    visited[start] = 1;
    queue[rear++] = start;
    
    printf("BFS traversal: ");
    while (front < rear) {
        int current = queue[front++];
        printf("%d ", current);
        
        AdjListNode* temp = graph->array[current].head;
        while (temp) {
            if (!visited[temp->dest]) {
                visited[temp->dest] = 1;
                queue[rear++] = temp->dest;
            }
            temp = temp->next;
        }
    }
    printf("\n");
}

// DFS Implementation
void dfs(Graph* graph, int start) {
    int visited[MAX_VERTICES] = {0};
    printf("DFS traversal: ");
    dfs_util(graph, start, visited);
    printf("\n");
}

void dfs_util(Graph* graph, int vertex, int visited[]) {
    visited[vertex] = 1;
    printf("%d ", vertex);
    
    AdjListNode* temp = graph->array[vertex].head;
    while (temp) {
        if (!visited[temp->dest]) {
            dfs_util(graph, temp->dest, visited);
        }
        temp = temp->next;
    }
}

// Dijkstra's Algorithm
void dijkstra(Graph* graph, int src) {
    int dist[MAX_VERTICES];
    int visited[MAX_VERTICES] = {0};
    
    for (int i = 0; i < graph->vertices; i++) {
        dist[i] = INT_MAX;
    }
    dist[src] = 0;
    
    for (int count = 0; count < graph->vertices - 1; count++) {
        int min_dist = INT_MAX, min_index = -1;
        
        for (int v = 0; v < graph->vertices; v++) {
            if (!visited[v] && dist[v] <= min_dist) {
                min_dist = dist[v];
                min_index = v;
            }
        }
        
        visited[min_index] = 1;
        
        AdjListNode* temp = graph->array[min_index].head;
        while (temp) {
            if (!visited[temp->dest] && dist[min_index] != INT_MAX &&
                dist[min_index] + temp->weight < dist[temp->dest]) {
                dist[temp->dest] = dist[min_index] + temp->weight;
            }
            temp = temp->next;
        }
    }
    
    printf("Shortest distances from vertex %d:\n", src);
    for (int i = 0; i < graph->vertices; i++) {
        printf("Vertex %d: %d\n", i, dist[i]);
    }
}

// Topological Sort
void topological_sort(Graph* graph) {
    int visited[MAX_VERTICES] = {0};
    int stack[MAX_VERTICES];
    int stack_top = -1;
    
    for (int i = 0; i < graph->vertices; i++) {
        if (!visited[i]) {
            topological_sort_util(graph, i, visited, stack, &stack_top);
        }
    }
    
    printf("Topological Sort: ");
    while (stack_top >= 0) {
        printf("%d ", stack[stack_top--]);
    }
    printf("\n");
}

void topological_sort_util(Graph* graph, int v, int visited[], int stack[], int* stack_top) {
    visited[v] = 1;
    
    AdjListNode* temp = graph->array[v].head;
    while (temp) {
        if (!visited[temp->dest]) {
            topological_sort_util(graph, temp->dest, visited, stack, stack_top);
        }
        temp = temp->next;
    }
    
    stack[++(*stack_top)] = v;
}

// Adjacency Matrix Implementation
GraphMatrix* create_graph_matrix(int vertices) {
    GraphMatrix* graph = malloc(sizeof(GraphMatrix));
    graph->vertices = vertices;
    
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->matrix[i][j] = 0;
        }
    }
    return graph;
}

void add_edge_matrix(GraphMatrix* graph, int src, int dest, int weight) {
    graph->matrix[src][dest] = weight;
}

void print_graph_matrix(GraphMatrix* graph) {
    printf("Adjacency Matrix:\n");
    for (int i = 0; i < graph->vertices; i++) {
        for (int j = 0; j < graph->vertices; j++) {
            printf("%d ", graph->matrix[i][j]);
        }
        printf("\n");
    }
}