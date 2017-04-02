var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head === null && this.tail === null) { // if linked list is empty
      this.head = node;
      this.head.next = this.tail;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var popped = this.head.value;
    this.head = this.head.next;
    return popped;
  };

  list.contains = function(target) {
    var node = this.head;
    if (node.value === target) {
      return true;
    }
    while (node.next) {
      if (node.next.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addToTail and removeHead is constant time complexity
 // contains is linear time complexity
 // Node is constant time complexity


