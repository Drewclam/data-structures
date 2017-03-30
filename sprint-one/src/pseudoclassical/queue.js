var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.front] = value;
  this.front++;
};

Queue.prototype.dequeue = function() {
  var removed = this.storage[this.back];
  delete this.storage[this.back];
  this.back++;
  return removed;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var ourQueue = new Queue();




