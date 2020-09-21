const functions = require('firebase-functions');

var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res, next) => {
    res.json({ message: 'Fonz Music Website API', timestamp: new Date() })
});


/** all unknown URL requests managed here */
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(404).json({
        status: 404,
        message: "This requested API URL does not exist. Ensure that you have requested the correct URL."
    });
})

exports.api = functions
    .runWith({
        memory: '2GB'
    })
    .https.onRequest(app);