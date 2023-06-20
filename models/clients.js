const mongoose = require('mongoose');



const ClientSchema = new mongoose.Schema(
    {
        Name: {
          type: String,
          required: [true, 'Please provide your first name'],
          maxlength: 50,
        },
        address: {
          type: String,
          required: [true, 'Please provide the description'],
          maxlength: 100,
        },
        phoneNumber: {
          type: Date,
          required: [true, 'Please provide your date of birth']
        },
        email: {
            type: String,
            required: [true, 'Please provide the link'],
          },
      },

)










module.exports = mongoose.model('Client', ClientSchema);