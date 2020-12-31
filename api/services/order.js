const Message = require('../utils/messages');
const got = require('got');

module.exports = {
    getOrderData,
    cancelOrderData
};

async function getOrderData() {
    let storeHash = process.env.BC_LOCAL_STORE_HASH;
    let accessToken = process.env.BC_LOCAL_ACCESS_TOKEN;
    let ordersApi = 'https://api.bigcommerce.com/stores/' + storeHash + '/v2/orders';

    const { body } = await got.get(ordersApi, {
        headers: {
            'X-Auth-Token': accessToken
        },
        responseType: 'json'
    });
    return body;
}

async function cancelOrderData(payload) {
    let { orderId } = payload;
    let storeHash = process.env.BC_LOCAL_STORE_HASH;
    let accessToken = process.env.BC_LOCAL_ACCESS_TOKEN;
    let ordersApi = 'https://api.bigcommerce.com/stores/' + storeHash + '/v2/orders/' + orderId;
    let status = { "status_id": 5 };
    const statusObject = JSON.stringify(status);
    const { body } = await got.put(ordersApi, {
        headers: {
            'X-Auth-Token': accessToken,
            'Content-Type': 'application/json'
        },
        body: statusObject,
        responseType: 'json'
    });
    return body;
}