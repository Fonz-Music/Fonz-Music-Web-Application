'use strict';
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")("sk_test_51HCTMlKULAGg50zbU4900ETaFjtixWqbLQIzNd4FHiFYEizm3IXfHof2I6MWOjLAPXs9kYQlQB1jtctzBijzYdby00r7xPM4h7");

exports.createCart = (packageId, currency) => {
    return new Promise(async (resolve, reject) => {
        try {
            this.getPackageInformation(packageId, currency).then(async (packageInfo) => {
                const {
                    price,
                    quantity,
                    retailPrice,
                    discount
                } = packageInfo;

                const newCartRef = await global.CartDB
                    .add({
                        packageId,
                        currency,
                        price,
                        quantity,
                        retailPrice,
                        discount
                    });
                resolve(newCartRef.id);
            }).catch((error) => {
                reject(error);
            })
        } catch (error) {
            reject(error);
        }
    });
}

exports.updateCart = (packageId, currency, cartId) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log({
                cartId
            })
            const cartRef = await global.CartDB
                .doc(cartId)
                .get();
            if (!cartRef.exists) return reject({
                status: 404,
                message: "This cart does not exist."
            })
            // const cart = cartRef.data();
            this.getPackageInformation(packageId, currency).then(async (packageInfo) => {
                console.log({
                    packageInfo
                })
                const {
                    price,
                    quantity,
                    retailPrice,
                    discount
                } = packageInfo;
                const cartUpdateRef = await global.CartDB
                    .doc(cartId)
                    .update({
                        packageId,
                        currency,
                        price,
                        quantity,
                        retailPrice,
                        discount
                    })
                resolve(cartUpdateRef);
            }).catch((error) => {
                reject(error);
            })
        } catch (error) {
            reject(error);
        }
    })
}



exports.getRegionalPricing = (currency) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ref = await global.PricingDB
                .doc(currency)
                .get();
            if (!ref.exists) return reject({
                status: 404,
                message: `Currency ${currency} does not exist`
            });
            const ref2 = await global.AddonsDB
                .limit(5)
                .get();

            let addons = {};
            ref2.forEach((doc) => {
                // addons.push(doc.id, {
                // id: doc.id,
                // ...doc.data()
                // });
                addons[doc.id] = doc.data();
            })

            return resolve({
                pricing: ref.data(),
                addons
            });
        } catch (error) {
            reject(error);
        }
    });
};


exports.getPackageInformation = (packageId, currency) => {
    return new Promise(async (resolve, reject) => {
        try {
            let pricing = await this.getRegionalPricing(currency);
            pricing = pricing.pricing.pricing;
            console.log({
                pricing
            })
            pricing.forEach((packageD) => {
                if (packageD.package == packageId) return resolve(
                    packageD
                );
            });

            reject({
                message: "This package does not exist."
            })
        } catch (error) {
            reject(error);
        }
    })
}

const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client

    return 1400 + items.length;
};

exports.createPaymentIntent = (items, currency) => {
    return new Promise(async (resolve, reject) => {
        // TODO: Verify that the items provided exist and are correct price
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(items),
                currency
            });
            resolve(paymentIntent)
        } catch (error) {
            reject(error);
        }
    })
};