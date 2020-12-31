module.exports = function (express) {
    const router = express.Router();
    const storeController = require('../controllers/storeController');
    const orderController = require('../controllers/orderController')

    router.get('/get-store', storeController.getStore);
    router.get('/get-store-summary', storeController.getStoreSummary);
    router.get('/get-order', orderController.getOrder);
    router.post('/cancel-order', orderController.cancelOrder);
    return router;
}