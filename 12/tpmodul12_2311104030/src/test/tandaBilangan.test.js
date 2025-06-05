const cariTandaBilangan = require('../tandaBilangan');

test('Angka negatif mengembalikan "Negatif"', () => {
  expect(cariTandaBilangan(-5)).toBe("Negatif");
});

test('Angka positif mengembalikan "Positif"', () => {
  expect(cariTandaBilangan(10)).toBe("Positif");
});

test('Angka nol mengembalikan "Nol"', () => {
  expect(cariTandaBilangan(0)).toBe("Nol");
});