const express = require('express');
const router = express.Router();



const {
    getAllEmployees,
    createEmployee,
    getSingleEmployee,
    updateEmployee
    } = require('../controllers/employees')

router.route('/employees').get(getAllEmployees).post(createEmployee)
router.route('/employees/:id').get(getSingleEmployee).patch(updateEmployee)










module.exports = router;