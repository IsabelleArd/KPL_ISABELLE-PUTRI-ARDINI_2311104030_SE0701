const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Bagian A: Menerima input nama praktikan
rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!`);

    // Bagian B: Array dengan aturan kelipatan 2 dan 3
    let numbers = Array.from({ length: 50 }, (_, index) => index);
    numbers.forEach((num) => {
        if (num % 2 === 0 && num % 3 === 0) {
            console.log(`${num} #$#$`);
        } else if (num % 2 === 0) {
            console.log(`${num} ##`);
        } else if (num % 3 === 0) {
            console.log(`${num} $$`);
        } else {
            console.log(num);
        }
    });

    // Bagian C: Meminta input angka dan mengecek bilangan prima
    rl.question("Masukkan angka (1-10000): ", (inputAngka) => {
        let angka = parseInt(inputAngka);
        if (isNaN(angka) || angka < 1 || angka > 10000) {
            console.log("Input tidak valid. Harap masukkan angka antara 1 dan 10000.");
        } else {
            if (isPrime(angka)) {
                console.log(`Angka ${angka} merupakan bilangan prima`);
            } else {
                console.log(`Angka ${angka} bukan merupakan bilangan prima`);
            }
        }
        rl.close();
    });
});

// Fungsi untuk mengecek bilangan prima
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
