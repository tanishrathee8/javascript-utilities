class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value, priority) {
    this.items.push({ value, priority });

    this.items.sort((a, b) => a.priority - b.priority);
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

const queue = new PriorityQueue();

queue.enqueue("Normal task", 3);
queue.enqueue("Urgent task", 1);
queue.enqueue("Low priority task", 5);

console.log(queue.dequeue());
console.log(queue.peek());