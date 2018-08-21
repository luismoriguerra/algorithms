export function bubbleSortConcept(array) {

    array = array.slice();

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ]
            }
        }
    }

    return array;
}

export function bubbleSortIdiomatic (array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) { // shrink the search loop
            if (array[j] > array[j + 1]) {
                const lesser = array[j + 1]; 
                array[j + 1] = array[j]; // move the higher to the right
                array[j] = lesser;
            }
        }
    }
    return array;
}


export function bubbleSortOptimized(array) {
    array = array.slice();
    while(true) {
        let swapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true
            }
            if (!swapped) break;
        }
    return array;
    }
}

export function insertionSort(array) {
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

export function selectionSort (array) {
    for (let i = 0; i < array.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            let lesser = array[indexOfMin];
            array[indexOfMin] = array[i];
            array[i] = lesser;
        }
    }
    return array;
}


export function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const center = Math.floor(array.length / 2);
    const left = array.slice(0, center);
    const right = array.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

export function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

export function merge_v2(left, right) {
    const array = [];
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex + rIndex < left.left + right.length) {
        const lItem = left[lIndex];
        const rItem = left[rIndex];
        if (lItem == null) {
            array.push(rItem);
            rIndex++;
        } else if (rItem == null) {
            array.push(lItem);
            lIndex++;
        } else if (lItem < rItem) {
            array.push(lItem);
            lIndex++;
        } else {
            array.push(rItem);
            rIndex++;
        }
    }
    return array;
}