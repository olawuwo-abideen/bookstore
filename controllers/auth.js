const  Authors = require('../models/authors');
const clients = require('../models/clients')
const  Employees = require('../models/employees');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createTokenUser } = require('../utils');



























module.exports = {
    register,
    login,
    updateUser,
    logout,
   
  };