let express = require('express');
let router = express.Router();

const locations = [
    ["USA", "San Francisco"],
    ["USA", "New York"],
    ["USA", "Massachusetts"],
    ["Canada", "Montreal"],
    ["Ireland", "Dublin"],
    ["Ireland", "Cork"],
    ["Ireland", "Limerick"]
]

const quantityOptions = [1, 2, 3, 3, 3, 2, 5, 10, 3, 3, 3]

const timeOptions = ["1 minute ago", "10 minutes ago", "5 minutes ago", "1 hour ago", "30 minutes ago", "2 hours ago"];

router.get('/recent', (req, res) => {
    const chosenLocation = locations[Math.floor(Math.random() * (locations.length))]
    const country = chosenLocation[0],
        state = chosenLocation[1];
    const quantity = quantityOptions[Math.floor(Math.random() * (quantityOptions.length))];
    const time = timeOptions[Math.floor(Math.random() * (timeOptions.length))];
    res.json({
        country,
        state,
        quantity,
        time
    })
})

module.exports = router;