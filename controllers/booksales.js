const  BookSales = require('../models/booksales');





const getAllBookSales = async (req, res) => {
    const allbooksales = await BookSales.find({})
    res.status(200).json({allbooksales}) 
};



const createBookSales = async (req, res) => {
    const createbooksales = await BookSales.create(req.body)
    res.status(201).json({createbooksales}) 
};






module.exports = {
    getAllBookSales,
    createBookSales
}

