const axios = require("axios");
export const Checkout = {
    data() {
        return {
            pricePlans: [{}, {}, {}, {}, {}],
            addons: {
                "shipping": {},
                "extraPackaging": {}
            },
        }
    },
    methods: {
        getPricing() {
            axios
                .get(`${this.$API_URL}/i/prices/${this.currency}`)
                .then((resp) => {
                    const coasterPricing = resp.data.coasters;
                    coasterPricing.forEach((price, key) => {
                        this.pricePlans[key] = {
                            ...price,
                            key
                        }
                    });
                    this.addons = resp.data.addons;
                    this.showPricing = true;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    }
}