const express = require('express');
const router = express.Router();








const {
    getBookReview
    } = require('../controllers/clientsreview')

router.route('/clientreviews').post(getBookReview)













module.exports = router;
