


export function atoiRegex(str) {
    
    if (/^\-?([0-9]+)$/.test(str)) return parseInt(str)

    return NaN;
}

export function atoi(str) {

    const zeroCode = '0'.charCodeAt(0);
    
    let sign = 1;
    
    if (str[0] === '-') {
        str = str.substring(1);
        sign = -1;
    }
    
    let acc = 0;

    for (const char of str) {
        
        const number = char.charCodeAt(0) - zeroCode;
        const isNumber = 0 <= number && number <= 9;

        if (isNumber) {
            acc = acc * 10 + number;
        }
    }

    return sign * acc;
}

console.log(atoi('1239999'))
console.log(atoi('-123'))