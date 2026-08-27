class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  emit(event, data) {
    const listeners = this.events[event] || [];

    listeners.forEach(listener => {
      listener(data);
    });
  }
}

const emitter = new EventEmitter();

emitter.on("login", user => {
  console.log(`${user} logged in`);
});

emitter.emit("login", "Tanish");