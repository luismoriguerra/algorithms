


Function.prototype.bind = function(thisArgs, ...fixedArgs) {
    const func = this;
    return function(...args) {
        return func.apply(thisArgs, [...fixedArgs, ...args ]);
    }
}


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        this.sayHi = this.sayHi.bind(this);
    }
    sayHi () {
        console.log(this.firstName);
    }

    sayHi_v2 = () => {
        console.log(this.firstName);      
    }
    

}

const person = new Person('luis');
const greet = person.sayHi;

greet(); //Luis