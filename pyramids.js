

function pyramid1 (n) {
    const cols = 2 * n - 1;
    const print = (row) => {
        const repeater = Math.floor(cols/2) - row + 1;
        const spaces = '.'.repeat(repeater)
        return spaces + ('#'.repeat( 2 * row - 1)) + spaces;
    }
    for (let row = 1; row <= n; row++) {
        let step = print(row); 
        console.log(step)
    }
}

// faster
function pyramid2(n) {
    const maxColumns = 2 * n - 1;
    const midpoint = Math.floor((maxColumns) / 2);
    for(let row = 0; row < n; row++) {
        
        const minPoundPosition = midpoint - row;
        const maxPoundPosition = midpoint + row;
        let level = '';

        for (let column = 0; column < maxColumns; column++) {
            const isPound = minPoundPosition <= column && column <= maxPoundPosition
            level += (isPound) ? '#' : '.';
           
        }
        console.log(level)
    }
}

function pyramid3(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    const maxColumns = 2 * n - 1;
    
    if (level.length === maxColumns) {
        console.log(level);
        return pyramid3(n, row + 1);
    }

    const midpoint = Math.floor( maxColumns / 2);
    const minPoundPosition = midpoint - row;
    const maxPoundPosition = midpoint + row;
    const currentColumnIndex = level.length
    let add;

    if (minPoundPosition <= currentColumnIndex && currentColumnIndex <= maxPoundPosition ) {
        add = '#';
    } else {
        add = '.'
    }
    pyramid3(n, row, level + add )

}



const args = [10];
// pyramid1(...args) /*?.*/
pyramid1(...args) /*?.*/
pyramid2(...args) /*?.*/
pyramid3(...args) /*?.*/
