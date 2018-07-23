
function capitalize (str) {
    return str.split(' ')
                .map(word => [ word[0].toUpperCase(), word.slice(1)].join(''))
                .join(' ')
}

function capitalize2 (str) {
    const words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

// faster
function capitalize3 (str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

capitalize('it, is ok short sentence') /*?.*/
capitalize2('it, is ok short sentence') /*?.*/
capitalize3('it, is ok short sentence') /*?.*/
