// Class dengan Generic Method
class Penjumlahan {
    static jumlahTigaAngka(a, b, c) {
        return a + b + c;
    }
}

// Main Program
const angka1 = 12;
const angka2 = 34;
const angka3 = 56;

// Menentukan tipe data berdasarkan digit terakhir NIM
const lastDigit = 8; // Ganti sesuai dengan NIM
let hasil;

if (lastDigit === 1 || lastDigit === 2) {
    hasil = Penjumlahan.jumlahTigaAngka(parseFloat(angka1), parseFloat(angka2), parseFloat(angka3));
} else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    hasil = Penjumlahan.jumlahTigaAngka(parseFloat(angka1), parseFloat(angka2), parseFloat(angka3));
} else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
    hasil = Penjumlahan.jumlahTigaAngka(parseInt(angka1), parseInt(angka2), parseInt(angka3));
} else {
    hasil = Penjumlahan.jumlahTigaAngka(BigInt(angka1), BigInt(angka2), BigInt(angka3));
}

console.log("Hasil Penjumlahan:", hasil);