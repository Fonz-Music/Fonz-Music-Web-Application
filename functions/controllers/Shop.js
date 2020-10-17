'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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