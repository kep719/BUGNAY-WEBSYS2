const express = require('express');
const router = express.Router();
const orderController = require('./order-controller');

router.get('/', orderController.getOrders);

module.exports = router;