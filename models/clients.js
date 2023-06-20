const mongoose = require('mongoose');



const clientSchema = new mongoose.Schema(
    {
        Name: {
          type: String,
          required: [true, 'Please provide your  name'],
          maxlength: 50,
        },
        address: {
          type: String,
          required: [true, 'Please provide the address'],
          maxlength: 100,
        },
        phoneNumber: {
          type: Number,
          required: [true, 'Please provide your phone number']
        },
        email: {
            type: String,
            required: [true, 'Please provide your email'],
          },
      },

)





module.exports = mongoose.model('Client', clientSchema);