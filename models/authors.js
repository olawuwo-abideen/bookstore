const mongoose = require('mongoose');



const AuthorSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, 'Please provide your name'],
          maxlength: 50,
        },
        description: {
          type: String,
          required: [true, 'Please provide the description'],
          maxlength: 100,
        },
        books: {
          type: String,
          required: [true, 'Please provide the book title'],
          maxlength: 100,
        },
        website: {
            type: String,
            required: [true, 'Please provide the link'],
            maxlength: 100,
          },
      },

)










module.exports = mongoose.model('Author', AuthorSchema);