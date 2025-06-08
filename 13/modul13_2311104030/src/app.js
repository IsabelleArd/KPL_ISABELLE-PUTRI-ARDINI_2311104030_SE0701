const PusatDataSingleton = require('./libs/PusatDataSingleton');

function main() {
  const data1 = PusatDataSingleton.getInstance();
  const data2 = PusatDataSingleton.getInstance();

  // Tambah data
  data1.addSebuahData("Kelompok A");
  data1.addSebuahData("Asisten Reva");

  // Print dari instance berbeda
  console.log("[Data2] Sebelum hapus:");
  data2.printSemuaData();

  // Hapus data
  data2.hapusSebuahData(1); // Hapus "Asisten Reva"

  // Verifikasi
  console.log("\n[Data1] Setelah hapus:");
  data1.printSemuaData();

  // Cek count
  console.log("\nTotal data:");
  console.log(`Data1: ${data1.getSemuaData().length} item`);
  console.log(`Data2: ${data2.getSemuaData().length} item`);
}

main();