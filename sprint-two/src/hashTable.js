

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { // create and inserts tuple
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  // debugger;
  // if this._storage.get(index) is undefined
  if (this._storage.get(index) === undefined) {
    // then create bucket at index
    var bucket = LimitedArray(2);
    this._storage.set(index, bucket);
    bucket.set(0, tuple);
  }
  var bucket = this._storage.get(index);
  if (bucket.get(0) === undefined) {
    bucket.set(0, tuple);
  } else {
    bucket.set(1, tuple);
  }

      // else if bucket already exists at index,
      // then add to bucket

  // if (!this._storage.get(index)) {
  //   this._storage.set(index, tuple);
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get bucket at index
  var retrievedBucket = this._storage.get(index); // [ ['Andrew', 'Ilke'], ['robin', 'rebecca'] ];
  console.log(retrievedBucket);
  // search bucket index 0
  if (retrievedBucket && retrievedBucket[0][0] === k) {
    return retrievedBucket[0][1];
    // if k is at index 0 of a bucket item
      // return index 1 of that bucket item
  } else if (retrievedBucket && retrievedBucket[1][0] === k) {
    return retrievedBucket[1][1];

  }
  // searh bucket index 1
    // if k is at index 0 of a bucket item
      // return index 1 of that bucket item
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


