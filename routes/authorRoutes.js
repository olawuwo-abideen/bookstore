const express = require('express');
const router = express.Router();





const {
    getAllAuthors,
    createAuthors,
    updateAuthors,
    getAuthors,
    getAuthorsBooks
    } = require('../controllers/authors')

router.route('/authors').get(getAllAuthors).post(createAuthors)
router.route('/authors/:id').patch(updateAuthors).get(getAuthors)
router.route('/authors/:id/books').get(getAuthorsBooks)











module.exports = router;