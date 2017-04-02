var BinarySearchTree = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;

  node.insert = function(value) {
    // compare the value with current nodes value
    if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }

  };

  node.contains = function(value) {
    if (this.value === value) {
      return true;
    }
    if (value > this.value && this.right) {
      return this.right.contains(value);
    } else if (value < this.value && this.left) {
      return this.left.contains(value);
    }
    return false;
  };

  node.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
  };

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 // insert() has logarithmic time complexity
 // contains() has logarithmic time complexity
 // depthFirstLog() has linear time complexity
