import { performance } from "perf_hooks";

const sum2 = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

const addTiming = (fn) => (args1, args2) => {
  const output = (text, name, tStart, tEnd) =>
    console.log(`${name} - ${text} - Time: ${tEnd - tStart}ms`);
  const tStart = performance.now();
  try {
    const valueToReturn = fn(args1, args2);
    output("Normal Exit", fn.name, tStart, performance.now());
    return valueToReturn;
  } catch (e) {
    output("Error Exit", fn.name, tStart, performance.now());
    throw e;
  }
};

console.log(addTiming(sum2)(22, 9));
