const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault()
});
const db = admin.firestore();
global.admin = admin;
global.db = db;

const PricingDB = db.collection('pricing');

global.PricingDB = PricingDB;

var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const app = express();
const StatusRoute = require('./routes/Status');
const PricesRoute = require('./routes/Prices');
const CheckoutRoute = require('./routes/Checkout');

const cors = require('cors')
app.use(cors())
app.options('*', cors())

app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/i', StatusRoute);
app.use('/i/prices', PricesRoute);
app.use('/i/checkout', CheckoutRoute);

/** all unknown URL requests managed here */
app.use((req, res) => {
    res.status(404).json({
        status: 404,
        message: "This requested page does not exist. Ensure that you have requested the correct URL."
    });
});
app.use((err, req, res) => {
    res.status(404).json({
        status: 404,
        message: "This requested page does not exist. Ensure that you have requested the correct URL."
    });
});

exports.app = functions.https.onRequest(app);