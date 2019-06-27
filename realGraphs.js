//just for the example, the nodes wouldn't actually be assigned by variables
var graphNode1 = {
  value: 'valueOfgraphNode1',
  edges: {
    'valueOfgraphNode2': graphNode2
  }
};

var graphNode2 = {
  value: 'valueOfgraphNode1',
  edges: {
    'valueOfgraphNode1': graphNode1
  }
};


// Oc
var Graph = function(value) {
  this.value = value;
  this.edges = {};
};

//danger of duplication, should add a hashing function for the key assignment
Graph.prototype.addNode = function(value) {

  this.edges[value] = new Graph(value);

  //creating the two way access
  this.edges[value].edges[this.value] = this; 
};


// O(c)
Graph.prototype.addEdge = function(node) {
  
  this.edges[node.value] = node;

  node.edges[this.value] = this;

};


// O(c)
Graph.prototype.removeEdge = function(node) {
  delete this.edges[node.value];
  delete node.edges[this.value];
};



// O(n)
Graph.prototype.removeNode = function(node) {
  for (var edge in this.edges) {
    delete edge[this.value];
  }
};


//O(c)
var graphRoot = new Graph('element');


// O(c)
Graph.prototype.hasEdge = function(node) {

  if (this[node.value] !== undefined) {
    return true;
  }

  return false;
};


// could lead to infinite loop! (if there are circular edges)
Graph.prototype.contains = function(value) {

  for (var edge in this.edges) {

    if (edge.value === value) {
      return true;
    }

    if (edge.edges.length = 1) {
      return false;

    } else {
      return edge.contains(value); // here's the tricky part
    }

  }

  return false;
};


// could lead to infinite loop! (if there are circular edges)
Graph.prototype.forEachNode = function(cb) {
  
  cb(this.value);

  if (this.edges.length = 1) { //needs testing
      return;  

  for (var edge in this.edges) { // here's the tricky part
    cb(edge.value);
  }

  
};

// forEachNode and contains can lead to infinity cycles
// using memoization of the callbacks could potentially fix this
