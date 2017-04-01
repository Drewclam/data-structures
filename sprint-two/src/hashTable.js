

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
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
  // search bucket

  var bucket = this._storage.get(index); //
  var isFound = false;
  for (var i = 0; i < bucket.length; i++) {
    // if any tuple[0] is k
    if (bucket[i][0] === k) {
      // make that tuple[1] = v
      bucket[i][1] = v;
      isFound = true;
    }
    // else push tuple to bucket
  }
  if (!isFound) {
    bucket.push(tuple);
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
  // search bucket index 0
  if (retrievedBucket !== undefined) {
    for (var i = 0; i < retrievedBucket.length; i++) {
      if (retrievedBucket[i][0] === k) {
        return retrievedBucket[i][1];
      }
    }
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

