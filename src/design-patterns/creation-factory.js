/** 
 * 
 * Factory
 * 
 */

 var RedCircle = function() {
     this.name = 'red'
 }
 var BlueCircle = function() {
     this.name = blue;
 }

 var CircleFactory = function () {

     this.create = function (color) {

         if (color === 'red') 
            return new RedCircle();
         else 
            return new BlueCircle()
     }
 }

var circleFactory = new CircleFactory();

var red = circleFactory.create('red');

