// Requires
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/config/.env' })

// Initialize 
var app = express();

var PORT = process.env.PORT || 4000;


// Cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTION");
    next();
});


//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Import Routes
var appRoutes = require('./routes/v1/library');
var bookRoutes = require('./routes/v1/book');
var authorRoutes = require('./routes/v1/author');


// Routes
app.use('/api/v1', appRoutes);
app.use('/api/v1/library/book', bookRoutes);
app.use('/api/v1/library/author', authorRoutes);

//Conexión DB
// mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
mongoose.connect(`mongodb+srv://virtual-library:VLC0r0na@cluster0-5l3xl.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err + "********************************";
    console.log('Data Base Server running:\x1b[32m%s\x1b[0m', ' online');
});

app.listen(PORT, () => {
    console.log('Express Server running on port ' + PORT + ':\x1b[32m%s\x1b[0m', ' online');
});
