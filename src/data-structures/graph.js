// DATA
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// The graph
const adjencyListGraph = new Map();

// Add Nodes
const addNode = (airport) => {
  adjencyListGraph.set(airport, []);
};

// Add Edges (Undirected)
const addEdge = (origin, destination) => {
  adjencyListGraph.get(origin).push(destination);
  adjencyListGraph.get(destination).push(origin);
};

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// console.log(adjencyListGraph);
module.exports = adjencyListGraph;
