let express = require('express');
let router = express.Router();
const Shop = require('../controllers/Shop');

router.get('/:addonId', (req, res) => {
    const { addonId } = req.params;
    Shop.getAddon(addonId).then((addonInfo) => {
        res.json(addonInfo);
    }).catch((error) => {
        res.status(error.status || 500).send(error);
    })
});

router.put('/:addonId', (req, res) => {
    const { addonId } = req.params;
    const { cartId } = req.body;
    if(!cartId) return res.status(400).json({ message: "Missing cartId body parameter."});
    Shop.addAddonToCart(addonId, cartId).then((resp) => {
        res.json(resp)
    }).catch((error) => {
        console.error(error);
        res.status(error.status || 500).json(error);
    })
});

router.delete('/:addonId', (req, res) => {
    const { addonId } = req.params;
    const { cartId } = req.body;
    if(!cartId) return res.status(400).json({ message: "Missing cartId body parameter."});
    Shop.removeAddonFromCart(addonId, cartId).then((resp) => {
        res.json(resp)
    }).catch((error) => {
        res.status(error.status || 500).json(error);
    })
})

module.exports = router;