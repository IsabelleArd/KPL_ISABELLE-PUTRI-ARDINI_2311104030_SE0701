// Subject (Publisher)
class Subject {
  constructor() {
    this.observers = [];
    this.state = null;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  setState(newState) {
    this.state = newState;
    this.notify();
  }

  notify() {
    this.observers.forEach(observer => observer.update(this.state));
  }
}

// Observer (Subscriber)
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(state) {
    console.log(`${this.name} menerima update: ${state}`);
  }
}

module.exports = { Subject, Observer };