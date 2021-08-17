const { cacheFunction } = require('../cacheFunction');

const cb = (num) => num * num; 


const result = cacheFunction(cb);

result(5);
result(3);
result(4);
result(5);