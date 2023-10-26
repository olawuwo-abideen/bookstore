const express = require('express');
const router = express.Router();


const {
    getAllBooks,
    createBook,
    getSingleBook,
    updateBook,
    deleteBook,
    getBooksAuthors,
    getBooksReviews
    } = require('../controllers/books')

router.route('/').get(getAllBooks).post(createBook)
router.route('/book/:id').get(getSingleBook).patch(updateBook).delete(deleteBook)
router.route('/book/:id/authors').get(getBooksAuthors)
router.route('/book/:id/reviews').get(getBooksReviews)



module.exports = router;