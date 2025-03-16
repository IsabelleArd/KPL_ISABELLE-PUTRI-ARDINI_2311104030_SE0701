// Class dengan teknik Table-Driven
class KodeBuah {
    constructor() {
        this.dataKodeBuah = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.dataKodeBuah[namaBuah] || "Kode buah tidak ditemukan";
    }
}

// Contoh Penggunaan
const kodeBuah = new KodeBuah();
console.log("Kode buah Apel:", kodeBuah.getKodeBuah("Apel"));
console.log("Kode buah Semangka:", kodeBuah.getKodeBuah("Semangka"));
