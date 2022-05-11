# Common Strategies

- Divide & Conquer
- Greedy method
- Backtracking
- Branch and Bound
- Dynamic Programming

## Backtracking

- also called as "Brute Force" approach
- Brute force approach tries out all the possible solutions and chooses the desired/best solutions;
- This approach is used to solve problems that have multiple solutions;
- Space state tree is a tree representing all the possible states (solution or nonsolution) of the problem from the root as an initial state to the leaf as a terminal state;
- Traversal Space state tree using Depth-First Search (Down deep and return)

```
Backtrack(x)
  if x is not a solution
    return false

  if x is a new solution
    add to list of solutions
  backtrack(expand x)
```

## Divide & Conquer (DAC)

- Divide large problems into sub-problems, solve then (sub-problems) and combine solutions to resolve the main problem;
- Sub-Problems usually resolved recursively and cannot be convert in another problem;
- Common use-cases:
  - Binary Search
  - Finding minimum and/or maximum
  - Quick Sort / Merge Sort
  - Strassen's Matrix Multiplication

```
DAC(Problem){
  if(small(Problem)) {
    Solve(Problem);
  } else {
    divide Problem into Problem1, Problem2 ... ProblemN;
    apply DAC(Problem1), DAC(Problem2) ... DAC(ProblemN);
    Combine(DAC(Problem1), DAC(Problem2) ... DAC(ProblemN));
  }
}
```

## Branch and Bound

- used to solve optimization problems
- only on minimization problems
- Space state tree is a tree representing all the possible states (solution or nonsolution) of the problem from the root as an initial state to the leaf as a terminal state;
- Traversal Space state tree using Breadth-First Search (Down by levels)

## Greedy method

- approach for solving a problem by selecting the best option available at the moment;
- does not worry whether the current best result will bring the overall optimal result;
- always goes for the local best choice to produce the global best result;
- never reverses the earlier decision even if the choice is wrong;
- It works in a top-down approach;
- problem solved in stages;

## Dynamic Programming

- technique that helps to efficiently solve a class of problems that have overlapping subproblems and optimal substructure property;
- If any problem can be divided into subproblems, which in turn are divided into smaller subproblems, and if there are overlapping among these subproblems, then the solutions to these subproblems can be saved for future reference;
- store the result of subproblems so that when their solutions are required, they are at hand and we do not need to recalculate them (called "memoization");
- memoization save time for computations of sub-problems we have already come across;
- repeatedly calculating the value of the same subproblems to find the optimum solution;
- bottom-up: By reversing the direction in which the algorithm works i.e. by starting from the base case and working towards the solution;

## Greedy Algorithms vs Dynamic Programming

- both tools for optimization problems
- Greedy algorithms look for locally optimum solutions or in other words, a greedy choice, in the hopes of finding a global optimum;
- Hence Greedy algorithms can make a guess that looks optimum at the time but becomes costly down the line and do not guarantee a globally optimum;
- Dynamic programming, on the other hand, finds the optimal solution to subproblems and then makes an informed choice to combine the results of those subproblems to find the most optimum solution;

# Optimization problems (Maximization / Minimization)

- usually have a minimum or maximum constraint
- possible many feasible solutions, but just 1 optimal solution
- Common Strategies for this use-case: Greedy method, Dynamic Programming, Branch and Bound (only minimization);

# Sorting Algorithms

## Quick Sort preferred for Arrays

- Quick Sort in its general form is an in-place sort (i.e. it doesn’t require any extra storage) whereas merge sort requires O(N) extra storage, N denoting the array size which may be quite expensive. Allocating and de-allocating the extra space used for merge sort increases the running time of the algorithm;
- Comparing average complexity we find that both type of sorts have O(NlogN) average complexity but the constants differ. For arrays, merge sort loses due to the use of extra O(N) storage space;
- Most practical implementations of Quick Sort use randomized version. The randomized version has expected time complexity of O(nLogn). The worst case is possible in randomized version also, but worst case doesn’t occur for a particular pattern (like sorted array) and randomized Quick Sort works well in practice;
- Quick Sort is also a cache friendly sorting algorithm as it has good locality of reference when used for arrays;
- Quick Sort is also tail recursive, therefore tail call optimizations is done;

## Merge Sort preferred for Linked Lists

- In case of linked lists the case is different mainly due to difference in memory allocation of arrays and linked lists. Unlike arrays, linked list nodes may not be adjacent in memory;
- Unlike array, in linked list, we can insert items in the middle in O(1) extra space and O(1) time if we are given reference/pointer to the previous node. Therefore merge operation of merge sort can be implemented without extra space for linked lists;
- In arrays, we can do random access as elements are continuous in memory. Let us say we have an integer (4-byte) array A and let the address of A[0] be x then to access A[i], we can directly access the memory at (x + i\*4). Unlike arrays, we can not do random access in linked list;
- Quick Sort requires a lot of this kind of access. In linked list to access i’th index, we have to travel each and every node from the head to i’th node as we don’t have continuous block of memory. Therefore, the overhead increases for quick sort. Merge sort accesses data sequentially and the need of random access is low;
- It uses "Divide and Conquer" strategy;
- Preferred for large size list;
- One of the fastest sort algorithm
