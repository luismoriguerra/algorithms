// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    const result = [0,1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }
    return result[n];
}

function fib2(n) {
    if (n < 2) {
        return n;
    }
      
    return fib2(n - 1) + fib2(n - 2);
} 

function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn.apply(null, args);
        cache[args] = result;

        return result;
    }
}


function fib3(n) {
    if (n < 2) {
        return n;
    }
      
    return fib3(n - 1) + fib3(n - 2);
} 
//faster
fib3 = memoize(fib3);



fib(1) /*?. */
fib2(1) /*?. */
fib3(1) /*?. */

fib(2) /*?. */
fib2(2) /*?. */
fib3(2) /*?. */

fib(15) /*?. */
fib2(15) /*?. */
fib3(15) /*?. */
