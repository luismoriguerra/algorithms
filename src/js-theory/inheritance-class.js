class Vehicle {
    isLegal() {
        return true;
    }
}

class Car extends Vehicle {
    canBeUsed() {
        return this.isLegal()
    }
}
const myCar = new Car();
console.log(myCar.canBeUsed())
console.log(Vehicle.prototype.isLegal())
console.log(Object.getPrototypeOf(myCar) === Car.prototype)
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype)

console.log(myCar instanceof Car)
console.log(myCar instanceof Vehicle)

for (let prop in myCar) {
    console.log(prop); // Empty, All methods aren't enumerable
}
