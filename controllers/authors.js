const  Authors = require('../models/authors');
const  Books = require('../models/books');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


const createAuthors = async (req, res) => {
  const createauthor = await Authors.create(req.body);
  res.status(StatusCodes.CREATED).json({createauthor});
};

const getSingleAuthor = async (req, res) => {
  const {id:authorId} = req.params
  const author = await Authors.findOne({_id:authorId});
  if(!author){
      throw new CustomError.NotFoundError(`No author with id : ${authorId}`);
    }
res.status(StatusCodes.OK).json({author})  
    };

const getAllAuthors = async (req, res) => {
    const authors = await Authors.find({})
    res.status(StatusCodes.OK).json({authors})  
    };

const updateAuthors = async (req, res) => {
    const {id:authorId} = req.params
    const author = await Authors.findOneAndUpdate({_id:authorId}, req.body,{
        new: true,
        runValidators: true 
});
    if(!author) {
        throw new CustomError.NotFoundError(`No author with id : ${authorId}`);
        
    }
    res.status(StatusCodes.OK).json({author}) 
};

const deleteAuthor = async (req, res) => {
    const {id:authorId} = req.params;
  
    const  author = await Authors.findOne({_id:authorId});
  
    if (!author) {
      throw new CustomError.NotFoundError(`No author with id  : ${authorId}`);
    }
  
    await author.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Author removed.' });
  };


  const getAuthorBooks = async (req, res) => {
  const {id:authorId} = req.params;
  const authorbooks = await Books.find({author:authorId});
  if(!authorbooks || authorbooks.length === 0 ) {
    throw new CustomError.NotFoundError(`No book for the author with id  : ${authorId}`);
  
};
res.status(StatusCodes.OK).json({authorbooks}) 
}




module.exports = {
    createAuthors,
    getSingleAuthor ,
    getAllAuthors,
    updateAuthors,
    deleteAuthor,
    getAuthorBooks
}


