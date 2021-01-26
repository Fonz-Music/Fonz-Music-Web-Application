let express = require('express');
let router = express.Router();
const Affiliate = require('../controllers/Affiliate');

/* Gets all data */
// Coupon code: David2020
// Affiliate percentage: 20%iate/referrals
router.get('/referrals', (req, res) => {
    Affiliate.getReferrals('David2020').then((output) => {
        // Do this if promise is resolved
        res.json(output);
    }).catch((error) => {
        // Do something else if error
        res.json(error)
        console.error(error)
    })
})


module.exports = router;