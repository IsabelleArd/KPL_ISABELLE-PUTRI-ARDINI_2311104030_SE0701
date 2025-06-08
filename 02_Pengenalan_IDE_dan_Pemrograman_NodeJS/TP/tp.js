const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class CharacterChecker {
    constructor(char) {
        this.char = char.toUpperCase(); // Pastikan huruf selalu dalam huruf besar
        this.vowels = ["A", "I", "U", "E", "O"];
    }

    checkCharacter() {
        if (this.vowels.includes(this.char)) {
            console.log(`Huruf ${this.char} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${this.char} merupakan huruf konsonan`);
        }
    }
}

class EvenNumberArray {
    constructor() {
        this.evenNumbers = [2, 4, 6, 8, 10];
    }

    printEvenNumbers() {
        this.evenNumbers.forEach((num, index) => {
            console.log(`Angka genap ${index + 1} : ${num}`);
        });
    }
}

// Meminta input dari pengguna
rl.question("Masukkan satu huruf: ", (inputChar) => {
    const charChecker = new CharacterChecker(inputChar);
    charChecker.checkCharacter();

    const evenArray = new EvenNumberArray();
    evenArray.printEvenNumbers();

    rl.close(); // Menutup interface setelah selesai
});
