class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.#bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minimum = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.#bubbleDown();

    return minimum;
  }

  peek() {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }

  #bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) {
        break;
      }

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent]
      ];

      index = parent;
    }
  }

  #bubbleDown() {
    let index = 0;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if (
        left < this.heap.length &&
        this.heap[left] < this.heap[smallest]
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right] < this.heap[smallest]
      ) {
        smallest = right;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index]
      ];

      index = smallest;
    }
  }
}

const heap = new MinHeap();

heap.insert(5);
heap.insert(2);
heap.insert(8);
heap.insert(1);

console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.peek());