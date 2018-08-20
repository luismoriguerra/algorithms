import { bubbleSortConcept, bubbleSortIdiomatic, selectionSort, mergeSort} from './alg-sort-bubble';

function getArray() {
    return [100, -40, 500, -124, 0, 21, 7];
}
  
function getSortedArray() {
    return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Bubble sort', () => {
    it('sorts an array', () => {
      expect(bubbleSortConcept(getArray())).toEqual(getSortedArray());
      expect(bubbleSortConcept([4,3,2,1])).toEqual([1,2,3,4]);
      
      expect(bubbleSortIdiomatic(getArray())).toEqual(getSortedArray());
      expect(bubbleSortIdiomatic([4,3,2,1])).toEqual([1,2,3,4]);

      expect(selectionSort([4,3,2,1])).toEqual([1,2,3,4]);
      expect(selectionSort([100, -40, 500, -124, 0, 21, 7])).toEqual([-124, -40, 0, 7, 21, 100, 500]);

      expect(mergeSort([4,3,2,1])).toEqual([1,2,3,4]);
      expect(mergeSort([100, -40, 500, -124, 0, 21, 7])).toEqual([-124, -40, 0, 7, 21, 100, 500]);
    });
  });