/* eslint-disable promise/always-return */
let express = require('express');
let router = express.Router();
const Shop = require('../controllers/Shop');

router.get('/:currency', (req, res) => {
    const {
        currency
    } = req.params;
    Shop.getRegionalPricing(currency).then(({ pricing, addons }) => {
        res.json({ coasters: pricing.pricing, addons: addons });
    }).catch((error) => {
        res.status(error.status || 500).json(error);
    });
});



module.exports = router;