const functions = require('firebase-functions');

var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const app = express();
const StatusRoute = require('./routes/Status');

app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/i', StatusRoute);

// app.get('/', (req, res, next) => {
//     res.json({ message: 'Fonz Music Website API', timestamp: new Date() })
// });

// app.get('/status', (req, res, next) => {
//     res.json({ message: 'Fonz Music Website API', timestamp: new Date() })
// });

/* Vue Application */
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app.use(history());
app.use(serveStatic(__dirname + '/dist'));
// app.get('**', (req, res) => {
//     res.sendFile(path.join(__dirname + '/dist/index.html'))
// });


/** all unknown URL requests managed here */
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(404).json({
        status: 404,
        message: "This requested page does not exist. Ensure that you have requested the correct URL."
    });
})

exports.app = functions.https.onRequest(app);