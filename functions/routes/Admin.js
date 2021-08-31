let express = require('express');
let router = express.Router();
const rateLimit = require("express-rate-limit");
const jwt = require('jsonwebtoken');

router.use(rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 10 // limit each IP to 10 requests per windowMs
}));

router.use((req, res, next) => {
    try {
        const { authToken } = req.body;
        if(authToken !== process.env.ADMIN_AUTH_TOKEN) {
            res.send({ message: "Could not be completed" })
        } else {
            next();
        }

    } catch(error) {
        res.send({ message: "Could not be completed", error: error.toString()})
    }
});

router.post('/token', (req, res) => {
    const accessToken = jwt.sign({ admin: true }, process.env.JWT_PRIVATE_KEY, { algorithm: 'HS512', expiresIn: '30mins'},);
    res.send({ accessToken });
})

module.exports = router;