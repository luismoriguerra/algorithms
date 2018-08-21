


// To much run time execution
export function repeatedItem (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return array[i]
        }
    }

    throw new Error('No Item repetition');
}

export function repeatedItemOptimized (array) {
    const set = new Set();
    for (const item of array) {
        if (set.has(item)) return item;
        else set.add(item)
    }
    throw new Error('No item repetition');
}

