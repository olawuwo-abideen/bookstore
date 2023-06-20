const mongoose = require('mongoose');



const EmployeeSchema = new mongoose.Schema(
    {
        firstName: {
          type: String,
          required: [true, 'Please provide your first name'],
          maxlength: 50,
        },
        lastName: {
          type: String,
          required: [true, 'Please provide the description'],
          maxlength: 100,
        },
        birthDate: {
          type: Date,
          required: [true, 'Please provide your date of birth']
        },
        address: {
            type: String,
            required: [true, 'Please provide the link'],
            maxlength: 12,
          },
        phoneNumber: {
            type: String,
            required: [true, 'Please provide your phone number'],
            maxlength: 12,
          },
          email: {
            type: String,
            required: [true, 'Please provide your email'],
          },
        hireDate: {
            type: Date,
            required: [true, 'Please provide your hired date'],
            maxlength: 12,
          },
        employeeNumber: {
            type: Number,
            required: [true, 'Please provide the employee number'],
            maxlength: 12,
          },
        store: {
            type: Number,
            required: [true, 'Please provide the store name'],
            maxlength: 12,
          },
      },

)










module.exports = mongoose.model('Employee', EmployeeSchema);