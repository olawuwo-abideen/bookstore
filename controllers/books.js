const  Books = require('../models/books');




const getAllBooks = asyncWrapper(async (req, res) => {
    const book = await Books.find({})
    res.status(200).json({book})   
});






const  createBook = asyncWrapper(async (req, res) => {
    const book = await Books.create(req.body)
    res.status(201).json({book})
});



const getBook = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})   
});



const updateBook = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})   
});



const getBooksAuthors = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})   
});



const     getBooksReviews
= asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})   
});














module.exports = {
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    getBooksAuthors,
    getBooksReviews
}