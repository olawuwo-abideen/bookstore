const express = require('express');
const router = express.Router();









const {
    getAllClient,
    getClient,
    createBook
    } = require('../controllers/employee')

router.route('/clients').get(getAllClient).post(getAllClient)
router.route('/clients/:id').get(getBook).post(updateBook)










module.exports = router;