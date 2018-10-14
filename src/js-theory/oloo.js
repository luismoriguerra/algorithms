// OLOO
const house = {
    set houseColor(color) { this.color = color }
}

const myhouse = Object.create(house);
console.log('myhouse: ', myhouse);
myhouse.houseColor = 'white';
console.log('myhouse: ', myhouse);
for(let prop in myhouse) {
    console.log(prop);

}


// Prototype
function House(color) {
    this.color = color
}

const myH = new House('white');
console.log('myH: ', myH);

