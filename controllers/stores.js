const Stores = require('../models/store');
const  Books = require('../models/books');
const  Employees = require('../models/employees');
const  BookSales = require('../models/booksales');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');



const createStores = async (req, res) => {
    const createstore = await Stores.create(req.body)
    res.status(StatusCodes.CREATED).json({createstore})
};

const  getAllStores = async (req, res) => {
    const allstore = await Stores.find({})
    res.status(StatusCodes.OK).json({allstore}) 
};



const getSingleStore = async (req, res) => {
    const {id:storeId} = req.params
    const store = await Stores.findOne({_id:storeId});
    if(!store){
        throw new CustomError.NotFoundError(`No author with id : ${storeId}`);
      }
  res.status(StatusCodes.OK).json({store})  

};

const getStoreBooks = async (req, res) => {
    const {id:storeId} = req.params;
    const storebooks = await Books.find({store:storeId});
    if(!storebooks || storebooks.length === 0 ) {
      throw new CustomError.NotFoundError(`No books for the store with id  : ${storeId}`);
    
  };
  res.status(StatusCodes.OK).json({storebooks}) 
  }
  


const getStoreEmployees = async (req, res) => {
    const {id:storeId} = req.params;
    const storeemployee = await Employees.find({store:storeId});
    if(!storeemployee || storeemployee.length === 0 ) {
      throw new CustomError.NotFoundError(`No employee for the store with id  : ${storeId}`);
    
  };
  res.status(StatusCodes.OK).json({storebooks}) 
  }

const updateStores = async (req, res) => {
    const {id:storeId} = req.params
    const stores = await Stores.findOneAndUpdate({_id:storeId}, req.body,{
        new: true,
        runValidators: true 
});
    if(!stores) {
        throw new CustomError.NotFoundError(`No author with id : ${storeId}`);
        
    }
    res.status(StatusCodes.OK).json({stores}) 
};



const getStoreBooksales = async (req, res) => {
    const {id:storeId} = req.params;
    const storebooksales = await BookSales.find({store:storeId});
    if(!storebooksales || storebooksales.length === 0 ) {
      throw new CustomError.NotFoundError(`No booksales for the store with id  : ${storeId}`);
    
  };
  res.status(StatusCodes.OK).json({storebooksales}) 
  }




module.exports = {
    getAllStores,
    createStores,
    getSingleStore,
    getStoreBooks,
    getStoreEmployees,
    getStoreBooksales,
    updateStores
}

