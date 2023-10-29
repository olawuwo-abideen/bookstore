const mongoose = require('mongoose');



const authorSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, 'Please provide your name'],
          maxlength: 50,
        },
        description: {
          type: String,
          required: [true, 'Please provide the book description'],
          maxlength: 100,
        },
        books: {
          type: String,
          required: [true, 'Please provide the book title'],
          maxlength: 50,
        },
        website: {
            type: String,
            required: [true, 'Please provide the website link'],
            maxlength: 50,
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
      }, 

)




module.exports = mongoose.model('Author', authorSchema);