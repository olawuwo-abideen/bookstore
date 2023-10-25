const Stores = require('../models/store');
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
    
};


const getStoreEmployees = async (req, res) => {
    
};


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





const  getStoreBooksales = async (req, res) => {
    
};













module.exports = {
    getAllStores,
    createStores,
    getSingleStore,
    getStoreBooks,
    getStoreEmployees,
    getStoreBooksales,
    updateStores
}

