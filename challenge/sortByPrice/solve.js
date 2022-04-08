const inputArray = [
  {
    name: "사과",
    price: 1000,
  },
  {
    name: "수박",
    price: 5000,
  },
  {
    name: "당근",
    price: 2000,
  },
  {
    name: "참외",
    price: 10000,
  },
];

const answer = inputArray.sort((a, b) => a.price - b.price);
// a.price - b.price의 값이 양수 값인지 음수 값인지...
console.log(answer);
