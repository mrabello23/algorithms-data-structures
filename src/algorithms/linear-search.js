// Linear Time Complexity => O(n)
const linearSearch = (value, list) => {
  let found = false;
  let position = -1;
  let index = 0;

  while (!found && index < list.length) {
    if (list[index] === value) {
      found = true;
      position = index;
    } else {
      index++;
    }
  }

  return position;
};

const dataset = [1, 2, 5, 15, 2, 58, 22, 111, 34, 77];
console.log(linearSearch(15, dataset));
