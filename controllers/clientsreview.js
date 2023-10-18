const   ClientReviews = require('../models/clientreviews');
const { StatusCodes } = require('http-status-codes');







const createClientBookReview = async (req, res) => {
    const createclientbookreview = await ClientReviews.create(req.body)
    res.status(StatusCodes.OK).json({createclientbookreview})
};





module.exports = {
    createClientBookReview
}

