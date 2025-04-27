const fs = require('fs');

class BankTransferConfig {
    constructor() {
        this.configFile = 'bank_transfer_config.json';

        if (!fs.existsSync(this.configFile)) {
            this.lang = "en";
            this.transfer = {
                threshold: 25000000,
                low_fee: 6500,
                high_fee: 15000
            };
            this.methods = ["RTO (real-time)", "SKN", "RTGS", "BI FAST"];
            this.confirmation = {
                en: "yes",
                id: "ya"
            };
            this.saveConfig();
        } else {
            this.loadConfig();
        }
    }

    loadConfig() {
        const data = fs.readFileSync(this.configFile);
        const config = JSON.parse(data);
        this.lang = config.lang;
        this.transfer = config.transfer;
        this.methods = config.methods;
        this.confirmation = config.confirmation;
    }

    saveConfig() {
        const config = {
            lang: this.lang,
            transfer: this.transfer,
            methods: this.methods,
            confirmation: this.confirmation
        };
        fs.writeFileSync(this.configFile, JSON.stringify(config, null, 2));
    }
}

module.exports = BankTransferConfig;
