let express = require('express');
let router = express.Router();
const Shop = require('../controllers/Shop');


router.get('/:packageId/:currency', (req, res) => {
    // GET /i/package/{packageId}
    const { packageId, currency } = req.params;
    Shop.getPackageInformation(packageId, currency).then((resp) => {
        res.json(resp);
    }).catch((error) => {
        res.status(error.status || 500 ).send(error);
    })
});


module.exports = router;