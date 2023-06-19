const mongoose = require('mongoose');



const BookSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: [true, 'Please provide the book title'],
          maxlength: 50,
        },
        authors: {
          type: String,
          required: [true, 'Please provide the author name'],
          maxlength: 50,
        },
        ISBNCode: {
          type: String,
          required: [true, 'Please provide the ISBN number'],
          maxlength: 30,
        },
        store: {
            type: String,
            required: [true, 'Please provide the store name'],
            maxlength: 100,
          },
          genre: {
            type: String,
            required: [true, 'Please provide the genre of the book'],
            maxlength: 100,
          },
         description: {
            type: String,
            required: [true, 'Please provide the book description'],
            maxlength: 100,
          },
          review: {
            type: String,
            required: [true, 'Please provide the book review'],
            maxlength: 100,
          },
          price: {
            type: String,
            required: [true, 'Please provide the book price'],
            maxlength: 100,
          },
      },
)










module.exports = mongoose.model('Book', BookSchema);