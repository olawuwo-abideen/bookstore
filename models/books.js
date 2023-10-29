const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema(
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
          type: Number,
          required: [true, 'Please provide the ISBN number'],
          maxlength: 30,
          unique: true,
        },
        store: {
            type: String,
            required: [true, 'Please provide the store name'],
            maxlength: 50,
          },
        genre: {
            type: String,
            required: [true, 'Please provide the genre of the book'],
            maxlength: 50,
          },
        description: {
            type: String,
            required: [true, 'Please provide the book description'],
            maxlength: 100,
          },
          review: {
            type: Number,
            required: [true, 'Please provide the book review'],
            values: [ 1, 2, 3, 4, 5],
          },
          price: {
            type: Number,
            required: [true, 'Please provide the book price'],
          },
      },
)










module.exports = mongoose.model('Book', bookSchema);