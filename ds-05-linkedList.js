
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst () {
        this.head = new Node(data, this.head);
    }

    size () {
        let counter = 0;
        let node = this.head;
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst () {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;

        let node = this.head;
        while(node) {
            if (!node.next) return node;

            node = node.next;
        }
    }

    clear () {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
    }

    removeLast () {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next) {
            previous = node;
            node = node.next
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) last.next = new Node(data);
        else this.head = new Node(data);
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while(node) {
            if (counter === index) return node;
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt (index) {
        if(!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const parent = this.getAt(index - 1);
        if (!parent || !parent.next) return;

        parent.next = parent.next.next;
    }

    insertAt(data, index) {

        if (!this.head) return this.head = new Node(data);
        
        if (index === 0) return this.head = new Node(data, this.head);

        const parent = this.getAt(index - 1);
        parent.next = new Node(data, parent.next);;
    } 

    getlastV2 () {
        return this.getAt(this.size() - 1);
    }

    insertFirst_v2(data) {
        this.insertAt(data, 0)
    }

    insertLast_v2(data) {
        this.insertAt(data, this.size() - 1);
    }

    *[Symbol.iterator] () {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}
