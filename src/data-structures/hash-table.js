class HashTable {
  constructor() {
    this.table = [];
    this.size = 0;
  }

  // private method
  _hash(key, limit = 5) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % limit;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [[key, value]];
      return;
    }

    let added = false;

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        added = true;
        this.table[index][i][1] = value;
      }
    }

    if (!added) {
      this.table[index].push([key, value]);
    }
  }

  remove(key) {
    let index = this._hash(key);

    if (this.table[index].length === 1 && this.table[index][0][0] === key) {
      delete this.table[index];
      return;
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        delete this.table[index][i];
      }
    }
  }

  get(key) {
    let index = this._hash(key);
    if (!this.table[index]) return null;

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
  }

  print() {
    console.log(this.table);
  }
}

const htable = new HashTable();

htable.set("firstName", "Marcel");
htable.set("lastName", "Oliveira");
htable.set("age", "33");
htable.set("birth", "1/1/2001");
htable.set("gender", "Male");
htable.set("comments", "Abcd");

console.log(`firstName: ${htable.get("firstName")}`);
console.log(`lastName: ${htable.get("lastName")}`);
console.log(`age: ${htable.get("age")}`);
console.log(`birth: ${htable.get("birth")}`);
console.log(`gender: ${htable.get("gender")}`);
console.log(`comments: ${htable.get("comments")}`);

htable.print();

htable.remove("comments");
htable.print();
