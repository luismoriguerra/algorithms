
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
