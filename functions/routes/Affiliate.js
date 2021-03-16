let express = require('express');
let router = express.Router();
const Affiliate = require('../controllers/Affiliate');

/* Gets all data */
// Coupon code: David2020
// Affiliate percentage: 20%iate/referrals
router.get('/referrals', (req, res) => {
    Affiliate.getReferrals().then((pizza) => {
        // Do this if promise is resolved
        res.json(pizza);
    }).catch((error) => {
        // Do something else if error
        res.json(error)
        console.error(error)
    })
})


// /i/affiliate/coupon

/* Generates a coupon code for affiliate user */

router.post('/coupon', (req, res) => {
    let {
        couponCode
    } = req.body;

    Affiliate.createCoupon(couponCode).then((resp) => {
        res.json(resp)
    }).catch((error) => {
        res.status(500).json({
            error
        })
    })
})

//i/affiliate/profile

/* Generates a profile for the affiliate user */

router.post('/profile', (req, res) => {
    let {
        displayName,
        platforms,
        following,
        source
    } = req.body;

    Affiliate.createAffiliateProfile(displayName, following, platforms, source).then((response) => {
        res.json(response)
    }).catch((error) => {
        res.status(500).json({
            error
        })
    })
})


/* Get profile at /i/affiliate/profile */
router.get('/profile', (req, res) => {

    Affiliate.getAffiliateProfileInfo().then((profile) => {
        //if (!profile) res.status(404).json({
        //    message: 'You do not have an affiliate profile'
        //});
        res.json(profile);
    }).catch((error) => {
        res.status(500).json({
            error
        })
    })
})

/* Get current coupon */
router.get('/coupon/:couponCode', (req, res) => {
    const {
        couponCode
    } = req.params;

    Affiliate.getCoupon(couponCode).then((output) => {
        if (!output) res.status(404).json({
            message: 'This coupon code does NOT exist'
        });
        res.json(output);
    }).catch((error) => {
        res.status(500).json({
            error
        })
        console.error(error)
    })
})

// fonzmusic.com/i/affiliate/daily
/* Returns accumulated daily revenue from referrals (to be graphed) */
router.get('/daily', (req, res) => {
    Affiliate.getDailyRevenue().then((sales) => {
        res.json(sales)
    }).catch((error) => {
        res.status(500).json({
            error
        })
    })
})



module.exports = router;