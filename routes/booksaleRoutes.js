const express = require('express');
const router = express.Router();





const {
    getBookSales,
    createBookSales
    } = require('../controllers/booksale')

router.route('/booksales').get(getBookSales).post(createBookSales)









module.exports = router;