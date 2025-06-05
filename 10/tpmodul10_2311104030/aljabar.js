// File: aljabar.js
class Aljabar {
  static akarPersamaanKuadrat(persamaan) {
    const [a, b, c] = persamaan;
    const diskriminan = b * b - 4 * a * c;
    
    if (diskriminan < 0) {
      return []; // Tidak ada akar real
    }
    
    const x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
    const x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
    
    return [x1, x2];
  }

  static hasilKuadrat(persamaan) {
    const [a, b] = persamaan;
    const a2 = a * a;
    const _2ab = 2 * a * b;
    const b2 = b * b;
    
    return [a2, _2ab, b2];
  }
}

module.exports = Aljabar;