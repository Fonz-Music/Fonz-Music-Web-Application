let express = require('express');
let router = express.Router();
const Shop = require('../controllers/Shop');

router.post('/payment-intent', (req, res) => {
    const {
        items,
        currency,
        amount
    } = req.body;
    if (!items || !currency) return res.status(400).json({
        message: 'Missing parameters.'
    })
    Shop.createPaymentIntent(items, currency).then((paymentIntent) => {
        res.json(paymentIntent)
        // res.json({
            // clientSecret: paymentIntent.client_secret
        // });
    }).catch((error) => {
        res.status(error.status || 500).json(error);
    })
})

module.exports = router;