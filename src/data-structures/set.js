class CusotmSet {
  constructor() {
    this.collection = [];
    this.size = 0;
  }

  // add item to the Set
  add(element) {
    if (this.has(element)) return;

    this.collection.push(element);
    this.size++;

    return this;
  }

  // remove item of the Set
  delete(element) {
    if (!this.has(element)) return false;

    this.collection.splice(this.collection.indexOf(element), 1);
    this.size--;

    return true;
  }

  values() {
    return this.collection;
  }

  // search by keys
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // clear out the Set
  clear() {
    this.collection = [];
    this.size = 0;
  }
}

const set = new CusotmSet();
set.add(100);
set.add(200);
set.add(300);
set.add(100);
console.log(set);

set.delete(1000);
set.delete(200);
console.log(set);
