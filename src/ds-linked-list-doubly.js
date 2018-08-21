


export class DoublyLinkedList {
    head = undefined;
    tail = undefined; // keep the last one
    prev = undefined;

    // Add item in O(1)
    add (value) {
        const node = { value, next: undefined, prev: undefined }

        if (!this.head) this.head = node;

        if (this.tail) {
            this.tail.next = node; // Defined previous last one as Parent of the new Node
            node.prev = this.tail;
        }

        this.tail = node; // define the last Node
    }

    // fifo removal in O(1)
    dequeue () {

        if (this.head) {

            const value = this.head.value;
            this.head = this.head.next;

            if (!this.head) this.tail = undefined;
            else this.head.prev = undefined; // head doesn't have prev

            return value;
        }
    }

    // LIFO removal in O(1)
    pop () {
        if (this.tail) {
            const value = this.tail.value;
            this.tail = this.tail.prev;

            if (!this.tail) this.head = undefined;
            else this.tail.next = undefined;

            return value;
        }
    }

    // iterator over values
    *values () {
        let current = this.head;
        while(current) {
            yield current.value;
            current = current.next;
        } 
    }
}