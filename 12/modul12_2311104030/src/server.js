const express = require('express');
const path = require('path');
const cariNilaiPangkat = require('./pangkat');

const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve file statis (HTML/CSS/JS)

// API endpoint untuk pangkat
app.post('/hitung-pangkat', (req, res) => {
  const { a, b } = req.body;
  const hasil = cariNilaiPangkat(parseInt(a), parseInt(b));
  res.json({ hasil });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});