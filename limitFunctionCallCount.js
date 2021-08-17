// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned


module.exports.limitFunctionCallCount = (cb, n) => {
    const func = () => {
        for (let i = 0; i < n; i++) {
            cb();
        }
    }

    return func;
}