const  Clients = require('../models/clients');





const getAllClient = async (req, res) => {
    const allclient = await Clients.find({})
    res.status(200).json({allclient})
};




const createClient = async (req, res) => {
    const createclient = await Clients.create(req.body)
    res.status(201).json({createclient}) 
};





const getClient = async (req, res) => {
    
};




const updateClient = async (req, res) => {
    
};





module.exports = {
    getAllClient,
    createClient,
    getClient,
    updateClient
}

