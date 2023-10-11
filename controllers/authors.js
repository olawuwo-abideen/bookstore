const  Authors = require('../models/authors');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const getAllAuthors = asyncWrapper(async (req, res) => {
    const author = await Authors.find({})
    res.status(200).json({author})   
});








const createAuthors = asyncWrapper(async (req, res) => {
    const createauthor = await Authors.create(req.body)
    res.status(201).json({createauthor})
});


const createProduct = async (req, res) => {
    req.body.user = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
  };










const  updateAuthors = asyncWrapper(async (req, res) => {
     
});


const getAuthors = asyncWrapper(async (req, res) => {
     
});







const getAuthorsBooks = asyncWrapper(async (req, res) => {
     
});










module.exports = {
    getAllAuthors,
    createAuthors,
    updateAuthors,
    getAuthors,
    getAuthorsBooks
}


