const under21 = (value) => value < 21;
let myArray = [22, 9, 60, 12, 4, 56];
console.log(myArray.filter(under21)); // [9, 12, 4]
