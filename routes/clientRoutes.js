const express = require('express');
const router = express.Router();









const {
    getAllClient,
    createClient,
    getSingleClient,
    updateClient
    } = require('../controllers/clients')

router.route('/clients').get(getAllClient).post(createClient)
router.route('/clients/:id').get(getSingleClient).patch(updateClient)









module.exports = router;