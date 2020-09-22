const functions = require('firebase-functions');

var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const app = express();
const StatusRoute = require('./routes/Status');
const PricesRoute = require('./routes/Prices')

app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/i', StatusRoute);
app.use('/i/prices', PricesRoute);

/** all unknown URL requests managed here */
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(404).json({
        status: 404,
        message: "This requested page does not exist. Ensure that you have requested the correct URL."
    });
})

exports.app = functions.https.onRequest(app);