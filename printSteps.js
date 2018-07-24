// slower
function printSteps1 (n) {
    for(let row = 0; row < n; row++) {
        let stair = '';

        for(let col = 0; col < n; col++) {
            if (col <= row ) {
                stair += '#'
            } else {
                stair += '.'
            }
        }
        console.log(stair)
    }
}

function printSteps2 (steps, row = 0, string = '') {
    if (steps === row) return;

    if (steps === string.length) {
        console.log(string);
        printSteps2(steps, row + 1);
        return;
    }
    
    string += string.length <= row ? '#' : '.';
    return printSteps2(steps, row, string);
}

// faster
function printSteps3(steps, count = 1) {
    if (count > steps) return;

    let string = '';
    for (let i = 1; i <= steps; i++) {
        string += i <= count ? '#': '.';
    }
    console.log(string);
    printSteps3(steps, count + 1);
}

const args = [
    5
];

printSteps1(...args) //?. $
printSteps2(...args) //?. $
printSteps3(...args) //?. $
