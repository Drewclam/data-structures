var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var firstIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter + firstIndex] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter) {
      var popped = storage[firstIndex];
      delete storage[popped];
      counter--;
      firstIndex++;
      return popped;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

