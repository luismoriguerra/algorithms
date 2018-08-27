(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x); // 1
    }
    console.log(x); // undefined
    console.log(y); // 2
})();


/**
 * 
 * var statements are hoisted (without their value initialization) 
 * to the top of the global or function scope it belongs to, 
 * even when it’s inside a with or catch block. However, 
 * the error’s identifier is only visible inside the catch block.
 */

(function () {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x /* inner */);
    }
    console.log(x);
    console.log(y);
})();
 //###########


var x = 21;
var girl = function () {
    console.log(x); // undefined
    var x = 20;
};
girl ();

//##############


var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}