const  Clients = require('../models/clients');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


const createClient = async (req, res) => {
    const createclient = await Clients.create(req.body)
    res.status(StatusCodes.CREATED).json({createclient}) 
};


const getAllClient = async (req, res) => {
    const allclient = await Clients.find({})
    res.status(StatusCodes.OK).json({allclient})
};


const getSingleClient = async (req, res) => {
    const {id:clientId} = req.params
    const client = await Clients.findOne({_id:clientId});
    if(!client){
        throw new CustomError.NotFoundError(`No client with id : ${clientId}`);
    }
res.status(StatusCodes.OK).json({client})  
};




const updateClient = async (req, res) => {
    const {id:clientId} = req.params
    const client = await Clients.findOneAndUpdate({_id:clientId}, req.body,{
        new: true,
        runValidators: true 
});
    if(!client) {
        throw new CustomError.NotFoundError(`No client with id : ${clientId}`);
        
    }
    res.status(StatusCodes.OK).json({client}) 
};



module.exports = {
    getAllClient,
    createClient,
    getSingleClient,
    updateClient
}

