const  Employees = require('../models/employees');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


const createEmployee = async (req, res) => {
    const createemployee = await Employees.create(req.body)
    res.status(StatusCodes.CREATED).json({createemployee})
};


const getAllEmployees = async (req, res) => {
    const allemployee = await Employees.find({})
    res.status(StatusCodes.OK).json({allemployee})   
};




const getSingleEmployee = async (req, res) => {
    const {id:employeeId} = req.params
    const employee = await Employees.findOne({_id:employeeId});
    if(!employee){
        throw new CustomError.NotFoundError(`No author with id : ${employeeId}`);
      }
  res.status(StatusCodes.OK).json({employee})  
      };





const updateEmployee = async (req, res) => {
    const {id: employeeId} = req.params
    const employee = await Employees.findOneAndUpdate({_id: employeeId}, req.body,{
        new: true,
        runValidators: true 
});
    if(!employee) {
        throw new CustomError.NotFoundError(`No book with id : ${employeeId}`);
        
    }
    res.status(StatusCodes.OK).json({employee}) 
};













module.exports = {
    createEmployee,
    getAllEmployees,
    getSingleEmployee,
    updateEmployee
}

