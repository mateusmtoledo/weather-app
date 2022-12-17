class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, f) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(f);
  }

  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((f) => {
        f(data);
      });
    }
  }

  unsubscribe(eventName, f) {
    if (this[eventName].includes(f))
      this[eventName].splice(this[eventName].indexOf(f));
  }
}

const pubSub = new PubSub();

export default pubSub;
