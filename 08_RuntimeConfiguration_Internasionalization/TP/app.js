const readline = require('readline');
const CovidConfig = require('./CovidConfig');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const config = new CovidConfig();

// Ubah satuan suhu (seperti di instruksi)
config.ubahSatuan();

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhuInput) => {
    const suhu = parseFloat(suhuInput);

    rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ', (hariInput) => {
        const hariDemam = parseInt(hariInput);

        let suhuNormal = false;

        if (config.satuan_suhu.toLowerCase() === 'celcius') {
            suhuNormal = (suhu >= 36.5 && suhu <= 37.5);
        }

        if (suhuNormal && hariDemam < config.batas_hari_deman) {
            console.log(config.pesan_diterima);
        } else {
            console.log(config.pesan_ditolak);
        }

        rl.close();
    });
});
