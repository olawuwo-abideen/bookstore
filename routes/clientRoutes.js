const express = require('express');
const router = express.Router();









const {
    getAllBooks,
    createBook
    } = require('../controllers/employee')

router.route('/clients').get(getAllBooks).post(createBook)
router.route('/clients/:id').get(getBook).post(updateBook)










module.exports = router;
