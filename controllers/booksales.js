const  BookSales = require('../models/booksales');
const { StatusCodes } = require('http-status-codes');





const getAllBookSales = async (req, res) => {
    const allbooksales = await BookSales.find({})
    res.status(StatusCodes.OK).json({allbooksales}) 
};



const createBookSales = async (req, res) => {
    const createbooksales = await BookSales.create(req.body)
    res.status(StatusCodes.CREATED).json({createbooksales}) 
};






module.exports = {
    getAllBookSales,
    createBookSales
}

