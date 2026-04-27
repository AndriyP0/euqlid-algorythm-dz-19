arr1 = [11, 7.22, 43, 77, 533, 87, 2, 40.5, 1.223, 90];
arr2 = [7.22, 31.95, 533, 21, 2, 90, 43, 1];

function getIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = new Set();

  for (const num of arr1) {
    if (set2.has(num)) {
      result.add(num);
    }
  }

  return [...result];
}
console.log(getIntersection(arr1, arr2));
