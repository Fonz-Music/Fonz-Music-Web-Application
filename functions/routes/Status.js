let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        message: 'Fonz Music Web Application API',
        timestamp: new Date()
    })
});

router.get('/status', (req, res, next) => {
    res.send('okay');
});

module.exports = router;