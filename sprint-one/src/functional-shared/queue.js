var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {storage: {}, counter: 0, firstIndex: 0};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter + this.firstIndex] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter) {
    var popped = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    this.counter--;
    return popped;
  }
};

queueMethods.size = function() {
  return this.counter;
};


