

/** 
 * 
 * Creation Abstract Factory Design Pattern
 *  
 *  Allow extend functionality
 * */

function RedCircle() { }
RedCircle.prototype.create = function() {
    this.name = 'red';
    return this;
}

function BlueCircle() { }
BlueCircle.prototype.create = function() {
    this.name = 'blue';
    return this;
}

var CircleFactory = function () {

    this.types = {}

    this.create = function (type) {
        return new this.types[type]().create();
    }

    this.register = function(type, cls) {
        if (cls.prototype.create) {
            this.types[type] = cls;
        }
    }
}

var circleFactory = new CircleFactory();

circleFactory.register('red', RedCircle);
circleFactory.register('blue', BlueCircle);

var red = circleFactory.create('red');
