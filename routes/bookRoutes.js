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

router.route('/books').get(getAllBooks).post(createBook)
router.route('/books/:id').get(getBook).patch(updateBook)
router.route('/books/:id/authors').get(getBooksAuthors)
router.route('/books/:id/reviews').get(getBooksReviews)












module.exports = router;