
/**
* 
When fn() is called inside method, which was passed the function as a parameter at the global level,
this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.
Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.
Hence arguments[0]() is nothing but calling fn(). Inside fn now, 
the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.
*/
length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(callback) {
    callback(); // 10
    arguments[0](); // 2
    console.log(this.length); // 5
  }
};

obj.method(fn, 1);
//fix
obj.method(fn.bind(obj), 1)



// ######################

var hero = {
    name :'luis',
    getName: function () {
        return this.name;
    }
}

var stoleName = hero.getName;

console.log(stoleName()) // undefined
console.log(hero.getName()) // luis

// fix
var stoleName = hero.getName.bind(hero);
console.log(stoleName()) // luis
