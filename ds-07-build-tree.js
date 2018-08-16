
class Node {

    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {

    constructor(){
        this.root = null;
    }

    traverseBF (callback) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            callback(node)
        }
    }

    traverseDF (callback) {
        const arr  = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            callback(node);
        }
    }
}


function levelWidth (root) {

    const SEPARATOR = 's';
    const queue = [root, SEPARATOR];
    const counters = [0];

    while (queue.length > 1) {
        const node = queue.shift();

        if (node === SEPARATOR) {
            counter.push(0);
            queue.push(SEPARATOR);
        } else {
            queue.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
} 
