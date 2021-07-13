const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// importing routes
const vendorRoutes = require('./routes/vendors');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/order');


// connecting to database
 mongoose.connect('mongodb://localhost/DB_Biography', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
// using middleware
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// connecting the routes
app.use('/', vendorRoutes);
app.use('/', productRoutes);
app.use('/', orderRoutes );

const PORT = 5000;
app.listen(PORT, ()=>{console.log(`App is listen to ${PORT}`)});