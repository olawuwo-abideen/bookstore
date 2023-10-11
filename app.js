require('dotenv').config();
const express = require('express');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const helmet = require("helmet")

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
app.use(helmet());
app.use(cookieParser())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 

})

app.use(limiter)


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