const { limitFunctionCallCount } = require('../limitFunctionCallCount');

const n = 5;

const cb = () => console.log("Hii");

const result = limitFunctionCallCount(cb, n);
result();
result();
result();
result();
result();
result();