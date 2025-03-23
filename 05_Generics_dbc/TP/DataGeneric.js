// Class dengan Generic Class
class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Gunakan NIM sebagai data
const dataNIM = new DataGeneric("2311104030");
dataNIM.PrintData();
