'use strict';

const status = require('../utils/status');
const { successAction, failAction } = require('../utils/response');
const Message = require('../utils/messages');
const { getStoreData } = require('../services/store');
const { getStoreSummaryData } = require('../services/store');

module.exports = {
    getStore,
    getStoreSummary
};

/**************** Get Store ***********/
async function getStore(req, res) {
    try {
        const store = await getStoreData();
        res.status(200).json(successAction(store, Message.getStore));
    } catch(error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
}

/**************** Get Store Summary ***********/
async function getStoreSummary(req, res) {
    try {
        const summary = await getStoreSummaryData();
        res.status(200).json(successAction(summary, Message.getStoreSummary));
    } catch(error) {
        res.status(400).json(failAction(status.FAILURE, error.message));
    }
}