const express = require('express');
const router = express.Router();





const {
    getAllAuthors,
    createAuthors,
    updateAuthors,
    getSingleAuthor,
    deleteAuthor,
    getAuthorBooks
    } = require('../controllers/authors')

router.route('/authors').get(getAllAuthors).post(createAuthors)
router.route('/authors/:id').patch(updateAuthors).get(getSingleAuthor).delete(deleteAuthor)
router.route('/authors/:id/books').get(getAuthorBooks)



module.exports = router;