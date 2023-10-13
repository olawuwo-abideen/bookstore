require('dotenv').config();
require('express-async-errors');
 
//Express
const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');



//Database
const connectDB = require('./db/connect');


//  routers
const  authorRouter = require('./routes/authorRoutes')
// const  bookRouter = require('./routes/bookRoutes')
const  booksaleRouter = require('./routes/clientRoutes')
const  clientreviewRouter = require('./routes/clientreviewRoutes')
const  employeeRouter = require('./routes/employeeRoutes')
const  storeRouter = require('./routes/storeRoutes')

const  bookRouter = require('./routes/bookRoutes')

// middleware
app.use(express.json());
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// routes

app.get('/', (req, res) => {
  res.send('<h1>Welcome to God Plan Bookstore Api </h1>');
});



app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
// app.use(cors());
// app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser());



app.use('/api/v1/author', authorRouter);
app.use('/api/v1/book', bookRouter);
app.use('/api/v1/booksale', booksaleRouter);
app.use('/api/v1/clientreview', clientreviewRouter);
app.use('/api/v1/employee', employeeRouter);
app.use('/api/v1/store', storeRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



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
