
function chunk1 (arr , size, acc = []) {
    if(arr.length) {
        acc.push([...arr.splice(0, size)])
        return chunk1(arr, size, acc)
    } else {
        return acc;
    }
}

function chunk2 (arr , size) {
    let chunked = [];

    for(let element of arr) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }
    return chunked;
}

function chunk3(arr , size) {
    const chunked = [];
    let index = 0;
    while(index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
    }
    return chunked;
}

function chunk4(arr , size) {
    const chunked = [];
    while(arr.length) {
        chunked.push(arr.splice(0, size));
    }
    return chunked;
}

chunk1([1,2,3,4,5,7, 8,9, 10], 5) /*?.*/
chunk2([1,2,3,4,5,7, 8,9, 10], 5) /*?.*/
chunk3([1,2,3,4,5,7, 8,9, 10], 5) /*?.*/
chunk4([1,2,3,4,5,7, 8,9, 10], 5) /*?.*/
