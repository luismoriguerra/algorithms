


/**
 * 
 * Real privacy control
 * have clear public API
 * true encapsulation
 * 
 */
var Module = (function(win , doc) {

    let _privateVariable = 0;

    return {
        increase () {
            _privateVariable++;
            return _privateVariable;
        }
    }
})(window, document);

console.log(Module.increase()) // 1
console.log(Module.increase()) // 2
console.log(Module.increase()) // 3