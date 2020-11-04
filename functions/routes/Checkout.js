let express = require("express");
let router = express.Router();
const Shop = require("../controllers/Shop");

router.post("/payment-intent", (req, res) => {
  const { cartId } = req.body;
  if (!cartId)
    return res.status(400).json({
      message: "Missing parameters."
    });
  // const {
  // items,
  // currency
  // } = req.body;
  // if (!items || !currency) return res.status(400).json({
  // message: 'Missing parameters.'
  // })
  // const items = { "packageId": 1234 },
  // currency = "EUR",
  // amount = 100;
  Shop.createPayment(cartId)
    .then(paymentIntent => {
      res.json(paymentIntent);
      // res.json({
      // clientSecret: paymentIntent.client_secret
      // });
    })
    .catch(error => {
      res.status(error.status || 500).json(error);
    });
});

router.post("/pay", (req, res) => {
  const { paymentIntent } = req.body;
  if (!paymentIntent)
    return res.status(400).json({
      message: "Missing paymentID."
    });
  // if (!paymentMethod)
  //   return res.status(400).json({
  //     message: "Missing paymentMethod."
  //   });

  Shop.confirmPaymentIntent(paymentIntent)
    .then(paymentIntent => {
      res.json(paymentIntent);
    })
    .catch(error => {
      res.status(error.status || 500).json(error);
    });
});

module.exports = router;
