class HashTable {
  constructor() {
    this.table = [];
  }

  hash() {}
  setItem(key, value) {}
  getItem(key) {}
}

const table = new HashTable();
table.setItem("firstName", "Marcel");
table.setItem("lastName", "Oliveira");

table.getItem("firstName");
