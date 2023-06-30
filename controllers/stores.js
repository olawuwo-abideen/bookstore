const   Stores = require('../models/store');


const  getAllStores = asyncWrapper(async (req, res) => {
    const allstore = await Stores.find({})
    res.status(200).json({allstore}) 
});


const  createStores = asyncWrapper(async (req, res) => {
     
});



const  getStore = asyncWrapper(async (req, res) => {
     
});



const  getStoreBooks = asyncWrapper(async (req, res) => {
     
});


const  getStoreEmployees = asyncWrapper(async (req, res) => {
     
});


const   updateStores = asyncWrapper(async (req, res) => {
     
});



























module.exports = {
    getAllStores,
    createStores,
    getStore,
    getStoreBooks,
    getStoreEmployees,
    getStoreBooksales,
    updateStores
}

