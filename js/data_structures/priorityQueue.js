// this class represents a priority queue data structure
class PriorityQueue {   
    constructor() { this.elements = []; }
    enqueue(item) { this.elements.push(item); this.elements.sort(); }
    dequeue() { return this.elements.shift(); }
    peek() { return !this.empty() ? this.elements[0] : undefined; }
    size() { return this.elements.length; }
    empty() { return this.size() == 0; }
}