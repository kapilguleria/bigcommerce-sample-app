'use strict';

const status = require('../utils/status');
const { successAction, failAction } = require('../utils/response');
const Message = require('../utils/messages');
const { getOrderData } = require('../services/order');
const { cancelOrderData } = require('../services/order');

module.exports = {
    getOrder,
    cancelOrder,
};

/**************** Get Store ***********/
async function getOrder(req, res) {
    try {
        const order = await getOrderData();
        res.status(200).json(successAction(order, Message.getOrders));
    } catch(error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
}

/**************** Cancel Order ***********/
async function cancelOrder(req, res) {
    try {
        const payload = req.body;
        const result = await cancelOrderData(payload);
        res.status(200).json(successAction(result, Message.cancelOrder));
    } catch(error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
}