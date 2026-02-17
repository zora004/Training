let myArray = [22, 9, 60, 12, 4, 56];
const under21 = (value) => value < 21;
console.log(myArray.some(under21)); // true
console.log(myArray.every(under21)); // false

const equal21 = (value) => value === 21;
console.log(myArray.some(equal21)); //false
console.log(myArray.every(equal21)); //false
