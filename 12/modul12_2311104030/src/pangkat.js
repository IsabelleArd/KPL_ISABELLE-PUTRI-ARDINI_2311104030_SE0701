function cariNilaiPangkat(a, b) {
  // Validasi input
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;
  
  let hasil = 1;
  try {
    for (let i = 0; i < b; i++) {
      hasil *= a;
      // Deteksi overflow
      if (!Number.isSafeInteger(hasil)) return -3;
    }
    return hasil;
  } catch {
    return -3; // Handle overflow
  }
}

module.exports = cariNilaiPangkat;