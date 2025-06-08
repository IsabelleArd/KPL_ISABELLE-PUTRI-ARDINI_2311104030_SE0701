const express = require('express');
const { Subject, Observer } = require('./observer');

const app = express();
const PORT = 3000;

// Membuat publisher dan observer
const subject = new Subject();

const observerA = new Observer('Observer A');
const observerB = new Observer('Observer B');

subject.attach(observerA);
subject.attach(observerB);

// Route utama
app.get('/', (req, res) => {
  subject.setState('Data diperbarui!');
  res.send('Observer telah diberi notifikasi.');
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});