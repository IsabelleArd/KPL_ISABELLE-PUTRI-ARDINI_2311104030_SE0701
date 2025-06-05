const express = require('express');
const path = require('path');
const cariTandaBilangan = require('./tandaBilangan');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.post('/cari-tanda', (req, res) => {
  const { a } = req.body;
  const hasil = cariTandaBilangan(parseInt(a));
  res.json({ hasil });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});