

/** 
 * 
 * Prototype Design Patter
 * 
 * Efficient with the use of memory to reuse Methods
 * Easy of implementation
 *  
 * 
 * */

function clone (src, out) {
    for (const attr in src.prototype) {
        out.prototype[attr] = src.prototype[attr];
    }
}

function Rec() {}

clone (Circle, React);


/**
 * 
 *  Prototype Herencia
 * 
 */

var Shape = function () {
    //
}
Shape.prototype.method = function () {}

var Rectangle = function () {
    Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;