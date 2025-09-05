const express = require('express')
const router = express.Router()
const productController = require('./product-controller')

router.get('/', productController.getProduct)

module.exports = router