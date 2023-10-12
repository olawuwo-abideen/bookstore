const mongoose = require('mongoose');



const employeeSchema = new mongoose.Schema(
    {
        firstName: {
          type: String,
          required: [true, 'Please provide your first name'],
          maxlength: 50,
        },
        lastName: {
          type: String,
          required: [true, 'Please provide the description'],
          maxlength: 50,
        },
        birthDate: {
          type: Date,
          required: [true, 'Please provide your date of birth']
        },
        address: {
            type: String,
            required: [true, 'Please provide your address'],
            maxlength: 100,
          },
        phoneNumber: {
            type: Number,
            required: [true, 'Please provide your phone number'],
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
        hireDate: {
            type: Date,
            required: [true, 'Please provide your hired date']          },
        
        employeeNumber: {
            type: Number,
            required: [true, 'Please provide the employee number'],
            maxlength: 12,
          },
        store: {
            type: String,
            required: [true, 'Please provide the store name'],
            maxlength: 12,
          },
      },

)










module.exports = mongoose.model('Employee', employeeSchema);