#ifndef GRAPH_H
#define GRAPH_H

#define MAX_VERTICES 100

// Adjacency List representation
typedef struct AdjListNode {
    int dest;
    int weight;
    struct AdjListNode* next;
} AdjListNode;

typedef struct {
    AdjListNode* head;
} AdjList;

typedef struct {
    int vertices;
    AdjList* array;
} Graph;

// Graph operations
Graph* create_graph(int vertices);
void add_edge(Graph* graph, int src, int dest, int weight);
void print_graph(Graph* graph);
void bfs(Graph* graph, int start);
void dfs(Graph* graph, int start);
void dfs_util(Graph* graph, int vertex, int visited[]);
void dijkstra(Graph* graph, int src);
void topological_sort(Graph* graph);
void topological_sort_util(Graph* graph, int v, int visited[], int stack[], int* stack_top);

// Adjacency Matrix representation
typedef struct {
    int vertices;
    int matrix[MAX_VERTICES][MAX_VERTICES];
} GraphMatrix;

GraphMatrix* create_graph_matrix(int vertices);
void add_edge_matrix(GraphMatrix* graph, int src, int dest, int weight);
void print_graph_matrix(GraphMatrix* graph);

#endif