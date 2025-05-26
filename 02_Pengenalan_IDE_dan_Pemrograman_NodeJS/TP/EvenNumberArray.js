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

const evenArray = new EvenNumberArray();
evenArray.printEvenNumbers();
