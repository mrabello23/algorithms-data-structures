# linked list

- good to adding and removing nodes at beginning
- node based data structure
- not to good retrieving nodes and searching
- every node store the memory address of the next node
- node: atomic unit of a linked list
- node contains a value and pointer:
  - value: a simple value
  - pointer: connect to the next node of the chain
- head: first node of a linked list
- tail: last node of a linked list
- a tail doesn't have next pointer (none or null)
- unlike the arrays, the memory cells are not next to each other but spread across different cells
- benefit of Linked List over an array is that you can delete and insert elements from the beginning in one step

# array

- basic data structure
- memory cells are next to each other
- list of data elements accessed by an index
- quite efficient at searching if the elements are ordered
- are not so efficient in some operations since you have to shift all elements when you delete or insert

# hash table

- object (JS) or dictionary (Python)
- list of key-pair values
- good for adding, removing and searching
- warning with key collision
- no keep any ordering
- are faster than the arrays for lookups

# stack

- Last In First Out (LIFO)
- only inserting elements at the end of a stack
- adding items to the top is called push(param)
- removing items from the top is called pop()
- used in Graph Traversal algorithm called DFS
- efficient add and remove operations
- limited use cases
- process data in same order that received
- stacks are arrays
- beneficial as a temporary container

# queue

- First In First Out (FIFO)
- only insert at the end, only read and removed from the front
- adding items to the end is called enqueue(param)
- removing items from the front is called dequeue()
- used in Graph Traversal algorithm called BFS
- efficient add and remove operations
- limited use cases
- process data in same order that received
- queues are arrays
- beneficial as a temporary container

# graphs

- similar to linked list
- collection of nodes with edges in between
- nodes pointing to other nodes
- the pointers are called "edges"
- edges can have "weigths" (numbers) inside of them
- directed graphs: nodes are connected in one direction
- undirected graphs: nodes are connected in both directions
- good to represent relationship beteween data

# Depth-first search (dfs) graph

- traversal the graph using a stack
- edge-based technique
- used for finding or traversing graphs or trees in depth-ward direction
- execution begins at the root node and explores each branch before backtracking
- uses a stack data structure to remember, to get the subsequent vertex, and to start a search, whenever a dead-end appears in any iteration
- Last In First Out (LIFO) mode
- every node store only 1 child pointer
- memory space requirements is less than BFS

# Breadth-first search (bfs) graph

- traversal the graph using a queue
- vertex-based technique for finding the shortest path in the graph
- used to graph data or searching tree or traversing structures
- efficiently visits and marks all the key nodes in a graph in an accurate breadthwise fashion
- selects a single node (initial or source point) in a graph and then visits all the nodes adjacent to the selected node. Once the algorithm visits and marks the starting node, then it moves towards the nearest unvisited nodes and analyses them
- First In First Out (FIFO) mode
- every node store N child pointer
- memory space requirements is higher than DFS
- it is slower than DFS

# trees

- kind of a hierarchycal graph
- data goes down in one direction
- represented like a family (parents, children)
- node based data structure
- connected graph without cycles
- can keep order
- good for search, insertion and deletion
- every tree has a root node with 0 or more child nodes
- cannot contain cycles
- binary tree: each node has up to two nodes
- benefit of Tree over a Hash Table is besides doing quick search, insertion, and deletion, it can also maintain order

# binary search tree

- Rule applied to all nodes: every node has up to two nodes, its left descendants are less than or equal to the current node and the right descendants are greater than the current node
- specific type of tree used to search efficiently
- each node can have at maximum 2 children (left and right)
- left has to be less than a current node (left < node)
- right has to be high than a current node (right > node)
- you know what size to search based on parent node
- not so good with unbalanced sizes
