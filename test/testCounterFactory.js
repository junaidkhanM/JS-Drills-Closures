const { counterFactory } = require('../counterFactory');

const result = counterFactory();

// intial value is zero assigned to variable counter
console.log(result.increment()); // 1
console.log(result.increment()); // 2
console.log(result.increment()); // 3

console.log(result.decrement()); // 2
console.log(result.decrement()); // 1
console.log(result.decrement());  // 0