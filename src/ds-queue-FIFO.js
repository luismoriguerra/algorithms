// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Average runtime of O(n)
export class Queue {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.unshift(item)
    }

    remove() {
        this.data.pop();
    }

}

// Keeping the Index
// Less Operation cost
// O(1) operation cost
export class Queue_PRO {

    data = Object.create(null);
    lastDequeuedIndex = 0;
    nextEnqueuedIndex = 0;

    enqueue(item) {
        this.data[this.nextEnqueuedIndex] = item;
        this.nextEnqueuedIndex++;
    }

    dequeue() {
        if (this.lastDequeuedIndex !== this.nextEnqueuedIndex) {
            const dequeued = this.data[this.lastDequeuedIndex];
            delete this.data[this.lastDequeuedIndex];
            this.lastDequeuedIndex++;
            return dequeued;
        }
    }

    size() {
        return this.nextEnqueuedIndex - this.lastDequeuedIndex;
    }
}