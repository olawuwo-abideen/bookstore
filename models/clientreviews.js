const mongoose = require('mongoose');



const clientReviewSchema = new mongoose.Schema(
   { client: {
        type: Date,
        required: [true, 'Please provide your name'],
        maxlength: 50,
      },
      book: {
        type: String,
        required: [true, 'Please provide the book description'],
        maxlength: 100,
      },
      reviewText: {
        type: String,
        required: [true, 'Please provide the book review'],
        maxlength: 100,
      },
      stars: {
          type: Number,
          required: [true, 'Please provide the link'],
          values: [ 1, 2, 3, 4, 5],
        },
    }
)










module.exports = mongoose.model('ClientReview', clientReviewSchema);