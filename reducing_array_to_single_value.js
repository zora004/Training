const myArray = [22, 9, 60, 12, 4, 56];
const mySum = myArray.reduce((a, v) => a + v, 0); // 163
console.log(mySum);

const mySecondArray = [1, 1, 1, 1, 1, 1];
const mySecondSum = mySecondArray.reduce((a, v) => a + v, 0);
console.log(mySecondSum);

console.log(
  myArray.reduce((a, v) => ({ s: a.s + v, c: a.c + 1 }), { s: 0, c: 0 }),
); // {s: 163, c: 6}
