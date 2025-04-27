const readline = require('readline');
const BankTransferConfig = require('./BankTransferConfig');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const config = new BankTransferConfig();

function askAmount() {
    if (config.lang === "en") {
        rl.question('Please insert the amount of money to transfer: ', handleAmount);
    } else {
        rl.question('Masukkan jumlah uang yang akan di-transfer: ', handleAmount);
    }
}

function handleAmount(amountInput) {
    const amount = parseFloat(amountInput);
    let transferFee = 0;

    if (amount <= config.transfer.threshold) {
        transferFee = config.transfer.low_fee;
    } else {
        transferFee = config.transfer.high_fee;
    }

    const total = amount + transferFee;

    if (config.lang === "en") {
        console.log(`Transfer fee = ${transferFee}`);
        console.log(`Total amount = ${total}`);
    } else {
        console.log(`Biaya transfer = ${transferFee}`);
        console.log(`Total biaya = ${total}`);
    }

    chooseMethod();
}

function chooseMethod() {
    if (config.lang === "en") {
        console.log("Select transfer method:");
    } else {
        console.log("Pilih metode transfer:");
    }

    config.methods.forEach((method, index) => {
        console.log(`${index + 1}. ${method}`);
    });

    rl.question('Choose your transfer method (input number): ', confirmTransaction);
}

function confirmTransaction() {
    const confirmationText = (config.lang === "en") ? config.confirmation.en : config.confirmation.id;

    if (config.lang === "en") {
        rl.question(`Please type "${confirmationText}" to confirm the transaction: `, handleConfirmation);
    } else {
        rl.question(`Ketik "${confirmationText}" untuk mengkonfirmasi transaksi: `, handleConfirmation);
    }
}

function handleConfirmation(input) {
    const confirmationText = (config.lang === "en") ? config.confirmation.en : config.confirmation.id;

    if (input.trim().toLowerCase() === confirmationText.toLowerCase()) {
        if (config.lang === "en") {
            console.log("The transfer is completed");
        } else {
            console.log("Proses transfer berhasil");
        }
    } else {
        if (config.lang === "en") {
            console.log("Transfer is cancelled");
        } else {
            console.log("Transfer dibatalkan");
        }
    }

    rl.close();
}

askAmount();
