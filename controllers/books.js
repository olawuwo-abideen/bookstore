const  Books = require('../models/books');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');





const getAllBooks = async (req, res) => {
    const books = await Books.find({})
    res.status(StatusCodes.OK).json({books})  
    
};




const createBook  = async (req, res) => {
    const createbook = await Books.create(req.body)
    res.status(StatusCodes.CREATED).json({createbook})
};




const getBook = async (req, res) => {
    const {id:bookID} = req.params
    const book = await Task.findOne({_id:bookID});
    if(!book){
        return next(createCustomError (`No book with id : ${bookID}`, 404))
    }
res.status(200).json({book})  
    

};



const updateBook = async (req, res) => {
    const {id: bookID} = req.params
    const book = await Book.findOneAndUpdate({_id: bookID}, req.body,{
        new: true,
        runValidators: true 
});
    if(!book) {
        return next(createCustomError (`No task with id : ${bookID}`, 404))
    }
    res.status(200).json({book}) 
};




const getBooksAuthors = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})   
    
};







const getBooksReviews = async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})  
};









module.exports = {
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    getBooksAuthors,
    getBooksReviews
}