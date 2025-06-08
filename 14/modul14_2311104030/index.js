// Refactor index.js tp modul 13

const express = require('express');
const { NotificationSubject, NotificationObserver } = require('./observer');

const app = express();
const PORT = 3000;

// Membuat subject (publisher)
const blogUpdate = new NotificationSubject();

// Membuat observer (subscriber)
const subscriberA = new NotificationObserver('Subscriber A');
const subscriberB = new NotificationObserver('Subscriber B');

// Menambahkan observer
blogUpdate.attach(subscriberA);
blogUpdate.attach(subscriberB);

// Endpoint utama
app.get('/', (req, res) => {
  blogUpdate.setState('Artikel baru dipublikasikan!');
  res.send('Semua subscriber telah diberi notifikasi.');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});