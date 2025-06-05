const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// List Mahasiswa default (anggota kelompok misalnya)
let mahasiswaList = [
  {
    name: "Isabelle Putri",
    nim: "2311104030",
    course: ["KPL", "ADPL", "Basis Data"],
    year: 2022
  },
  {
    name: "Budi Santoso",
    nim: "2311104021",
    course: ["KPL", "Kalkulus", "PBO"],
    year: 2022
  },
  {
    name: "Siti Aminah",
    nim: "2311104032",
    course: ["ADPL", "IMK", "Metodologi Penelitian"],
    year: 2022
  }
];

// GET semua mahasiswa
app.get('/api/Mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});

// GET mahasiswa by index
app.get('/api/Mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    res.json(mahasiswaList[id]);
  } else {
    res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
});

// POST tambah mahasiswa baru
app.post('/api/Mahasiswa', (req, res) => {
  const mahasiswaBaru = req.body;
  mahasiswaList.push(mahasiswaBaru);
  res.status(201).json(mahasiswaBaru);
});

// DELETE mahasiswa by index
app.delete('/api/Mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mahasiswaList.length) {
    const deleted = mahasiswaList.splice(id, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  }
});

app.listen(port, () => {
  console.log(`API Mahasiswa aktif di http://localhost:${port}`);
});
