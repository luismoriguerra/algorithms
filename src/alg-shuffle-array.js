



function randomInt(start , before) {
    return start + Math.floor(Math.random() * (before - start));
}

/**
 *
 * For 'n' positions 
 * probability of any given item appearing at any given index
 * => 1/n
 * 
 * What we implemented here is called the modern version of the Fisher-Yates shuffle. 
 * Since it only loops through the array once, it operates in linear time that is as On time complexity
 */

export function shuffle (array) {

    array = array.slice();

    for (let i = 0; i < array.length; i++) {
        const randomChoiceIndex = randomInt(i, array.length); // reducing the length, allows the same probability to all items
        [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }

    return array;
}

for (let index = 0; index < 10; index++) {
    console.log(shuffle([4,3,2,1]));
}