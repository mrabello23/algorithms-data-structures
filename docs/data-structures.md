# Array

- basic data structure
- memory cells are next to each other
- list of data elements accessed by an index
- insertion order is kept
- size adjusts dynamically
- duplicate values are allowed
- they are iterable: can use for-of loop
- deletion and finding require extra work
- quite efficient at searching if the elements are ordered
- are not so efficient in some operations since you have to shift all elements when you delete or insert

# Hash table (JS object / python dictionary)

- list of unordered key-value pairs
- good for adding, removing and searching
- no keep any ordering
- warning with key collision
- they are faster than the arrays for lookups
- elements accessed via key (property name)
- keys are uniques, values are not
- If try to assign same keys as key of other object, the first one will be overriten
- JS Objects are not iterable: can use only for-in loop
- JS Object's keys have to be string, number or symbols
- JS Objects only support 1 key object
- JS Objects can store data and functionality (can have methods)

# Map

- Map objects hold a key/value pairs
- keep original order of a keys
- list of ordered key-value pairs
- objects, arrays or primitives can be used as key or value
- Map arbitrary values to other values
- keys are uniques, values are not
- if try to assign same keys as key of other object, the first one will be overriten
- they are iterable: can use for-of loop
- data storage optimized for data access
- JS Maps can store pure data but cannot have functionalities (methods are not executable)
- JS Maps was designed to be simple data stores objects
- can simplify and improve data access compared to Objects
- cannot access value elements by index (elements can accessed via method)
- methods: set, delete, clear, has (search by keys) / properties: size

# Set

- Unique unordered list of values
- duplicate values are NOT allowed
- insertion order is NOT stored
- they are iterable: can use for-of loop
- size adjusts dynamically
- cannot access value elements by index (elements can accessed via method)
- deletion and finding elements is faster than Array
- new Set([]) => convert Array to a Set
- [ ...mySet ] => comnvert Set to Array
- methods: add, delete, clear, has (search by keys) / properties: size

# Linked list

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
- can be helpul with memory management, when need to do lot of insertions at the beginning of lists
- not so useful in JS because of dynamic arrays functionality

# Stack

- Last In First Out (LIFO)
- only inserting elements at the end of a stack
- adding items to the top is called push(element)
- removing items from the top is called pop()
- used in Graph Traversal algorithm called DFS
- efficient add and remove operations (contant operations on the top element)
- process data in same order that received
- beneficial as a temporary container

# Queue

- First In First Out (FIFO)
- only insert at the end (tail), only read and remove from the front (head)
- adding items to the end (tail) is called enqueue(element)
- removing items from the front (head) is called dequeue()
- used in Graph Traversal algorithm called BFS
- efficient add and remove operations
- process data in same order that received
- beneficial as a temporary container

# Graphs

- collection of nodes with edges in between
- good to represent relationship beteween data
- the pointers are called "edges"
- edges is the connection between 2 nodes
- edges can have "weigths" (numbers) inside of them
- directed graphs: nodes are connected in one direction
- undirected graphs: nodes are connected in both directions
- cycle: when an edge points to same node

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

# Trees

- node based data structure
- kind of a hierarchycal graph connected without cycles
- data goes down in one direction (left or right)
- can keep order
- cannot contain cycles
- balanced tree: good for search, insertion and deletion
- every tree has a root node with 0 or more child nodes
- binary tree: each node has up to two nodes, usually use in-order traversal
- benefit of Tree over a Hash Table is besides doing quick search, insertion, and deletion, it can also maintain order
- traversal:
  - in-order: visit left node first, then go to the root node and then right node at last
  - pre-order: visit root node first, then go to the left node and then right node at last
  - post-order: visit left node first, then go to the right node and then root node at last

# Binary search tree

- Rule applied to all nodes: every node has up to two nodes, its left descendants are less than or equal to the current node and the right descendants are greater than the current node
- specific type of tree used to search efficiently
- each node can have at maximum 2 children (left and right)
- left has to be less than a current node (left < node)
- right has to be high than a current node (right > node)
- you know what size to search based on parent node
- not so good with unbalanced sizes

# Trie

- a form of search tree where an internal node represents a split in the key space at a predetermined location, rather than split based on the actual key values seen;
- a simple binary search trie for key values in the range 0 to 1023 would store all records with key values less than 512 on the left side of the tree, and all records with key values equal to or greater than 512 on the right side of the tree;
- a trie is always a full tree;
