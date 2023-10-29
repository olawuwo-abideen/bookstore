const mongoose = require('mongoose');



const clientSchema = new mongoose.Schema(
    {
        fullName: {
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
            match: [
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'Please provide a valid email',
            ],
            unique: true,
          },
          password: {
            type: String,
            required: [true, 'Please provide password'],
            minlength: 6,
          },
      },

)





module.exports = mongoose.model('Client', clientSchema);