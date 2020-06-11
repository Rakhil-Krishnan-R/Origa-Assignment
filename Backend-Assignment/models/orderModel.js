const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: Number,
    userId: Number,
    subtotal: Number,
    date: String
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;