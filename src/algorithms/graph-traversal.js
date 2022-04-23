const graph = require("../data-structures/graph");
console.log(graph);

// Breadth-first search (find all possibilities)
// Linear Time Complexity => O(n)
const bfs = (origin, find, graph) => {
  const queue = [origin];
  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = graph.get(airport);

    for (const destination of destinations) {
      if (destination === find) {
        console.log(`BFS found route to ${find}`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
};

// Depth-first search (find specific with most efficiency)
// Linear Time Complexity => O(n)
const dfs = (origin, find, graph, visited = new Set()) => {
  console.log(origin);
  visited.add(origin);
  const destinations = graph.get(origin);

  for (const destination of destinations) {
    if (destination === find) {
      console.log(`DFS found route to ${find}`);
      return;
    }

    if (!visited.has(destination)) {
      console.log(destination);
      dfs(origin, find, graph, visited);
    }
  }
};

// bfs("PHX", "BKK", graph);
dfs("PHX", "BKK", graph);
