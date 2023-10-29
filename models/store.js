const mongoose = require('mongoose');



const storeSchema = new mongoose.Schema(
    {
        storeName: {
          type: String,
          required: [true, 'Please provide the store name'],
          maxlength: 50,
        },
        address: {
          type: String,
          required: [true, 'Please provide the store address'],
          maxlength: 100,
        },
        state: {
          type: String,
          required: [true, 'Please provide the store state'],
          maxlength: 50,
        },
        phoneNumber: {
            type: Number,
            required: [true, 'Please provide the employee phone number']
          },
        employee: {
            type: String,
            required: [true, 'Please provide the employee name'],
            maxlength: 50,
          },
      },

)










module.exports = mongoose.model('Store', storeSchema);