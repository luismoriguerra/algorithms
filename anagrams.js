function buildMap(str) {
    const map = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        map[char] = map[char] + 1 || 1;
    }
    return map;
}

function anagrams (stringA , stringB) {
    const aMap = buildMap(stringA);/*?*/
    const bMap = buildMap(stringB);/*?*/

    if(Object.keys(aMap).length !== Object.keys(bMap).length) {  
        return false;
    }

    for(let char in aMap) {
        if (aMap[char] !== bMap[char]) {
            return false;
        }
    }

    return true;
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagram2 (a ,b ) {
    return cleanString(a) === cleanString(b); 
}

anagrams('Rail! safety', 'fairy tales') /*?*/
anagrams('Rail! safety', 'fairy tales') /*?.*/

anagram2('Rail! safety', 'fairy tales') /*?*/
anagram2('Rail! safety', 'fairy tales') /*?.*/
