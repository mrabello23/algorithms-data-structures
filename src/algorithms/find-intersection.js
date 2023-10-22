function FindIntersection(strArr) {
  const result = [];
  const arr1 = strArr[0].split(", ");
  const arr2 = strArr[1].split(", ");

  const map = {};
  arr1.forEach((n) => (map[n] = true));
  arr2.forEach((n) => {
    if (map[n]) result.push(n);
  });

  if (result.length === 0) return false;
  return result.join(",");
}

console.log(FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"]));
console.log(FindIntersection(["2, 3, 4", "3"]));
console.log(FindIntersection(["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"]));
