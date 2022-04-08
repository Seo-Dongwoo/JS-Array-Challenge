// write your codes
const inputArray = [1, 40, "라매", "개발자", 51.5, "a", 88];
arr = [];

inputArray.forEach((n) => {
  if (Number(n)) {
    arr.push(n);
  }
});

console.log(arr);
