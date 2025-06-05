const math = require('../matematikaLibraries');

// FPB
console.log("FPB dari 60 dan 45 adalah:", math.FPB(60, 45)); // Output: 15

// KPK
console.log("KPK dari 12 dan 8 adalah:", math.KPK(12, 8)); // Output: 24

// Turunan
console.log("Turunan dari x^3 + 4x^2 -12x + 9 adalah:", math.Turunan([1, 4, -12, 9])); 
// Output: 3x2 + 8x - 12

// Integral
console.log("Integral dari 4x^3 + 6x^2 -12x + 9 adalah:", math.Integral([4, 6, -12, 9])); 
// Output: x4 + 2x3 - 6x2 + 9x + C
