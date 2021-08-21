// this class represents a queue data structure
class Queue {   
    constructor() { this.elements = []; }
    enqueue(item) { this.elements.push(item); }
    dequeue() { return this.elements.shift(); }
    peek() { return !this.isEmpty() ? this.elements[0] : undefined; }
    size() { return this.elements.length; }
    isEmpty() { return this.size() == 0; }
}
