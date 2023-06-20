const mongoose = require('mongoose');



const storeSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, 'Please provide your name'],
          maxlength: 50,
        },
        address: {
          type: String,
          required: [true, 'Please provide the description'],
          maxlength: 100,
        },
        state: {
          type: String,
          required: [true, 'Please provide the book title'],
          maxlength: 50,
        },
        phoneNumber: {
            type: Number,
            required: [true, 'Please provide the link']
          },
        employee: {
            type: String,
            required: [true, 'Please provide the employee name'],
            maxlength: 50,
          },
      },

)










module.exports = mongoose.model('Store', storeSchema);