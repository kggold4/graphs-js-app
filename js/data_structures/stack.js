class Stack {
    constructor() { this.data = []; this.top = 0; }
    push(element) { this.data[this.top] = element; this.top++; }
    size() { return this.top; }
    peek() { return this.data[this.top -1 ]; }
    empty() { return this.top == 0; }
    pop() { return this.isEmpty() === false ? this.top = this.top -1 : undefined; }
}