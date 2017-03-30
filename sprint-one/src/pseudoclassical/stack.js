var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  if (this.top) {
    this.top--;
    var popped = this.storage[this.top];
    delete this.storage[this.top];
    return popped;
  }
};

Stack.prototype.size = function() {
  return Object.keys(this.storage  ).length;
};

var ourStack = new Stack();
