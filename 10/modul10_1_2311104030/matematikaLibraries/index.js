// Fungsi FPB menggunakan Euclidean Algorithm
function FPB(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

// Fungsi KPK menggunakan rumus: (a * b) / FPB(a, b)
function KPK(a, b) {
  return Math.abs((a * b) / FPB(a, b));
}

// Fungsi Turunan
function Turunan(koefisien) {
  let hasil = [];
  for (let i = 0; i < koefisien.length - 1; i++) {
    let derajat = koefisien.length - i - 1;
    let nilai = koefisien[i] * derajat;
    if (nilai !== 0) {
      let pangkat = derajat - 1;
      hasil.push(`${nilai}${pangkat > 0 ? 'x' + (pangkat > 1 ? pangkat : '') : ''}`);
    }
  }
  return hasil.join(' + ').replace(/\+\s\-/g, '- ');
}

// Fungsi Integral
function Integral(koefisien) {
  let hasil = [];
  for (let i = 0; i < koefisien.length; i++) {
    let derajat = koefisien.length - i - 1;
    let pangkatBaru = derajat + 1;
    let nilai = koefisien[i] / pangkatBaru;
    hasil.push(`${nilai !== 1 ? nilai : ''}x${pangkatBaru > 1 ? pangkatBaru : ''}`);
  }
  hasil.push('C'); // Konstanta integrasi
  return hasil.join(' + ').replace(/\+\s\-/g, '- ');
}

// Ekspor fungsi
module.exports = {
  FPB,
  KPK,
  Turunan,
  Integral
};
