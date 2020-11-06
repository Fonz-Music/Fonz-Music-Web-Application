const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault()
});
const db = admin.firestore();
global.admin = admin;
global.db = db;
global.functions = functions;
global.logger = global.functions.logger;

const PricingDB = db.collection('pricing');
const AddonsDB = db.collection('addons');
const CartDB = db.collection('cart');
const CouponsDB = db.collection('coupons');
const OrdersDB = db.collection('orders');

global.PricingDB = PricingDB;
global.AddonsDB = AddonsDB;
global.CartDB = CartDB;
global.CouponsDB = CouponsDB;
global.OrdersDB = OrdersDB;

var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const app = express();
const StatusRoute = require('./routes/Status');
const PricesRoute = require('./routes/Prices');
const CheckoutRoute = require('./routes/Checkout');
const RecentBuyerRoute = require('./routes/RecentBuyer');
const PackageRoute = require('./routes/Package');
const CartRoute = require('./routes/Cart');

const cors = require('cors')
app.use(cors())
app.options('*', cors())

app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/i', StatusRoute);
app.use('/i/orders', RecentBuyerRoute);
app.use('/i/prices', PricesRoute);
app.use('/i/package', PackageRoute);
app.use('/i/cart', CartRoute);

app.use(bodyParser.json({
    verify: function (req, res, buf) {
      var url = req.originalUrl;
      if (url.startsWith('/webhook')) {
         req.rawBody = buf.toString();
      }
    }
  }));
app.use('/i/checkout', CheckoutRoute);

app.use((req, res) => {
    res.send(req.url)
})

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