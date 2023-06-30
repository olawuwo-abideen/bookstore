const  Employees = require('../models/employees');






const getAllEmployee = asyncWrapper(async (req, res) => {
    const allemployee = await Employees.find({})
    res.status(200).json({allemployee})   
});




const createEmployee = asyncWrapper(async (req, res) => {
    const createemployee = await Employees.create(req.body)
    res.status(201).json({createemployee})
});




const getEmployee = asyncWrapper(async (req, res) => {
     
});



const  updateEmployee = asyncWrapper(async (req, res) => {
     
});




















module.exports = {
    getAllEmployee,
    createEmployee,
    getEmployee,
    updateEmployee
}

