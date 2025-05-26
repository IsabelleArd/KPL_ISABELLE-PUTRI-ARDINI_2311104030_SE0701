class CharacterChecker {
    constructor(char) {
        this.char = char;
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

const inputChar = prompt("Masukkan satu huruf: ").toUpperCase();
const charChecker = new CharacterChecker(inputChar);
charChecker.checkCharacter();

