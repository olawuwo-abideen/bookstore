const   Stores = require('../models/store');



const  getAllStores = async (req, res) => {
    const allstore = await Stores.find({})
    res.status(200).json({allstore}) 
};



const createStores = async (req, res) => {
    const createstore = await Stores.create(req.body)
    res.status(201).json({createstore})
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

