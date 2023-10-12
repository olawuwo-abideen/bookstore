const mongoose = require('mongoose');



const bookSaleSchema = new mongoose.Schema(
    {
        date: {
          type: Date,
          required: [true, 'Please provide the date'],
        },
        book: {
          type: String,
          required: [true, 'Please provide the book name'],
          maxlength: 50,
        },
        store: {
          type: String,
          required: [true, 'Please provide the store name'],
          maxlength: 50,
        },
        employee: {
            type: String,
            required: [true, 'Please provide the employee name'],
            maxlength: 50,
          },
        clients: {
            type: String,
            required: [true, 'Please provide the client name'],
            maxlength: 50,
          },
        totalAmount: {
            type: Number,
            required: [true, 'Please provide the total amount']
          },
      },


)










module.exports = mongoose.model('BookSale', bookSaleSchema);