// Fungsi untuk menginput data barang
function inputBarang() {
    const jumlahBarang = prompt('Masukkan jumlah barang:');
    let hargaBarang = [];

    for (let i = 0; i < jumlahBarang; i++) {
        const harga = prompt(`Masukkan harga barang ke-${i + 1}:`);
        hargaBarang.push(parseFloat(harga));
    }

    return hargaBarang;
}

// Fungsi untuk menghitung total harga barang
function hitungTotalHarga(hargaBarang) {
    return hargaBarang.reduce((total, harga) => total + harga, 0);
}

// Fungsi untuk menentukan kategori diskon berdasarkan total harga
function tentukanKategoriDiskon(totalHarga) {
    if (totalHarga > 100000) {
        return 'Diskon Besar';
    } else if (totalHarga >= 50000) {
        return 'Diskon Sedang';
    } else {
        return 'Tidak Ada Diskon';
    }
}

// Fungsi untuk menampilkan hasil
function tampilkanHasil(totalHarga, jumlahBarang, kategoriDiskon, hargaBarang) {
    console.log(`Total Harga: Rp${totalHarga}`);
    console.log(`Jumlah Barang: ${jumlahBarang}`);
    console.log(`Kategori Diskon: ${kategoriDiskon}`);
    console.log('Detail Barang:');
    hargaBarang.forEach((harga, index) => {
        console.log(`Barang ke-${index + 1}: Rp${harga}`);
    });
}

// Main program
const hargaBarang = inputBarang();
const totalHarga = hitungTotalHarga(hargaBarang);
const kategoriDiskon = tentukanKategoriDiskon(totalHarga);
tampilkanHasil(totalHarga, hargaBarang.length, kategoriDiskon, hargaBarang);
