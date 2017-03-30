var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.front] = value;
  this.front++;
};

queueMethods.dequeue = function() {
  var popped = this.storage[this.back];
  delete this.storage[this.back];
  this.back++;
  return popped;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

