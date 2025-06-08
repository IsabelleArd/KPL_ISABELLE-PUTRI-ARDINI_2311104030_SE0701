// Refactor observer.js tp modul 13

// Subject: pihak yang memberi update
class NotificationSubject {
  constructor() {
    this.subscribers = [];
    this.latestState = '';
  }

  attach(subscriber) {
    this.subscribers.push(subscriber);
  }

  setState(state) {
    this.latestState = state;
    this.notifyAll();
  }

  notifyAll() {
    this.subscribers.forEach(subscriber => subscriber.update(this.latestState));
  }
}

// Observer: pihak yang menerima update
class NotificationObserver {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} menerima notifikasi: ${message}`);
  }
}

module.exports = { NotificationSubject, NotificationObserver };