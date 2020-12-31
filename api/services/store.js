const Message = require('../utils/messages');
const got = require('got');

module.exports = {
    getStoreData,
    getStoreSummaryData
};

async function getStoreData() {
    let storeHash = process.env.BC_LOCAL_STORE_HASH;
    let accessToken = process.env.BC_LOCAL_ACCESS_TOKEN;
    let storeApi = 'https://api.bigcommerce.com/stores/' + storeHash + '/v2/store';
    const { body } = await got.get(storeApi, {
        headers: {
            'X-Auth-Token': accessToken
        },
        responseType: 'json'
    });
    if (body) {
        return body;
    } else {
        throw new Error (Message.apiNotWorking);
    }
}

async function getStoreSummaryData() {
    let storeHash = process.env.BC_LOCAL_STORE_HASH;
    let accessToken = process.env.BC_LOCAL_ACCESS_TOKEN;
    let storeApi = 'https://api.bigcommerce.com/stores/' + storeHash + '/v3/catalog/summary';
    const { body } = await got.get(storeApi, {
        headers: {
            'X-Auth-Token': accessToken
        },
        responseType: 'json'
    });
    if (body) {
        return body;
    } else {
        throw new Error (Message.apiNotWorking);
    }
}