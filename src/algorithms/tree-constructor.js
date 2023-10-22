function TreeConstructor(strArr) {
  const map = {};

  for (let i = 0; i < strArr.length; i++) {
    const temp = strArr[i].replace(/[^0-9,]/g, "").split(",");

    if (map[temp[1]]) map[temp[1]]++;
    else map[temp[1]] = 1;

    if (map[temp[1]] > 2) return false;
  }

  const arrMap = Object.values(map);
  if (arrMap.length > 1 && !arrMap.includes(2)) return false;

  return true;
}

console.log(TreeConstructor(["(10,20)", "(20,50)"]));
console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]));
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
