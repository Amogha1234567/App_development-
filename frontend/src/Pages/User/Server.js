// server.js

const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY_ID',
  key_secret: 'YOUR_RAZORPAY_KEY_SECRET',
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount,
    currency: 'INR',
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const crypto = require('crypto');
  const hmac = crypto.createHmac('sha256', 'YOUR_RAZORPAY_KEY_SECRET');
  hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
  const generated_signature = hmac.digest('hex');

  if (generated_signature === razorpay_signature) {
    res.json({ verified: true });
  } else {
    res.json({ verified: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
