const express = require('express');
const router = express.Router();


const {
    getAllStores,
    createStores,
    getSingleStore,
    getStoreBooks,
    getStoreEmployees,
    getStoreBooksales,
    updateStores
    
    } = require('../controllers/stores')

router.route('/stores').get(getAllStores).post(createStores)
router.route('/stores/:id').get(getSingleStore).patch(updateStores)
router.route('/stores/:id/books').get(getStoreBooks)  
router.route('/stores/:id/employees').get(getStoreEmployees)  
router.route('/stores/:id/booksales').get(getStoreBooksales)  









module.exports = router;