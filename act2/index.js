const express = require('express');
const app = express();
const customerRoutes = require('./src/customer/customer-routes');
const productRoutes = require('./src/product/product-routes');
const orderRoutes = require('./src/order/order-routes');

app.use(express.json());

app.use('/customer', customerRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);

app.listen(3000, () => {
    console.log('running on http://localhost:3000')
})