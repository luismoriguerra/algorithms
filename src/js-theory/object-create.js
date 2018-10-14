const parent = {
    hair: 'brwn',
    getinches() {
        return this.height * 12
    }
}

const child = Object.create(parent);
console.log('child: ', child) ;
console.log('child: ', child.__proto__ === parent) ;
child.height = 6;

console.log(child.getinches())
