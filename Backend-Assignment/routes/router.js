// extrating router method from express
const router = require('express').Router();

// importing required model's
const userModel = require('../models/userModel')
const orderModel = require('../models/orderModel');

// importing required util functions
const { process, totalNoOfOrders } = require('../utils/support');

// routers
// default router page
router.get('/', (req, res) => {
    res.send(`<center><h1>Origa Backend Assignment</h1>
        <a href='http://localhost:3000/calculate'>Calculate Data<br>
        <a href='http://localhost:3000/update'>Update UserCollection</center></center>`
    )
})

// router to calculate the no: of order and average amt
router.get('/calculate', async (req, res) => {
    try {
        const users = await userModel.find();
        const arr = [];
        for (let i = 0; i < users.length; i++) {
            const { userId, name } = users[i];
            const orders = await orderModel.find({ userId });
            const { averageBillValue, noOfOrders } = process(orders);
            const obj = { userId, name, noOfOrders, averageBillValue }
            arr.push(obj);
        }
        res.send(arr);
    } catch (e) {
        res.send(e)
    }
})

// router to update user collection with no: of orders
router.get('/update', async (req, res) => {
    try {
        const users = await userModel.find();
        users.forEach(async (user) => {
            try {
                const orders = await orderModel.find({ userId: user.userId });
                const result = totalNoOfOrders(orders);
                user.noOfOrders = result;
                await user.save();
            } catch (e) {
                res.send(e);
            }
        })
        res.send({ success: true, message: "Successfully updated" })
    } catch (e) {
        res.send(e)
    }
})

module.exports = router;