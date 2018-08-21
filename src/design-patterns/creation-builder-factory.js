

/** 
 * 
 * Builder Design Pattern
 * 
 * how jQuery$ method is a builder
 * explore the need of multiple objects
 * Discuss the many steps needed to reach the final goal
 * 
 */

 function Circle () {
    this.color = null;
 }

 Circle.prototype.color = function (color) {
     this.color = 'red';
 }
 Circle.prototype.move = function (left, top) {}
 
 Circle.prototype.get = function () {
    return this;
 }


function RedCircleBuilder () {
    this.item = new Circle();
    this.init();
}
RedCircleBuilder.prototype.init = function () {
    this.item.color('red');
}
RedCircleBuilder.prototype.get = function () {
    return this.item;
}


var CircleFactory = function () {

    this.types = {}

    this.create = function (type) {
        return new this.types[type]().get();
    }

    this.register = function(type, cls) {
        if (cls.prototype.get && cls.prototype.init) {
            this.types[type] = cls;
        }
    }
}

var circleFactory = new CircleFactory();

circleFactory.register('red', RedCircleBuilder);

var red = circleFactory.create('red');