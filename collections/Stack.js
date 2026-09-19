class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  get size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size);