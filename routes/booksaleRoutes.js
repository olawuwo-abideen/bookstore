const express = require('express');
const router = express.Router();





const {
    getAllBookSales,
    createBookSales
    } = require('../controllers/booksales')

router.route('/booksales').get(getAllBookSales).post(createBookSales)









module.exports = router;