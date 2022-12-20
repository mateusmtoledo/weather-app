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
    if (this.events[eventName].includes(f))
      this.events[eventName].splice(this.events[eventName].indexOf(f));
  }
}

const pubSub = new PubSub();

export default pubSub;
