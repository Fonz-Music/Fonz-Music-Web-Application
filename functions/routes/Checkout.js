let express = require("express");
let router = express.Router();
const Shop = require("../controllers/Shop");
const _ = require("lodash");

router.post("/payment-intent", (req, res) => {
  const {
    cartId
  } = req.body;
  if (!cartId) return res.status(400).json({
    message: "Missing parameters."
  });

  // if (req.cookies.hasOwnProperty('paymentIntent')) {
    // console.log(req.cookies['paymentIntent'])

  if (_.has(req.cookies, 'paymentIntent')) {
    // let { paymentIntent } = res.cookies;
    let paymentIntent = req.cookies['paymentIntent'];
    console.log({ paymentIntent })
    Shop.getPaymentIntent(paymentIntent).then((paymentIntent) => {
      res.json(paymentIntent);
    }).catch((error) => {
      console.error(error)
      res.status(error.status || 500).json(error);
    });
  } else {
    Shop.createPayment(cartId).then((paymentIntent) => {
        res.cookie('paymentIntent', paymentIntent.id, {expire: 3600000 + Date.now()}); 
        res.json(paymentIntent);
      }).catch((error) => {
        console.error(error);
        res.status(error.status || 500).json(error);
      });
  }
});

router.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'].toString();
  if (!sig || !req.rawBody) return res.status(400).json({
    message: "Missing parameters"
  });
  Shop.confirmOrder(req.rawBody, sig).then((resp) => {
    res.json(resp);
  }).catch((error) => {
    global.logger.warn(error);
    console.error(error);
    res.status(error.status || 500).json(error);
  })
});


// router.post("/pay", (req, res) => {
//   const {
//     paymentIntent,
//     paymentMethod
//   } = req.body;
//   if (!paymentIntent)
//     return res.status(400).json({
//       message: "Missing paymentID."
//     });
//   if (!paymentMethod)
//     return res.status(400).json({
//       message: "Missing paymentMethod."
//     });

//   Shop.confirmPaymentIntent(paymentIntent, paymentMethod)
//     .then(paymentIntent => {
//       res.json(paymentIntent, paymentMethod);
//     })
//     .catch(error => {
//       res.status(error.status || 500).json(error);
//     });
// });

module.exports = router;