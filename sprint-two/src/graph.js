
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  //declare new node set to empty object
  if (!this.nodes[value]) {
    var newNode = Node(value);
    this.nodes[value] = newNode;
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return this.nodes[value] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var edges = this.nodes[value].edges;
  for (var edgeVal in edges) {
    this.removeEdge(value, edgeVal);
  }

  // _.each(edges, function(edgeVal) {  // function(obj, iterator, context)
  //   this.removeEdge(value, edgeVal);
  // });

  delete this.nodes[value];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromVal, toVal) {
  return this.nodes[fromVal].edges[toVal] !== undefined && this.nodes[toVal].edges[fromVal] !== undefined ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromVal, toVal) {
  this.nodes[fromVal].edges[toVal] = fromVal;
  this.nodes[toVal].edges[fromVal] = toVal;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromVal, toVal) {
  delete this.nodes[fromVal].edges[toVal];
  delete this.nodes[toVal].edges[fromVal];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

// each node in graph can have a value and edges which is a collection

var Node = function(value) {
  var node = {};
  node.value = value;
  node.edges = {};
  return node;
};

var ourGraph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNode() is constant time complexity
// contains() is constnat time complexity
// removeNode() is linear time complexity
// hasEdge() is constant time complexity
// addEdge() is constant time complexity
// removeEdge() is constnat time complexity
// forEachNode() is linear time complexity
// Node() is constant time complexity

