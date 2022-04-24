class CustomMap {
  constructor() {
    this.collection = {};
    this.size = 0;
  }

  // add item to the Map
  set(key, value) {}

  // remove item of the Map
  delete(key) {}

  // get item by key
  get(key) {}

  // search by keys
  has(key) {
    return this.collection[key] || false;
  }

  values() {}

  // clear out the Map
  clear() {}
}
