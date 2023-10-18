const Stores = require('../models/store');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


const  getAllStores = async (req, res) => {
    const allstore = await Stores.find({})
    res.status(StatusCodes.OK).json({allstore}) 
};



const createStores = async (req, res) => {
    const createstore = await Stores.create(req.body)
    res.status(StatusCodes.CREATED).json({createstore})
};


const getStore = async (req, res) => {
    
};



const getStoreBooks = async (req, res) => {
    
};


const getStoreEmployees = async (req, res) => {
    
};


const updateStores = async (req, res) => {
    
};





const  getStoreBooksales = async (req, res) => {
    
};

























module.exports = {
    getAllStores,
    createStores,
    getStore,
    getStoreBooks,
    getStoreEmployees,
    getStoreBooksales,
    updateStores
}

