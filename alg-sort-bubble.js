function bubbleSortConcept(array) {

    array = array.slice();

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [ array[j], array[j + 1] ] = [ array[j + 1], array[j]]
            }
        }
    }

    return array;

}

function bubbleSortOptimized(array) {
    array = array.slice();
    while(true) {
        let swapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]){
                [array[j], array[j + 1]] = [array[j+1], array[j]];
                swapped = true
        }
        if (!swapped) break;
    }
    return array;
}


function insertionSort(array) {
    array = array.slice();
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--; 
        }
        array[j + 1] = current;
    }
    return array;
}


var a = bubbleSortConcept([3,1,2,4]);
// a

var b = bubbleSortOptimized([3,1,2,4]);
// b

var c = insertionSort([4,3,2,1]);
// cm 