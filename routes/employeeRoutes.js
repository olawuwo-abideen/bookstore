const express = require('express');
const router = express.Router();



const {
    getAllEmployee,
    createEmployee,
    getEmployee,
    updateEmployee
    } = require('../controllers/employee')

router.route('/employees').get(getAllEmployee).post(createEmployee)
router.route('/employees/:id').get(getEmployee).patch(updateEmployee)










module.exports = router;