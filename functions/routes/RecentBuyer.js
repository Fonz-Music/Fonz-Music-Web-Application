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

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

router.get('/recent', (req, res) => {
    const chosenLocation = locations[Math.floor(Math.random() * (locations.length))]
    const country = chosenLocation[0],
        state = chosenLocation[1];
    const quantity = quantityOptions[Math.floor(Math.random() * (quantityOptions.length))];
    const time = timeOptions[Math.floor(Math.random() * (timeOptions.length))];
    const orderId = uuidv4();
        res.json({
            orderId,
            country,
            state,
            quantity,
            time
        })
})

module.exports = router;