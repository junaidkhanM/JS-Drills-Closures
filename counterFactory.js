// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.


module.exports.counterFactory = () => {
    let counter = 0;

    let increment = () => {
        return ++counter;
    }

    let decrement = () => {
        return --counter;
    }

    return { increment, decrement};
}