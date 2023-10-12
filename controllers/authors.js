const  Authors = require('../models/authors');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');



const getAllAuthors = async (req, res) => {
    
  };






const createAuthors = async (req, res) => {
    req.body.user = req.user.userId;
    const createauthor = await Authors.create(req.body);
    res.status(StatusCodes.CREATED).json({ createauthor });
  };









  const updateAuthors = async (req, res) => {
    
};


const getAuthors = async (req, res) => {
    
};


const getAuthorsBooks = async (req, res) => {
    
};











module.exports = {
    getAllAuthors,
    createAuthors,
    updateAuthors,
    getAuthors,
    getAuthorsBooks
}


