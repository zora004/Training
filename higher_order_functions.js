const myFunction = (arg1, arg2) => {
  console.log("Entering myFunction with", arg1, arg2);
  const something = arg1 + arg2;
  const toReturn = something;
  console.log("Exiting myFunction with", toReturn);
  return toReturn;
};

console.log(myFunction(2, 3)); // 5

const addLogging = (fn) => (args1, args2) => {
  console.log("Entering ", fn.name, " with ", args1, args2);
  const toReturn = fn(args1, args2);
  console.log("Exiting ", fn.name, " with ", toReturn);
  return toReturn;
};

const sum2 = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

console.log(addLogging(sum2)(22, 9));
