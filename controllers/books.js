const  Books = require('../models/books');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');



const createBook  = async (req, res) => {
    const createbook = await Books.create(req.body)
    res.status(StatusCodes.CREATED).json({createbook})
};

const getAllBooks = async (req, res) => {
    const books = await Books.find({})
    res.status(StatusCodes.OK).json({books})  
    
};

const getSingleBook = async (req, res) => {
    const {id:bookID} = req.params
    const book = await Books.findOne({_id:bookID});
    if(!book){
        throw new CustomError.NotFoundError(`No book with id : ${bookID}`);
    }
res.status(StatusCodes.OK).json({book})  
    

};

const updateBook = async (req, res) => {
    const {id: bookID} = req.params
    const book = await Books.findOneAndUpdate({_id: bookID}, req.body,{
        new: true,
        runValidators: true 
});
    if(!book) {
        throw new CustomError.NotFoundError(`No book with id : ${bookID}`);
        
    }
    res.status(StatusCodes.OK).json({book}) 
};

const deleteBook = async (req, res) => {
    const { id: bookID } = req.params;
  
    const book = await Books.findOne({ _id: bookID });
  
    if (!book) {
      throw new CustomError.NotFoundError(`No book with id : ${bookID}`);
    }
  
    await book.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Book removed.' });
  };



const getBooksAuthors = async (req, res) => {
    const books = await Books.find({})
    res.status(200).json({books})   
    
};




const getBooksReviews = async (req, res) => {
    const books = await Books.find({})
    res.status(200).json({books})  
};









module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook,
    getBooksAuthors,
    getBooksReviews
}