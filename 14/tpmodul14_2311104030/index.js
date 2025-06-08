// Refactor dari jurnal 2

// Import modul readline untuk input dari terminal
const readline = require("readline");

// Membuat interface untuk input/output di terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Bagian A: Menerima input nama dari user
rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!\n`);

    // Bagian B: Menampilkan angka dari 0 sampai 49
    // dengan tanda khusus untuk kelipatan 2 dan/atau 3
    console.log("=== Daftar angka 0 sampai 49 dengan aturan kelipatan ===");
    const numbers = Array.from({ length: 50 }, (_, index) => index);

    numbers.forEach((num) => {
        if (num % 2 === 0 && num % 3 === 0) {
            console.log(`${num} #$#$`); // Kelipatan 2 dan 3
        } else if (num % 2 === 0) {
            console.log(`${num} ##`);   // Hanya kelipatan 2
        } else if (num % 3 === 0) {
            console.log(`${num} $$`);   // Hanya kelipatan 3
        } else {
            console.log(num);          // Bukan kelipatan 2 atau 3
        }
    });

    // Bagian C: Meminta input angka dan mengecek apakah prima
    rl.question("\nMasukkan angka (1-10000): ", (inputAngka) => {
        const angka = parseInt(inputAngka);

        // Validasi input
        if (isNaN(angka) || angka < 1 || angka > 10000) {
            console.log("Input tidak valid. Harap masukkan angka antara 1 dan 10000.");
        } else {
            // Mengecek apakah angka merupakan bilangan prima
            if (isPrime(angka)) {
                console.log(`Angka ${angka} merupakan bilangan prima.`);
            } else {
                console.log(`Angka ${angka} bukan merupakan bilangan prima.`);
            }
        }

        rl.close(); // Menutup interface readline
    });
});

/**
 * Fungsi untuk mengecek apakah suatu angka merupakan bilangan prima
 * @param {number} num - Angka yang akan dicek
 * @returns {boolean} true jika prima, false jika bukan
 */
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}