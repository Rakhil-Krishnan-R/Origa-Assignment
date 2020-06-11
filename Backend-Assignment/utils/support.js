// function to calculate no: of orders and the avg amt
const process = (orders) => {
    let totalAmt = 0;
    let noOfOrders = 0;
    orders.forEach(order => {
        totalAmt += order.subtotal;
        noOfOrders++;
    })
    const averageBillValue = parseInt(totalAmt / noOfOrders);
    return { averageBillValue, noOfOrders }
}

// function to count the total no: of orders
const totalNoOfOrders = (orders) => {
    let noOfOrders = 0;
    orders.forEach(order => {
        noOfOrders++
    })
    return noOfOrders;
}

module.exports = { process, totalNoOfOrders };