function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function () {
    return this.name;
 }

 function Bar (name) {
    Foo.call(this, name);
 }

 Bar.prototype = Object.create(Foo.prototype);
 Bar.prototype.constructor = Bar;
// After declare the prototype inheritance we should create Bar prototype Methods

 const a = new Bar('luis');

 for (let prop in a) {
    console.log(prop)
}

for (let prop in a) {
    if (a.hasOwnProperty(prop))
        console.log(prop)
}

 console.log('a: ', Object.create(Foo.prototype) );
 console.log('a: ', Object.create(Foo));
 console.log('a: ', a.myName());
 console.log('a: ', a instanceof Bar);
 console.log('a: ', a instanceof Foo);


 const obj = Object.create(Object.prototype);
 for (let prop in obj) {
    console.log(prop)
}
