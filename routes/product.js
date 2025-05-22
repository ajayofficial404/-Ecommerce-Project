const express = require('express');
const { getProducts, getsingleProduct } = require('../controllers/productcontroller');
const Router = express.Router();

Router.route('/product').get(getProducts);
Router.route('/product/:id').get(getsingleProduct);

module.exports = Router;