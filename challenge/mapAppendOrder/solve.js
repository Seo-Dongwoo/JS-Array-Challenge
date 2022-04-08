// write your codes
const inputArray = ["홍길동", "둘리", "루피"];

const answer = inputArray.map((name, idx) => ({
  name,
  order: idx + 1,
}));

console.log(answer);
