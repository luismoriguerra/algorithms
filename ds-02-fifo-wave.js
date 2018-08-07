
class Queue {
    constructor() {
      this.data = [];
    }
  
    add(record) {
      this.data.unshift(record);
    }
  
    remove() {
      return this.data.pop();
    }

    peek () {
        return this.data[this.data.length - 1];
    }
  }

function weave (queueOne, queueTwo) {
    const q = new Queue();

    while (queueOne.peek() || queueTwo.peek()) {
        
        if (queueOne.peek()) {
            q.add(queueOne.remove());
        }

        if (queueTwo.peek()) {
            q.add(queueTwo.remove());
        }
    }

    return q;
}
