class LRUCache {
  constructor(limit = 5) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return undefined;
    }

    const value = this.cache.get(key);

    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.limit) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}

const cache = new LRUCache(2);

cache.set("a", 100);
cache.set("b", 200);

console.log(cache.get("a"));

cache.set("c", 300);

console.log(cache.get("b"));
console.log(cache.get("c"));