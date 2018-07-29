

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    return str.replace(/[^aeiou]/gi, '').length; /*? */
}

function vowels2 (str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }
    return count; /*? */
}

// faster
function vowels3 (str) {
    const matches = str.match(/[aeiou]/gi);
    return matches && matches.length; /*? */
}


const args = [
    // 'Why do you ask?'
    // 'Hi There!'
    'Why?'
];

vowels(...args) /*?.*/
vowels2(...args) /*?.*/
vowels3(...args) /*?.*/
