let express = require('express');
const { app } = require('firebase-admin');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        prices: [
            {
                quantity: 1,
                price: 20
            },
            {
                quantiy: 10,
                price: 150
            }
        ]
    })
})

module.exports = router;