# Common Strategies

- Divide & Conquer
- Greedy method: problem solved in stages
- Backtracking: also called as "Brute Force" method
- Branch and Bound: useful on minimization problems
- Dynamic Programming

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

# Optimization problems (Maximization / Minimization)

- usually have a minimum or maximum constraint
- possible many feasible solutions, but just 1 optimal solution
- Common Strategies for this use-case: Greedy method, Dynamic Programming, Branch and Bound;

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
