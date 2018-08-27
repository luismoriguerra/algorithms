/**
 * arguments : Object : Array-like
 * 
 * Similar to an Array
 * but doesn't have all the methods because is an Object
 * It only has "length"
 * 
 * we can convert it to Array by :
 * 
 *  Array.prototype.slice.call(arguments)
 *  [].slice.call(arguments)
 * 
 *  ES6
 *  const args = Array.from(arguments);
 */

function getTotal() {
    var args = Array.prototype.slice.call(arguments);

    if (args.length === 2) return arg[0] + arg[1];

    if (args.length === 1) {
        return function(num) {
            return arg[0] + num;
        }
    }
}

function sum(x , y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return (num) => x + num;
    }
}

getTotal(10, 20);
getTotal(10)(20);
