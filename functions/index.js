const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const db = admin.firestore();
const config = functions.config();

global.config = config;
global.admin = admin;
global.db = db;
global.functions = functions;
global.logger = global.functions.logger;

const PricingDB = db.collection('pricing');
const AddonsDB = db.collection('addons');
const CartDB = db.collection('cart');
const CouponsDB = db.collection('coupons');
const OrdersDB = db.collection('orders');
const AffiliateDB = db.collection('affiliate');

global.PricingDB = PricingDB;
global.AddonsDB = AddonsDB;
global.CartDB = CartDB;
global.CouponsDB = CouponsDB;
global.OrdersDB = OrdersDB;
global.AffiliateDB = AffiliateDB;

var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
const StatusRoute = require('./routes/Status');
const PricesRoute = require('./routes/Prices');
const CheckoutRoute = require('./routes/Checkout');
const RecentBuyerRoute = require('./routes/RecentBuyer');
const PackageRoute = require('./routes/Package');
const CartRoute = require('./routes/Cart');
const AffiliateRoute = require('./routes/Affiliate');

const cors = require('cors')
app.use(cors())
app.options('*', cors())
app.use(cookieParser());
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

/** Middleware function to verify valid JWT and that the session ID associated with JWT is active and valid **/
function authChecker(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({
        status: 401,
        message: "Authentication token missing"
    });
    const token = authHeader.split(' ')[1],
        payload = jwt.decode(token);

    admin.auth().verifyIdToken(token)
        .then((user) => {
            res.locals.user = user;
            global.userId = user.user_id;
            global.name = "USER TEMPLATE NAME"
            global.discount = 5;
            next()
        }).catch((error) => {
            return res.status(403).json({
                status: 403,
                message: "Invalid access token has been provided",
                error
            })
        });
}

app.use(authChecker);
app.use('/i/affiliate/', AffiliateRoute);

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