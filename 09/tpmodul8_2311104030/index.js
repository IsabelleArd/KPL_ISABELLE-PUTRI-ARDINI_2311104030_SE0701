const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Data mahasiswa default
let mahasiswa = [
  { name: "Isabelle Putri", nim: "2311104030" },
  { name: "Budi Santoso", nim: "2311104031" },
  { name: "Siti Aminah", nim: "2311104032" }
];

// GET semua mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswa);
});

// GET mahasiswa berdasarkan index
app.get('/api/mahasiswa/:index', (req, res) => {
  const idx = parseInt(req.params.index);
  if (idx >= 0 && idx < mahasiswa.length) {
    res.json(mahasiswa[idx]);
  } else {
    res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }
});

// POST tambah mahasiswa
app.post('/api/mahasiswa', (req, res) => {
  const dataBaru = req.body;
  mahasiswa.push(dataBaru);
  res.status(201).json(dataBaru);
});

// DELETE mahasiswa berdasarkan index
app.delete('/api/mahasiswa/:index', (req, res) => {
  const idx = parseInt(req.params.index);
  if (idx >= 0 && idx < mahasiswa.length) {
    const deleted = mahasiswa.splice(idx, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
