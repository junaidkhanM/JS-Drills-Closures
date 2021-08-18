const { cacheFunction } = require('../cacheFunction');

const cb = (num) => num * num; 


const result = cacheFunction(cb);

console.log(result(5));
console.log(result(3));
console.log(result(4));
console.log(result(5));