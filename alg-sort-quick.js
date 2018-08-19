
function quickSort (array) {
    array = array.slice();
    partition(array, 0 , array.length);
    return array;
}


function partition(array, start, before) {
    const length = before - start;
    
    if (length <= 1) return;
    
    const pivotIndex = start + Math.floor(Math.random() * length);
    [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

    const pivot = array[start];
    
    let pivotRank = start;
    
    for (let index = start + 1; index < before; index++) {
        if (array[index] < pivot) {
            pivotRank++;
            [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
        }
    }

    if (pivotRank !== start) {
        [array[pivotRank], array[start]] = [array[start], array[pivotRank]]
    }

    partition(array, start, pivotRank);
    partition(array, pivotRank + 1, before);

}

var a = quickSort([4,3,2,1,6,8,10,4,2]);
a //?