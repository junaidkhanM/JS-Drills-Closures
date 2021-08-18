// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned


module.exports.limitFunctionCallCount = (cb, n) => {
    let count = 0;
    const func = () => {
        if (count < n) {
            count += 1;
            cb();
        } else {
            return null;
        }
    }

    return func;
}