class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID 5 digit
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count < 0 || count > 25000000) {
            throw new Error("Play count harus antara 0 dan 25.000.000.");
        }
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// Panggil method utama
const video = new SayaTubeVideo("Tutorial Design By Contract – Isabelle Putri Ardini");
video.IncreasePlayCount(5000);
video.PrintVideoDetails();
