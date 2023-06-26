require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// database
const connectDB = require('./db/connect');
const app = express();

//  routers
const  authorRouter = require('./routes/authorRoutes')
const  bookRouter = require('./routes/bookRoutes')
const  booksaleRouter = require('./routes/clientRoutes')
const  clientreviewRouter = require('./routes/clientreviewRoutes')
const  employeeRouter = require('./routes/employeeRoutes')
const  storeRouter = require('./routes/storeRoutes')


// midddlewares
app.use(notFound)
app.use(errorHandlerMiddleware)   



app.use('/api/v1/author', authorRouter);
app.use('/api/v1/book', bookRouter);
app.use('/api/v1/booksale', booksaleRouter);
app.use('/api/v1/clientreview', clientreviewRouter);
app.use('/api/v1/employee', employeeRouter);
app.use('/api/v1/store', storeRouter);






app.get('/', (req, res) => {
  res.send('<h1>Welcome to God Plan Bookstore Api </h1>');
});




 

const port = process.env.PORT || 3000;
const start = async () => { 
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();