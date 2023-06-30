const  BookSales = require('../models/booksales');



const getAllBookSales = asyncWrapper(async (req, res) => {
    const allbooksales = await BookSales.find({})
    res.status(200).json({allbooksales})   
});


const createBookSales = asyncWrapper(async (req, res) => {
    const allbooksales = await BookSales.create(req.body)
    res.status(201).json({allbooksales})
});







module.exports = {
    getAllBookSales,
    createBookSales
}

