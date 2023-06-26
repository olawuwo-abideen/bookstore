const express = require('express');
const router = express.Router();









const {
    getAllClient,
    createClient,
    getClient,
    updateClient
    } = require('../controllers/clients')

router.route('/clients').get(getAllClient).post(createClient)
router.route('/clients/:id').get(getClient).patch(updateClient)









module.exports = router;