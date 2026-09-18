class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  get size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

queue.enqueue("Task 1");
queue.enqueue("Task 2");
queue.enqueue("Task 3");

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.size);