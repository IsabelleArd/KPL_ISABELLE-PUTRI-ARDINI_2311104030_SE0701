// Class dengan teknik State-Based Construction
class DoorMachine {
    constructor() {
        this.state = "Terkunci";
    }

    lock() {
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    unlock() {
        this.state = "Terbuka";
        console.log("Pintu tidak terkunci");
    }
}

// Contoh Penggunaan
const pintu = new DoorMachine();
pintu.lock();  // Output: Pintu terkunci
pintu.unlock();  // Output: Pintu tidak terkunci