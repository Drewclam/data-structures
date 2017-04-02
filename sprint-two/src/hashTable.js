

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }

  var bucket = this._storage.get(index);
  var isFound = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      isFound = true;
    }
  }
  if (!isFound) {
    bucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrievedBucket = this._storage.get(index);
  if (retrievedBucket !== undefined) {
    for (var i = 0; i < retrievedBucket.length; i++) {
      if (retrievedBucket[i][0] === k) {
        return retrievedBucket[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removedTuple = this._storage.get(index);
  this._storage.set(index, undefined);
};

var ourHashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert() has constant time complexity
// retrieve() has linear time complexity
// remove() has constant time complexity
