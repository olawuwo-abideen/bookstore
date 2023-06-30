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
    const {id:bookID} = req.params
    const book = await Task.findOne({_id:bookID});
    if(!book){
        return next(createCustomError (`No book with id : ${bookID}`, 404))
    }
res.status(200).json({book})  
});



const updateBook = asyncWrapper(async (req, res) => {
    const {id: bookID} = req.params
    const book = await Book.findOneAndUpdate({_id: bookID}, req.body,{
        new: true,
        runValidators: true 
});
    if(!book) {
        return next(createCustomError (`No task with id : ${bookID}`, 404))
    }
    res.status(200).json({book}) 
});



const getBooksAuthors = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})   
});



const getBooksReviews = asyncWrapper(async (req, res) => {
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