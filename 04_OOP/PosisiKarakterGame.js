// Class dengan teknik State-Based Construction
class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    tekanTombolS() {
        if (this.state === "Berdiri") {
            this.state = "Jongkok";
        } else if (this.state === "Jongkok") {
            this.state = "Tengkurap";
        }
        console.log("Karakter sekarang dalam posisi:", this.state);
    }

    tekanTombolW() {
        if (this.state === "Jongkok") {
            this.state = "Berdiri";
        } else if (this.state === "Tengkurap") {
            this.state = "Jongkok";
        } else if (this.state === "Berdiri") {
            this.state = "Terbang";
        }
        console.log("Karakter sekarang dalam posisi:", this.state);
    }

    tekanTombolX() {
        if (this.state === "Terbang") {
            this.state = "Jongkok";
            console.log("Karakter mendarat ke posisi Jongkok");
        }
    }
}

// Contoh Penggunaan
const karakter = new PosisiKarakterGame();
karakter.tekanTombolS(); // Berdiri -> Jongkok
karakter.tekanTombolS(); // Jongkok -> Tengkurap
karakter.tekanTombolW(); // Tengkurap -> Jongkok
karakter.tekanTombolW(); // Jongkok -> Berdiri
karakter.tekanTombolW(); // Berdiri -> Terbang
karakter.tekanTombolX(); // Terbang -> Jongkok
