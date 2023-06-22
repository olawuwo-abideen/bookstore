const express = require('express');
const router = express.Router();





const {
    getAllBookSales,
    createBookSales
    } = require('../controllers/booksale')

router.route('/booksales').get(getAllBookSales).post(createBookSales)









module.exports = router;