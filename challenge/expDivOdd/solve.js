inputArray = [2, 4, 7, 8, 9];

let answer = inputArray
  .filter((val) => ((val * val) % 3) % 2 == 1)
  .reduce((sum, val) => sum + val, 0);

console.log(answer);
