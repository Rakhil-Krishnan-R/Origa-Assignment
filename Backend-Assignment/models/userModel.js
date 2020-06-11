const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    noOfOrders: { type: Number, default: 0 }
});

const userModel = mongoose.model('userCollection', userSchema);

module.exports = userModel;