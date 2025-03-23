// Class dengan Generic Class
class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toISOString());
    }

    printAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

// Main Program
const angka1 = 12;
const angka2 = 34;
const angka3 = 56;

// Implementasi Generic Class
const database = new SimpleDataBase();
database.addNewData(angka1);
database.addNewData(angka2);
database.addNewData(angka3);

database.printAllData();
