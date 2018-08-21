/**
 * Binary search is a very fundamental algorithm in Computer Science. 
 * It powers BSTs (binary search trees) which form the basis of modern databases and immutable data structures. 
 * Binary search works very much the way humans intuitively search for a name in a yellow pages directory 
 * (if you have ever seen one) or the dictionary.
 * 
 * Worst case time complexity from O(n) to O(log n).
 */

export function binarySearch (array , element, start = 0, end = array.length - 1) {

    if (end < start) return - 1;
    
    const middle = Math.floor((start + end) / 2);

    return element === array[middle] ? middle : element < array[middle] ?
        binarySearch(array, element, start, middle - 1) :
        binarySearch(array, element, middle + 1, end)
}

