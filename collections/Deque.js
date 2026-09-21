class Deque {
  constructor() {
    this.items = [];
  }

  addFront(value) {
    this.items.unshift(value);
  }

  addRear(value) {
    this.items.push(value);
  }

  removeFront() {
    return this.items.shift();
  }

  removeRear() {
    return this.items.pop();
  }

  peekFront() {
    return this.items[0];
  }

  peekRear() {
    return this.items[this.items.length - 1];
  }

  get size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const deque = new Deque();

deque.addRear("A");
deque.addRear("B");
deque.addFront("Start");

console.log(deque.peekFront());
console.log(deque.peekRear());
console.log(deque.removeRear());
console.log(deque.size);