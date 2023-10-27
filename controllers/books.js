const  Books = require('../models/books');
const  Authors = require('../models/authors');
const   ClientReviews = require('../models/clientreviews');
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
    const {id:bookId} = req.params
    const book = await Books.findOne({_id:bookId});
    if(!book){
        throw new CustomError.NotFoundError(`No book with id : ${bookId}`);
    }
res.status(StatusCodes.OK).json({book})  
    

};

const updateBook = async (req, res) => {
    const {id: bookId} = req.params
    const book = await Books.findOneAndUpdate({_id: bookId}, req.body,{
        new: true,
        runValidators: true 
});
    if(!book) {
        throw new CustomError.NotFoundError(`No book with id : ${bookId}`);
        
    }
    res.status(StatusCodes.OK).json({book}) 
};

const deleteBook = async (req, res) => {
    const { id: bookId } = req.params;
  
    const book = await Books.findOne({ _id: bookId });
  
    if (!book) {
      throw new CustomError.NotFoundError(`No book with id : ${bookId}`);
    }
  
    await book.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Book removed.' });
  };



  const getBooksAuthors = async (req, res) => {
    const {id:bookId} = req.params;
    const bookauthor = await Authors.find({book:bookId});
    if(!bookauthor || bookauthor.length === 0 ) {
      throw new CustomError.NotFoundError(`No author for the book with id  : ${bookId}`);
    
  };
  res.status(StatusCodes.OK).json({bookauthor}) 
  }
  
  
const getBooksReviews = async (req, res) => {
    const {id:bookId} = req.params;
    const bookreview = await  ClientReviews.find({book:bookId});
    if(!bookreview || bookreview.length === 0 ) {
      throw new CustomError.NotFoundError(`No review for the book with id  : ${bookId}`);
    
  };
  res.status(StatusCodes.OK).json({bookreview}) 
  }


module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook,
    getBooksAuthors,
    getBooksReviews
}