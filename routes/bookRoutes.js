const express = require('express');
const router = express.Router();






const {
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    getAllBooksAuthors,
    getAllBooksReviews
    } = require('../controllers/books')

router.route('/books').get(getAllBooks).post(createBook)
router.route('/books/:id').get(getBook).patch(updateBook)
router.route('/books/:id/authors').get(getAllBooksAuthors)
router.route('/books/:id/reviews').get(getAllBooksReviews)












module.exports = router;
