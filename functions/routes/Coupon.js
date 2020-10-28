let express = require('express');
let router = express.Router();
const Shop = require('../controllers/Shop');

router.get('/:couponId', (req, res) => {
    const { couponId } = req.params;
    Shop.getCoupon(couponId).then((couponInfo) => {
        res.json(couponInfo);
    }).catch((error) => {
        res.status(error.status || 500).json(error);
    })
})

router.put('/:couponId', (req, res) => {
    const { couponId } = req.params;
    const { cartId } = req.body;
    if(!cartId) return res.status(400).json({ message: "Missing cartId body parameter."});
    Shop.addCouponToCart(couponId, cartId).then((resp) => {
        res.json(resp)
    }).catch((error) => {
        res.status(error.status || 500).json(error);
    })
})


module.exports = router;