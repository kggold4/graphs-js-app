// this class represents a queue data structure
class Queue {   
    constructor() { this.elements = []; }
    enqueue(item) { this.elements.push(item); }
    dequeue() { return this.elements.shift(); }
    peek() { return !this.empty() ? this.elements[0] : undefined; }
    size() { return this.elements.length; }
    empty() { return this.size() == 0; }
}
