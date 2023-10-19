const express = require('express');
const router = express.Router();


const {
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    getBooksAuthors,
    getBooksReviews
    } = require('../controllers/books')

router.route('/').get(getAllBooks).post(createBook)
router.route('/book/:id').get(getBook).patch(updateBook)
router.route('/book/:id/authors').get(getBooksAuthors)
router.route('/book/:id/reviews').get(getBooksReviews)












module.exports = router;