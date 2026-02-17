let myArray = [22, 9, 60, 12, 4, 56];
const under21 = (value) => value < 21;
console.log(myArray.find(under21)); //9
console.log(myArray.findIndex(under21)); //1
const equal21 = (value) => value === 21;
console.log(myArray.find(equal21)); //undefined
console.log(myArray.findIndex(equal21)); //-1
