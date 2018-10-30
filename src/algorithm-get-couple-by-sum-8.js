var arr = [1,2,3,5,6,7];

function couples(array){

    return array.reduce((acc, a) => {
        let b = array[array.indexOf(8 - a)];
        acc.push([a,b])
        array.splice(array.indexOf(b), 1);
        return acc;
    }, []);

}

console.log(couples(arr));
// ​​​​​[ [ 1, 7 ], [ 2, 6 ], [ 3, 5 ] ]​​​​​
