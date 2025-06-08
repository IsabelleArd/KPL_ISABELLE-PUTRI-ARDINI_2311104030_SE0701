class PusatDataSingleton {
  static instance = null;
  DataTersimpan = [];

  constructor() {
    if (PusatDataSingleton.instance) {
      return PusatDataSingleton.instance;
    }
    this.DataTersimpan = [];
    PusatDataSingleton.instance = this;
  }

  static getInstance() {
    if (!PusatDataSingleton.instance) {
      PusatDataSingleton.instance = new PusatDataSingleton();
    }
    return PusatDataSingleton.instance;
  }

  addSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  hapusSebuahData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    }
  }

  printSemuaData() {
    console.log("=== Data Tersimpan ===");
    this.DataTersimpan.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }

  getSemuaData() {
    return [...this.DataTersimpan]; // Return copy untuk keamanan
  }
}

module.exports = PusatDataSingleton;