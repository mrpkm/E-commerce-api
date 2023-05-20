// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
// const ejs = require('ejs')

// initializing express
const app = express();


app.set('view engine', 'ejs')
app.use(express.static('./public'))

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({ extended: true }));


// using routes
app.use('/', require('./routes'));

// starting the server
app.listen(8000, function () {
    console.log('API is live on http://localhost:8000/products');
});