const  Employees = require('../models/employees');




const getAllEmployee = async (req, res) => {
    const allemployee = await Employees.find({})
    res.status(200).json({allemployee})   
};




const createEmployee = async (req, res) => {
    const createemployee = await Employees.create(req.body)
    res.status(201).json({createemployee})
};






const getEmployee = async (req, res) => {
    
};



const updateEmployee = async (req, res) => {
    
};
















module.exports = {
    getAllEmployee,
    createEmployee,
    getEmployee,
    updateEmployee
}

