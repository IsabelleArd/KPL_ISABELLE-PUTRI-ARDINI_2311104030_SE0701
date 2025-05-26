const readline = require('readline');

// Buat interface untuk input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Tampilkan prompt ke pengguna
rl.question('Masukkan satu huruf: ', (input) => {
  const huruf = input.trim().toUpperCase(); // pastikan huruf kapital

  if (huruf.length !== 1 || !/^[A-Z]$/.test(huruf)) {
    console.log('Input tidak valid. Harap masukkan satu huruf kapital.');
  } else {
    // Cek apakah huruf vokal
    if ('AIUEO'.includes(huruf)) {
      console.log(`Huruf ${huruf} merupakan huruf vokal`);
    } else {
      console.log(`Huruf ${huruf} merupakan huruf konsonan`);
    }
  }

  rl.close();
});
