const PusatDataSingleton = require('../libs/PusatDataSingleton');

test('Singleton instance harus sama', () => {
  const instance1 = PusatDataSingleton.getInstance();
  const instance2 = PusatDataSingleton.getInstance();
  expect(instance1).toBe(instance2);
});

test('Penambahan data harus konsisten antar instance', () => {
  const instance1 = PusatDataSingleton.getInstance();
  instance1.addSebuahData("Test Data");
  
  const instance2 = PusatDataSingleton.getInstance();
  expect(instance2.getSemuaData()).toContain("Test Data");
});

test('Hapus data berpengaruh ke semua instance', () => {
  const instance1 = PusatDataSingleton.getInstance();
  instance1.addSebuahData("Data A");
  
  const instance2 = PusatDataSingleton.getInstance();
  instance2.hapusSebuahData(0);
  
  expect(instance1.getSemuaData()).not.toContain("Data A");
});