# Algorithms

- definição: sequência de passos ou instruções necessários para resolver um problema bem definido
- cada programa ou software consiste em pequenos algoritimos
- independente da sequência de passos, o resultado final deveria (na maioria das vezes) ser igual dado a mesma entrada
- Best possible solution always looking for best performance with minimum amount of code and least memory usage
- Polynomial time complexity is always better than Exponential time complexity

## Commom Algorithms

1. Logarithm (Complexity Analysis)
2. Graph Traversals (Breadth-first search BFS and Depth-first search DFS)
3. Searching Algorithms (Linear and Binary)
4. Sliding Window (String problems solving)
5. Recursion
6. Inverting a binary tree
7. Reverse a Linked List
8. Suffix Trees (String problems solving)
9. Dynamic Programming (DP)
10. Sorting Algorithms (Quick, Merge, Bubble)

# Sorting Algorithms

- Insertion Sort is best for small problem sizes or nearly-sorted data.
- Selection Sort is best when swapping items is very costly.
- Bubble Sort is similar to Insertion Sort with slightly more overhead.
- Shell Sort has low overhead and may be good for small data sets.
- Merge Sort can be excellent if using O(n) extra space is OK.
- Heap Sort is simple, fast, and sorts in-place, but it is not stable.
- Quick Sort is a good general-purpose sort with low overhead.
- Quick3 is the preferred version of Quick Sort because it is adaptive.
- Dual Pivot Quick Sort is a bit faster than the original Quick Sort.
- Why is Quick Sort so popular? It’s on average a very fast algorithm.
- Tim Sort is a blazing-fast, space-efficient, stable sorting algorithm.

https://medium.com/coding-at-dawn/sorts-in-60-seconds-speedy-javascript-interview-answers-on-sorting-acb72bdea8a2
https://www.geeksforgeeks.org/why-quick-sort-preferred-for-arrays-and-merge-sort-for-linked-lists/

# Depth-first search (dfs) graph

- traversal the graph using a stack
- fundamental method for searching relationships in a certain way and visiting nodes of any sort in a desired order
- edge-based technique
- used for finding or traversing graphs or trees in depth-ward direction
- DFS is good for things like backtracking, getting to leaf nodes in a tree, or anything where we want to prioritize going very deep into a path and exhausting possibilities before coming back
- execution begins at the root node and explores each branch before backtracking
- uses a stack data structure to remember, to get the subsequent vertex, and to start a search, whenever a dead-end appears in any iteration
- Last In First Out (LIFO) mode
- every node store only 1 child pointer
- memory space requirements is less than BFS
- "adjacency list" means each node stores its adjacent neighboors in a list
- DFS can be done iteratively using a Stack or recursively because the call stack will serve as the Stack to remember points to backtrack to
- Pull a node, process this node (if not seen) and add this children to a list

# Breadth-first search (bfs) graph

- traversal the graph using a queue
- fundamental method for searching relationships in a certain way and visiting nodes of any sort in a desired order
- vertex-based technique for finding the shortest path in the graph
- used to graph data or searching tree or traversing structures
- BFS is better for things like finding if a path exists between one node to another since it prioritizes width of search over depth and finding distance (or levels) something is away from something else
- efficiently visits and marks all the key nodes in a graph in an accurate breadthwise fashion
- selects a single node (initial or source point) in a graph and then visits all the nodes adjacent to the selected node. Once the algorithm visits and marks the starting node, then it moves towards the nearest unvisited nodes and analyses them
- First In First Out (FIFO) mode
- every node store N child pointer
- memory space requirements is higher than DFS
- it is slower than DFS
- traversal the graph in layers
- BFS is done iteratively. It uses a Queue that has a First-In-First-Out processing order
- Pull a node, process this node (if not seen) and add this children to a list

# BFS and DFS Algorithm

1. Choose the data structure based on the search (Queue to BFS / Stack to DFS)
2. Add the start node to be search
3. Remove the a node from the data structure
4. If the node has not been seen
   4.1. Mark it as seen in the "seen" hashset
   4.2. Do work on the node
5. For each of the children
   5.1. If child has not been seen (not been processed), add to the data structure
