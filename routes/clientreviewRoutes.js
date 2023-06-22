const express = require('express');
const router = express.Router();








const {
    createClientBookReview
    } = require('../controllers/clientsreview')

router.route('/clientreviews').post( createClientBookReview)



















module.exports = router;